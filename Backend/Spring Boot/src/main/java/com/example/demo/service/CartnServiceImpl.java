package com.example.demo.service;



import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entity.Cartn;
import com.example.demo.repository.CartnRepository;

@Service
public class CartnServiceImpl implements CartnService{

	@Autowired
	CartnRepository repository;
	
	@Override
	public Cartn addNewCartn(Cartn entity) {
		System.out.println(entity);
		repository.save(entity);
		return entity;
	}

	@Override
	public Optional<Cartn> getProduct(int pid) {
		// TODO Auto-generated method stub
		return repository.findById(pid);
	}

	
}
 