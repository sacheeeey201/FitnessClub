package com.example.demo.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entity.*;
import com.example.demo.repository.*;

@Service
public class MemberServiceImpl implements MemberService {

	@Autowired
	MemberRepository repository;
	
	@Override
	public boolean addNewMember(Member entity) {
		Member returnEntity=repository.save(entity);
		return returnEntity!=null?true:false;
	}

	@Override
	public Member getValidMember(String username, String password) {
		// TODO Auto-generated method stub
		return repository.findValidMember(username,password);
	}

}
