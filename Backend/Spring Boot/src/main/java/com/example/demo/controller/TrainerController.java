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
import com.example.demo.repository.TrainerRepository;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.entity.Trainer;
import com.example.demo.service.TrainerServiceImpl;


@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class TrainerController {
    @Autowired
    private TrainerRepository trainerRepository;
    
    @Autowired
	private TrainerServiceImpl trainerService;
    
	/*
	 * @Autowired CustomerService customerService;
	 */

    @GetMapping("/trainers")
    public List<Trainer> getAllTrainers() {
        return trainerRepository.findAll();
    }

    @GetMapping("/trainers/{id}")
    public ResponseEntity<Trainer> getTrainerById(@PathVariable(value = "id") int trainerId)
        throws ResourceNotFoundException {
        Trainer trainer = trainerRepository.findById(trainerId)
          .orElseThrow(() -> new ResourceNotFoundException("Trainer not found for this id :: " + trainerId));
        return ResponseEntity.ok().body(trainer);
   //second way to getTrainer
   // return trainerRepository.findById(trainerId).get();
    }
    
    @PostMapping("/trainers")
    public Trainer createTrainer(@Valid @RequestBody Trainer trainer) {
        return trainerRepository.save(trainer);
    }

    @PutMapping("/trainers/{id}")
    public ResponseEntity<Trainer> updateTrainer(@PathVariable(value = "id") int trainerId,
         @Valid @RequestBody Trainer trainerDetails) throws ResourceNotFoundException {
    	Trainer trainer = trainerRepository.findById(trainerId)
        .orElseThrow(() -> new ResourceNotFoundException("Trainer not found for this id :: " + trainerId));

    	trainer.setEmail(trainerDetails.getEmail());
    	trainer.setName(trainerDetails.getName());
    	trainer.setContact(trainerDetails.getContact());  
    	trainer.setUsername(trainerDetails.getUsername()); 
    	trainer.setPassword(trainerDetails.getPassword());
    	trainer.setDob(trainerDetails.getDob());
    	trainer.setSpeciality(trainerDetails.getSpeciality());  
    	trainer.setExperience(trainerDetails.getExperience()); 
    	trainer.setGender(trainerDetails.getGender()); 
    	trainer.setAddr(trainerDetails.getAddr());
    	
        final Trainer updatedTrainer = trainerRepository.save(trainer);
        return ResponseEntity.ok(updatedTrainer);
    }

    @DeleteMapping("/trainers/{id}")
    public Map<String, Boolean> deleteTrainer(@PathVariable(value = "id") int trainerId)
         throws ResourceNotFoundException {
    	Trainer trainer = trainerRepository.findById(trainerId)
       .orElseThrow(() -> new ResourceNotFoundException("Trainer not found for this id :: " + trainerId));

        trainerRepository.delete(trainer);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
        //second way for delete
       // trainerRepository.deleteById(trainerId);
    }
    
	
	  
    @GetMapping("/trainers/getValidTrainer") public Trainer getValidTrainer(@RequestParam(name="username")String username,@RequestParam(name="password")String password) {
  	  System.out.println(username +" "+ password);
  	  return
  	  trainerService.getValidTrainer(username,password); }
	 
	
}

