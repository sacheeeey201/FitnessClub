package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.ContactUs;
import com.example.demo.entity.Product;

@Repository
public interface ContactUsRepository extends JpaRepository<ContactUs, Integer>{

	
	  @Query(nativeQuery=true,value="select * from contactus where csid=:csid")
	  public ContactUs findValidContactUs(@Param("csid") Integer csid);
	

}
