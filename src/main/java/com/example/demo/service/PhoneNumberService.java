package com.example.demo.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entity.PhoneNumber;
import com.example.demo.repository.PhoneNumberRepository;

import jakarta.transaction.Transactional;

@Service
public class PhoneNumberService {

    @Autowired
    private PhoneNumberRepository phoneNumberRepository;

    @Transactional
    public PhoneNumber savePhoneNumber(String number) {
        PhoneNumber phoneNumber = new PhoneNumber(number);
        return phoneNumberRepository.save(phoneNumber);
    }
    
    public PhoneNumber getLastPhoneNumber() {
      
        
        return phoneNumberRepository.findTopByOrderByIdDesc();
    }

}

