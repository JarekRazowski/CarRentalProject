package com.jaroslaw.carrentalproject.dto;

import com.jaroslaw.carrentalproject.enums.UserRole;
import lombok.Data;

@Data
public class AuthenticationResponse {

    private String jwt;

    private UserRole userRole;

    private Long userId;
}
