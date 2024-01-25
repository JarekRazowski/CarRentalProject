package com.jaroslaw.carrentalproject.services.auth;

import com.jaroslaw.carrentalproject.dto.SignupRequest;
import com.jaroslaw.carrentalproject.dto.UserDto;

public interface AuthService {

    UserDto createCustomer(SignupRequest signupRequest);

    boolean hasCustomerWithEmail(String email);
}
