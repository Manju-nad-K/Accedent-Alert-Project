package com.example.demo.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.PhoneNumber;
import com.example.demo.service.PhoneNumberService;

@RestController
@RequestMapping("/api/phone")
@CrossOrigin(origins = "http://localhost:4200")
public class PhoneNumberController {

    @Autowired
    private PhoneNumberService phoneNumberService;

  
    @PostMapping("/save")
    public PhoneNumber savePhoneNumber(@RequestBody PhoneRequest request) {
        return phoneNumberService.savePhoneNumber(request.getPhoneNumber());
    }

   
 

    @GetMapping("/last")
    public PhoneNumber getLastPhoneNumber() {
        return phoneNumberService.getLastPhoneNumber();
    }

   
    public static class PhoneRequest {
        private String phoneNumber;

        public String getPhoneNumber() {
            return phoneNumber;
        }

        public void setPhoneNumber(String phoneNumber) {
            this.phoneNumber = phoneNumber;
        }
    }
}
