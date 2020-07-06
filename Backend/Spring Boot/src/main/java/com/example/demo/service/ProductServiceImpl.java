package com.example.demo.service;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.*;
import com.example.demo.repository.*;


@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	ProductRepository repository;

	@Override
	public Product addNewProduct(Product entity) {
		repository.save(entity);
		//return returnEntity!=null?true:false;
		return entity;
	}

	@Override
	public Optional<Product> getProductById(Integer pid) {
		
		Optional<Product> p=repository.findById(pid);
		//System.out.println(p);
		return p;
	}

}
