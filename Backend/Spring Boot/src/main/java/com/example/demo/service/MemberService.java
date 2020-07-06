package com.example.demo.service;

import com.example.demo.entity.*;

public interface MemberService 
{
	boolean addNewMember(Member entity);
	Member getValidMember(String username,String password);
}