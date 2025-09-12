//package com.example.demo.controller;
//
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import com.example.demo.entity.SosRequest;
//import com.example.demo.service.SosService;
//import com.twilio.Twilio;
//import com.twilio.type.Twiml;
//import com.twilio.rest.api.v2010.account.Call;
//import com.twilio.rest.api.v2010.account.Message;
//import com.twilio.type.PhoneNumber;
//
//@RestController
//@RequestMapping("/api/sos")
//@CrossOrigin(origins = "http://localhost:4200")
//public class SosController {
//	
//	
//	
//	
//	
//	
//	 private final SosService sosService; 
//
//	
//	    public SosController(SosService sosService) {
//	        this.sosService = sosService;
//	    }
//
//	    @PostMapping("/call")
//	    public ResponseEntity<SosRequest> triggerCall(@RequestBody PhoneRequest request) {
//	        if (request.getLatitude() == null || request.getLongitude() == null) {
//	            return ResponseEntity.badRequest().build();
//	        }
//	        SosRequest savedRequest = sosService.triggerSOS(
//	                request.getPhoneNumber(),
//	                request.getLatitude(),
//	                request.getLongitude()
//	        );
//	        return ResponseEntity.ok(savedRequest);
//	    }
//	
//	
// 
//
//    
//    public static class PhoneRequest {
//        private String phoneNumber;
//        private Double latitude;   
//        private Double longitude;  
//
//        public String getPhoneNumber() { return phoneNumber; }
//        public void setPhoneNumber(String phoneNumber) { this.phoneNumber = phoneNumber; }
//
//        public Double getLatitude() { return latitude; }
//        public void setLatitude(Double latitude) { this.latitude = latitude; }
//
//        public Double getLongitude() { return longitude; }
//        public void setLongitude(Double longitude) { this.longitude = longitude; }
//    }
//}
//
//



package com.example.demo.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.SosRequest;
import com.example.demo.service.SosService;

import java.util.Optional;

@RestController
@RequestMapping("/api/sos")
@CrossOrigin(origins = "http://localhost:4200")
public class SosController {

    private final SosService sosService;

    public SosController(SosService sosService) {
        this.sosService = sosService;
    }

    //  Trigger SOS (call + sms + whatsapp)
    @PostMapping("/call")
    public ResponseEntity<SosRequest> triggerCall(@RequestBody PhoneRequest request) {
        if (request.getLatitude() == null || request.getLongitude() == null) {
            return ResponseEntity.badRequest().build();
        }
        SosRequest savedRequest = sosService.triggerSOS(
                request.getPhoneNumber(),
                request.getLatitude(),
                request.getLongitude()
        );
        return ResponseEntity.ok(savedRequest);
    }

    // Get the last SOS reqest (latest phone number, location, status)
    @GetMapping("/last")
    public ResponseEntity<SosRequest> getLastSos() {
        SosRequest lastSos = sosService.getLastSos();
        if (lastSos != null) {
            return ResponseEntity.ok(lastSos);
        } else {
            return ResponseEntity.noContent().build();
        }
    }


    // ✅ DTO class for request body
    public static class PhoneRequest {
        private String phoneNumber;
        private Double latitude;
        private Double longitude;

        public String getPhoneNumber() { return phoneNumber; }
        public void setPhoneNumber(String phoneNumber) { this.phoneNumber = phoneNumber; }

        public Double getLatitude() { return latitude; }
        public void setLatitude(Double latitude) { this.latitude = latitude; }

        public Double getLongitude() { return longitude; }
        public void setLongitude(Double longitude) { this.longitude = longitude; }
    }
}

