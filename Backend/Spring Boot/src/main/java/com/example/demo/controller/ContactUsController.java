package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.repository.ContactUsRepository;
import com.example.demo.repository.ProductRepository;
import com.example.demo.repository.TrainerRepository;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.entity.ContactUs;
import com.example.demo.entity.Product;
import com.example.demo.entity.Trainer;
import com.example.demo.repository.TrainerRepository;
import com.example.demo.service.ContactUsServiceImpl;
import com.example.demo.service.ProductServiceImpl;
import com.example.demo.service.TrainerService;
import com.example.demo.service.TrainerServiceImpl;


@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class ContactUsController {
    @Autowired
    private ContactUsRepository contactUsRepository;
    
    @Autowired
	private ContactUsServiceImpl contactUsService;
    
	/*
	 * @Autowired CustomerService customerService;
	 */

    @GetMapping("/contactUs")
    public List<ContactUs> getAllContactUs() {
    	System.out.println(contactUsRepository.findAll());
        return contactUsRepository.findAll();
    }

    @GetMapping("/contactUs/{id}")
    public ResponseEntity<ContactUs> getContactUsById(@PathVariable(value = "id") int cuId)
        throws ResourceNotFoundException {
    	ContactUs contactUs = contactUsRepository.findById(cuId)
          .orElseThrow(() -> new ResourceNotFoundException("Details not found for this id :: " + cuId));
        return ResponseEntity.ok().body(contactUs);
   //second way to getTrainer
   // return trainerRepository.findById(trainerId).get();
    }
    
    @PostMapping("/contactUs")
    public ContactUs createContactUs(@Valid @RequestBody ContactUs contactUs) {
        return contactUsRepository.save(contactUs);
    }

 
    @DeleteMapping("/contactUs/{id}")
    public Map<String, Boolean> deleteContactUs(@PathVariable(value = "id") int cuId)
         throws ResourceNotFoundException {
    	ContactUs contactUs = contactUsRepository.findById(cuId)
       .orElseThrow(() -> new ResourceNotFoundException("Product not found for this id :: " + cuId));

    	contactUsRepository.delete(contactUs);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
      
    }
    
}