package com.jaroslaw.carrentalproject.services.admin;

import com.jaroslaw.carrentalproject.dto.CarDto;

import java.io.IOException;

public interface AdminService {

    boolean postCar(CarDto carDto) throws IOException;
}
