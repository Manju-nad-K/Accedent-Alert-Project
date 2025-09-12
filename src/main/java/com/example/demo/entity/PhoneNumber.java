package com.example.demo.entity;




import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name = "emergency_numbers")
public class PhoneNumber {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "phone_number", nullable = false)
  
    private String number;

    public PhoneNumber() {}

    public PhoneNumber(String phoneNumber) {
        this.number = phoneNumber;
    }

    public Long getId() {
        return id;
    }

    public String getPhoneNumber() {
        return number;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.number = phoneNumber;
    }
}



