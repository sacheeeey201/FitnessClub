package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.HResults;
import com.example.demo.entity.Member;

@Repository
public interface HResultsRepository extends JpaRepository<HResults, Integer>{
	
	/*
	 * @Query(nativeQuery=true,value="select * from HResults where rid=:rid") public
	 * HResults findValidHResult(@Param("rid") Integer rid);
	 * 
	 * @Query(nativeQuery=true,value="select * from HResults where mid=:mid") public
	 * HResults findMemberHResult(@Param("mid") Integer mid);
	 */

	//@Query(nativeQuery=true,value="select * from HResults where mid=:mid ") 
	//public HResults findValidResult(@Param("mid") Integer mid);
	
	/*
	 * @Query(nativeQuery=true,value="select * from HResults where mid=:mid") public
	 * HResults findValidResult(@Param("mid") Integer mid);
	 */
	
	@Query("select u from HResults u where u.mid = ?1")
	HResults findResults(Integer mid);
}
