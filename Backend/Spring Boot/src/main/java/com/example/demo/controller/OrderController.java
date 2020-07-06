package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.repository.ProductRepository;
import com.example.demo.repository.TrainerRepository;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.entity.Order;
import com.example.demo.entity.Product;
import com.example.demo.entity.Trainer;
import com.example.demo.repository.OrderRepository;
import com.example.demo.service.OrderService;
import com.example.demo.service.ProductServiceImpl;
import com.example.demo.service.TrainerService;
import com.example.demo.service.TrainerServiceImpl;


@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class OrderController {
    @Autowired
    private OrderRepository orderRepository;
    
    @Autowired
	private OrderService orderService; 
    
	/*
	 * @Autowired CustomerService customerService;
	 */

    @GetMapping("/orders")
    public List<Order> getAllProducts() {
        return orderRepository.findAll();
    }

    @GetMapping("/orders/{id}")
    public ResponseEntity<Order> getTrainerById(@PathVariable(value = "id") int orderId)
        throws ResourceNotFoundException {
    	Order order = orderRepository.findById(orderId)
          .orElseThrow(() -> new ResourceNotFoundException("Product not found for this id :: " + orderId));
        return ResponseEntity.ok().body(order);
   //second way to getTrainer
   // return trainerRepository.findById(trainerId).get();
    }
    
    @PostMapping("/orders")
    public Order createTrainer(@Valid @RequestBody Order order) {
        return orderRepository.save(order);
    }

    @PutMapping("/orders/{id}")
    public ResponseEntity<Order> updateOrder(@PathVariable(value = "id") int orderId,
         @Valid @RequestBody Order orderDetails) throws ResourceNotFoundException {
    	Order order = orderRepository.findById(orderId)
        .orElseThrow(() -> new ResourceNotFoundException("Order not found for this id :: " + orderId));

    	order.setOid(orderDetails.getOid()); 
    	order.setPid(orderDetails.getPid());  
    	order.setMid(orderDetails.getMid());  	 
    	order.setTotal(orderDetails.getTotal());
    	
        final  Order updatedOrder = orderRepository.save(order);
        return ResponseEntity.ok(updatedOrder);
    }

    @DeleteMapping("/orders/{id}")
    public Map<String, Boolean> deleteOrder(@PathVariable(value = "id") int orderId)
         throws ResourceNotFoundException {
    	Order order = orderRepository.findById(orderId)
       .orElseThrow(() -> new ResourceNotFoundException("Order not found for this id :: " + orderId));

    	orderRepository.delete(order);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
        //second way for delete
       // trainerRepository.deleteById(trainerId);
    }
    
	
	/*
	 * @GetMapping("/products/getValidProduct") public Trainer
	 * getValidProduct(@RequestParam(name="username")String
	 * username,@RequestParam(name="password")String password) {
	 * System.out.println(username +" "+ password); return
	 * productService.getValidProduct(username,password); }
	 */
	 
	
}

