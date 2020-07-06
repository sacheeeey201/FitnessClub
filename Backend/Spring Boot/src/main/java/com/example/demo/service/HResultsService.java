package com.example.demo.service;

import java.util.Optional;

import com.example.demo.entity.HResults;
import com.example.demo.entity.Member;

public interface HResultsService {
	HResults addNewHResults(HResults entity);
	public Optional<HResults> getHResultsById(Integer rid);
	public Optional<HResults> getMemberHresultById(Integer mid);
	public HResults getResult(int id);
	public HResults getValidResults(Integer id);
	HResults getResults(int mid);
}
