//package com.example.demo.service;
//
//import com.example.demo.entity.SosRequest;
//import com.example.demo.repository.SosRepository;
//import com.twilio.Twilio;
//import com.twilio.rest.api.v2010.account.Call;
//import com.twilio.rest.api.v2010.account.Message;
//import com.twilio.type.PhoneNumber;
//import com.twilio.type.Twiml;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.stereotype.Service;
//
//import java.time.LocalDateTime;
//
//@Service
//public class SosService {
//
//    @Value("${twilio.account.sid}")
//    private String accountSid;
//
//    @Value("${twilio.auth.token}")
//    private String authToken;
//
//    @Value("${twilio.phone.number}")
//    private String fromNumber;
//
//    @Value("${twilio.whatsapp.number}")
//    private String whatsappNumber;
//
//    private final SosRepository sosRepository;
//
//    public SosService(SosRepository sosRepository) {
//        this.sosRepository = sosRepository;
//    }
//
//    public SosRequest triggerSOS(String phoneNumber, Double lat, Double lng) {
//        Twilio.init(accountSid, authToken);
//
//        String locationUrl = "https://www.google.com/maps?q=" + lat + "," + lng;
//
//        SosRequest sos = new SosRequest();
//        sos.setPhoneNumber(phoneNumber);
//        sos.setLatitude(lat);
//        sos.setLongitude(lng);
//        sos.setCreatedAt(LocalDateTime.now());
//
//        try {
//            Call call = Call.creator(
//                    new PhoneNumber(phoneNumber),
//                    new PhoneNumber(fromNumber),
//                    new Twiml("<Response><Say>Emergency Accident! Please check WhatsApp for location</Say></Response>")
//            ).create();
//
//            Message sms = Message.creator(
//                    new PhoneNumber(phoneNumber),
//                    new PhoneNumber(fromNumber),
//                    "Emergency Accident! Location: " + locationUrl
//            ).create();
//
//            Message whatsapp = Message.creator(
//                    new PhoneNumber("whatsapp:" + phoneNumber),
//                    new PhoneNumber("whatsapp:" + whatsappNumber),
//                    "Emergency Accident! Location: " + locationUrl
//            ).create();
//
//            sos.setStatus("TRIGGERED");
//
//        } catch (Exception e) {
//            sos.setStatus("FAILED: " + e.getMessage());
//        }
//
//        return sosRepository.save(sos);
//    }
//}


package com.example.demo.service;

import com.example.demo.entity.SosRequest;
import com.example.demo.repository.SosRepository;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Call;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import com.twilio.type.Twiml;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class SosService {

    @Value("${twilio.account.sid}")
    private String accountSid;

    @Value("${twilio.auth.token}")
    private String authToken;

    @Value("${twilio.phone.number}")
    private String fromNumber;

    @Value("${twilio.whatsapp.number}")
    private String whatsappNumber;

    private final SosRepository sosRepository;

    public SosService(SosRepository sosRepository) {
        this.sosRepository = sosRepository;
    }

    // Existing method - trigger SOS
    public SosRequest triggerSOS(String phoneNumber, Double lat, Double lng) {
        Twilio.init(accountSid, authToken);

        String locationUrl = "https://www.google.com/maps?q=" + lat + "," + lng;
        String bingUrl = "https://www.bing.com/maps?q=" + lat + "," + lng;
        

        SosRequest sos = new SosRequest();
        sos.setPhoneNumber(phoneNumber);
        sos.setLatitude(lat);
        sos.setLongitude(lng);
        sos.setCreatedAt(LocalDateTime.now());

        try {
        	
            Call call = Call.creator(
                    new PhoneNumber(phoneNumber),
                    new PhoneNumber(fromNumber),
                    new Twiml("<Response><Say> Emergency! Emergency! An accident has been reported. \r\n"
                    		+ "    Please check WhatsApp immediately to find the location and provide help without delay.</Say>"
                    		  + "<Say voice=\"Polly.Raveena\" language=\"te-IN\">"
                    	        + "Emergency! Accident jariigindi. don't panic. "
                    	        + "Nenu WhatsApp lo location pampaanu. Ventane aa location ki randi."
                    	        + "</Say>"
                    	      
                    		+ "</Response>")
            ).create();

            Message sms = Message.creator(
                    new PhoneNumber(phoneNumber),
                    new PhoneNumber(fromNumber),
                    "🚨 *Emergency Alert!* 🚨\n\n" +
                            "An accident has been reported nearby.\n\n" +
                            "📍 Location: " + locationUrl + "\n\n" +
                            "⚠️ Please reach the location immediately and provide assistance.\n" +
                            "Every second matters! 🙏"
            ).create();

            Message whatsapp = Message.creator(
                    new PhoneNumber("whatsapp:" + phoneNumber),
                    new PhoneNumber("whatsapp:" + whatsappNumber),
                    "🚨 *Emergency Alert!* 🚨\n\n" +
                            "An accident has been reported nearby.\n\n" +
                            "📍  Google Map Location: " + locationUrl + "\n\n" +
                            "📍 Bing Map Location: "+bingUrl+"\n\n"+
                            "⚠️ Please reach the location immediately and provide assistance.\n" +
                            "Every second matters! 🙏"
            ).create();

            sos.setStatus("TRIGGERED");

        } catch (Exception e) {
            sos.setStatus("FAILED: " + e.getMessage());
        }

        return sosRepository.save(sos);
    }

    //   method - fetch last SOS request
    
    public SosRequest getLastSos() {
        SosRequest latestRequest = sosRepository.findTopByOrderByCreatedAtDesc();
        if (latestRequest != null) {
            // use latestRequest
            return latestRequest;
        }
        return null; // or throw exception if you prefer
    }

}

