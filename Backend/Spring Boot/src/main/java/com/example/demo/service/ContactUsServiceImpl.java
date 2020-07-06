package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.ContactUs;
import com.example.demo.repository.ContactUsRepository;


@Service
public class ContactUsServiceImpl implements ContactUsService{

	@Autowired
	ContactUsRepository repository;
	
	@Override
	public ContactUs addNewContactUs(ContactUs entity) {
		repository.save(entity);
		return entity;
	}

}
