package com.jaroslaw.carrentalproject.dto;

import com.jaroslaw.carrentalproject.enums.UserRole;
import lombok.Data;

@Data
public class UserDto {
    private Long id;
    private String name;
    private String email;
    private UserRole userRole;
}
