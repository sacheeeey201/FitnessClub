package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.entity.*;

@Repository
public interface CartnRepository extends JpaRepository<Cartn, Integer>{
	
	@Transactional
	@Query(nativeQuery=true,value="INSERT INTO cartn (pid,productname, price,descri,quantity) SELECT pid, productname, price,description ,quantity FROM product WHERE (pid=:pid)")
	 public Cartn addToCartn(@Param("pid") int pid);
	
	
}


/*
@Transactional
@Query(value = "INSERT INTO recipes(title, description) VALUES (?1, ?2)", nativeQuery = true)
    void insertRecipes(String title, String description);

@PostMapping(path = "/all/create")
public void addRecipes(@RequestParam("title") String title, @RequestParam(value = "description") String description){
    Recipes recipe = new Recipes();
    recipe.setTitle(title);
    recipe.setDescription(description);
    repo.insertRecipes(recipe.getTitle(), recipe.getDescription());
    }
   */