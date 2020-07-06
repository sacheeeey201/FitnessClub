package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.*;


@Repository
public interface MemberRepository extends JpaRepository<Member, Integer>
{
	@Query(nativeQuery=true,value="select * from members where username=:username and password=:password") 
	public Member findValidMember(@Param("username") String username,@Param("password") String password);
}