package com.example.demo.service;

import java.util.Optional;

import com.example.demo.entity.*;

public interface CartnService {
	Cartn addNewCartn(Cartn entity);
	public Optional<Cartn> getProduct(int pid);
}
