package com.example.demo.service;

import java.util.Optional;

import com.example.demo.entity.*;

public interface ProductService 
{
	Product addNewProduct(Product entity);
	//Product getValidProduct(String productname);
	public Optional<Product> getProductById(Integer pid);
	
}
