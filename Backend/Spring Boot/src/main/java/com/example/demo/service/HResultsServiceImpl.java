package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.HResults;
import com.example.demo.repository.HResultsRepository;

@Service
public class HResultsServiceImpl implements HResultsService {

	@Autowired
	HResultsRepository repository;
	
	@Override
	public HResults addNewHResults(HResults entity) {
		repository.save(entity);
		return entity;
	}

	@Override
	public Optional<HResults> getHResultsById(Integer rid) {
		Optional<HResults> r=repository.findById(rid);
		return r;
	}

	@Override
	public Optional<HResults> getMemberHresultById(Integer mid) {
		Optional<HResults> mr=repository.findById(mid);
		return mr;
	}

	@Override
	public HResults getResult(int id) {
		// TODO Auto-generated method stub
		Optional<HResults> result=repository.findById(id);
		System.out.println(id);
		System.out.println(result.get());
		return result.get();
	}

	/*
	 * @Override public HResults getValidResults(Integer id) { return
	 * repository.findValidResult(id); }
	 * 
	 * @Override public HResults getValidResult(int mid) { HResults
	 * hrslt=repository.findValidResult(mid); return hrslt; }
	 */
	
		@Override public HResults getResults(int mid) { 
		HResults hrslt=repository.findResults(mid); 
		return hrslt; }

		@Override
		public HResults getValidResults(Integer id) {
			HResults hrslt=repository.findResults(id); 
			return hrslt; 
		}
		
	 

}
