import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-car',
  templateUrl: './post-car.component.html',
  styleUrls: ['./post-car.component.scss']
})
export class PostCarComponent {
  
  constructor(private fb: FormBuilder, 
    private adminService: AdminService, 
    private message: NzMessageService, 
    private router: Router){}

  postCarForm!: FormGroup;
  isSpinning: boolean = false;
  selectedFile!: File;
  imagePreview!: string | ArrayBuffer | null;
  listOfOption: Array<{ label: string; value: string }> = [];
  listOfBrands = ["BMW", "AUDI", "FERRARI", "TESLA", "VOLVO", "TOYOTA", "HONDA", "FORD", "NISSAN", "HYUNDAI", "LEXUS", "KIA"];
  listOfType = ["Petrol", "Hybrid", "Diesel", "Electric", "CNG"];
  listOfColor = ["Red", "White", "Blue", "Orange", "Grey", "Silver"];
  listOfTransmission = ["Manual", "Automatic"];

  ngOnInit(){
    this.postCarForm = this.fb.group({
      name:[null, Validators.required],
      brand:[null, Validators.required],
      type:[null, Validators.required],
      color:[null, Validators.required],
      transmission:[null, Validators.required],
      year:[null, Validators.required],
      price:[null, Validators.required],
      description:[null, Validators.required]
    })
  }

  postCar(){
    console.log(this.postCarForm.value);
    this.isSpinning = true;
    const formData: FormData = new FormData();
    formData.append('img', this.selectedFile);
    formData.append('brand', this.postCarForm.get('brand')!.value);
    formData.append('name', this.postCarForm.get('name')!.value);
    formData.append('type', this.postCarForm.get('type')!.value);
    formData.append('color', this.postCarForm.get('color')!.value);
    formData.append('year', this.postCarForm.get('year')!.value);
    formData.append('transmission', this.postCarForm.get('transmission')!.value);
    formData.append('description', this.postCarForm.get('description')!.value);
    formData.append('price', this.postCarForm.get('price')!.value);
    console.log(formData);
    this.adminService.postCar(formData).subscribe({
        next: (res) => {
          this.isSpinning = false;
          this.message.success("Car posted successfully", {nzDuration: 5000});
          this.router.navigateByUrl("/admin/dashboard");
          console.log(res); 
        }, 
        error: () => {
          this.message.error("Error while posting car", {nzDuration: 5000})
        }
      })
  }

  onFileSelected(event: any){
    this.selectedFile = event.target.files[0];
    this.previewImage();
  }

  previewImage(){
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    }
    reader.readAsDataURL(this.selectedFile);
  }

}
