package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.repository.CartnRepository;
import com.example.demo.repository.ProductRepository;
import com.example.demo.entity.Cartn;
import com.example.demo.entity.Member;
import com.example.demo.entity.Product;
import com.example.demo.service.CartnServiceImpl;
import com.example.demo.service.ProductServiceImpl;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class CartnController {
	@Autowired
	private CartnRepository cr;

	@Autowired
	private CartnServiceImpl cs;

	@Autowired
	private ProductServiceImpl ps;

	@Autowired
	private ProductRepository pr;

	@GetMapping("/atc")
	public List<Cartn> getAllProducts() {
		return cr.findAll();
	}

	
	@PostMapping(path = "/atc/{pid}")
	public void addToCart(@PathVariable(name = "pid") Integer productId)
	{
		Optional<Product> p = ps.getProductById(productId);
		Product p1 = p.get();
		System.out.println(p1);
		boolean exist=cr.existsById(productId);
		System.out.println(exist);
		Optional<Product> product = pr.findById(productId);
		int quantity = (product.get().getQuantity());
		if(exist)
		{				
			Optional<Cartn> cartn = cr.findById(productId);
			Cartn c2 = cartn.get();
			System.out.println(c2);
			c2.setPid(p1.getPid());
			c2.setProductname(p1.getProductname());
					
			product.get().setQuantity(quantity - 1);// p1.getQuantity()
			pr.save(product.get());		
			int q=c2.getQuantity();
			int id=c2.getPid();
			  System.out.println(q +"  "+ id); 
			  c2.setQuantity(q + 1);
			  c2.setDescri(p1.getDescription());
			  c2.setPrice((p1.getPrice())*(q+1));
			  cs.addNewCartn(c2);
			System.out.println("in if");
		} 
		else
		{
			Cartn c2 = new Cartn();
			c2.setQuantity(1);//p1.getQuantity()
			c2.setDescri(p1.getDescription());
			c2.setPrice((p1.getPrice()));
			c2.setProductname(p1.getProductname());
			c2.setPid(p1.getPid());
			cs.addNewCartn(c2); 
			System.out.println(c2);
			product.get().setQuantity(quantity - 1);
			pr.save(product.get());
		 System.out.println("Cart is Empty"); }
		}
	
	@PostMapping(path = "/atc/d/{pid}")
	public void deleteFromCart(@PathVariable(name = "pid") Integer productId)
	{
		Optional<Product> p = ps.getProductById(productId);
		Product p1 = p.get();
		System.out.println(p1);
		boolean exist=cr.existsById(productId);
		System.out.println(exist);
		Optional<Product> product = pr.findById(productId);
		int quantity = (product.get().getQuantity());
		int pprc= (product.get().getPrice());
		Optional<Cartn> cartn = cr.findById(productId);
		Cartn c2 = cartn.get();
		int qtty=c2.getQuantity();
		System.out.println("cart quantity"+qtty);
		if(qtty >= 2)
		{				
			if(qtty==1) {
				System.out.println("in else");
				cr.deleteById(productId);
			}
			System.out.println(c2);		
			product.get().setQuantity(quantity + 1);
			pr.save(product.get());		
			int q=c2.getQuantity();
			int id=c2.getPid();
			int prc=c2.getPrice();
			  System.out.println(q +"  "+ id); 
			  c2.setQuantity(q - 1);
			  c2.setPrice((prc-pprc));
			  cs.addNewCartn(c2);
			System.out.println("in if");
		} 
		else
		{
			System.out.println("in else");
			cr.deleteById(productId);
			 
		}
	}
	
	@DeleteMapping("/atc/delete")
    public void deleteCartn(@Valid @RequestBody Cartn cartn) {
        cr.delete(cartn);
    }
}
