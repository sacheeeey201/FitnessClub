package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.*;


@Repository
public interface OrderRepository extends JpaRepository<Order, Integer>
{
	@Query(nativeQuery=true,value="select * from order where oid=:oid") 
	 public Order findValidOrder(@Param("oid") Integer oid);
}
