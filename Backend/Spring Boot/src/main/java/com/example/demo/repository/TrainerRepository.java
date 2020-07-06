package com.example.demo.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Product;
import com.example.demo.entity.Trainer;


@Repository
public interface TrainerRepository extends JpaRepository<Trainer, Integer>{

	
	  @Query(nativeQuery=true,value="select * from trainer where username=:username and password=:password") 
	  public Trainer findValidTrainer(@Param("username") String username,@Param("password") String password);

	public Product save(Product entity);
	
		
//		@Modifying(clearAutomatically = true)
//		@Query(nativeQuery=true,value="UPDATE customer SET c_password=:password WHERE c_username = :username")
//		@Transactional
//		public int updatepassword(@Param("password") CustomerEntity username,@Param("username") CustomerEntity password);
	//	
		
		
}
