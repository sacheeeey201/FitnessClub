package com.example.demo.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer>{

	
	  @Query(nativeQuery=true,value="select * from Product where pid=:pid")
	  public Product findValidProduct(@Param("pid") Integer pid);
	

}
