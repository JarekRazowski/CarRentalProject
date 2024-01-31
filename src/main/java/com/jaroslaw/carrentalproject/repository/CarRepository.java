package com.jaroslaw.carrentalproject.repository;

import com.jaroslaw.carrentalproject.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarRepository extends JpaRepository<Car, Long> {
}
