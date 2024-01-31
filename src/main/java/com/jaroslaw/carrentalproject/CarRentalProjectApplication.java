package com.jaroslaw.carrentalproject;

import com.jaroslaw.carrentalproject.entity.Car;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.jaroslaw.carrentalproject.dto.CarDto;

import java.io.IOException;

@SpringBootApplication
public class CarRentalProjectApplication {
    public static void main(String[] args) {
        SpringApplication.run(CarRentalProjectApplication.class, args);
    }
}
