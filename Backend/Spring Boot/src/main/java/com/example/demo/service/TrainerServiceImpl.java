package com.example.demo.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entity.Trainer;
import com.example.demo.repository.*;


@Service
public class TrainerServiceImpl implements TrainerService {

	@Autowired
	TrainerRepository repository;
	
	@Override
	public boolean addNewTrainer(Trainer entity) {
		Trainer returnEntity=repository.save(entity);
		return returnEntity!=null?true:false;
	}

	@Override
	public Trainer getValidTrainer(String username, String password) {
		// TODO Auto-generated method stub
		return repository.findValidTrainer(username,password);
	}

	
}
