package com.example.demo.service;

import com.example.demo.entity.*;



public interface TrainerService {

	boolean addNewTrainer(Trainer entity);
	
	Trainer getValidTrainer(String username,String password);
	
}
