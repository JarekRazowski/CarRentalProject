package com.jaroslaw.carrentalproject.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Data
@Table(name="cars")
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "Id", nullable = false)
    private Long id;
    @Column(name = "Car_brand", nullable = false)
    private String brand;
    @Column(name = "Car_color", nullable = false)
    private String color;
    @Column(name = "Car_name", nullable = false)
    private String name;
    @Column(name = "Car_type", nullable = false)
    private String type;
    @Column(name = "Car_transmission", nullable = false)
    private String transmission;
    @Column(name = "Car_description", nullable = false)
    private String description;
    @Column(name = "Car_price", nullable = false)
    private Long price;
    @Column(name = "Car_year", nullable = false)
    private Date year;
    @Column(columnDefinition = "longblob")
    private byte[] image;
}
