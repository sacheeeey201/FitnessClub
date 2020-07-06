package com.example.demo.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.*;
import com.example.demo.repository.*;


@Service
public class OrderServiceImpl implements OrderService {

	@Autowired
	OrderRepository repository;

	@Override
	public boolean addNewOrder(Order entity) {
		Order returnEntity=repository.save(entity);
		return returnEntity!=null?true:false;
	}

}
