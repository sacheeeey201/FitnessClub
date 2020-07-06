package com.example.demo.entity;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="cartn")
public class Cartn implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@NotNull
	@Id
	@Column
	private int pid;
	@GeneratedValue(generator="increment")

	@NotBlank
	@Column(name = "productname")
	private String productname;
	
	@NotNull
	@Column(name = "quantity")
	private int quantity;
	
	@NotNull
	@Column(name = "price")
	private int price;
	
	@NotBlank
	@Column(name = "descri")
	private String descri;

	public int getPid() {
		return pid;
	}

	@Override
	public String toString() {
		return "Cartn [pid=" + pid + ", productname=" + productname + ", quantity=" + quantity + ", price=" + price
				+ ", descri=" + descri + "]";
	}

	public void setPid(int pid) {
		this.pid = pid;
	}

	public String getProductname() {
		return productname;
	}

	public void setProductname(String productname) {
		this.productname = productname;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}


	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public String getDescri() {
		return descri;
	}

	public void setDescri(String descri) {
		this.descri = descri;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	

}
