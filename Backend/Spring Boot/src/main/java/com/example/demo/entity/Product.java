package com.example.demo.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="product")
public class Product implements Serializable {
	
	private static final long serialVersionUID = 1L;

	@Id
	@Column
	@GeneratedValue(generator="increment")
	private int pid;

	
	@Column(name = "productname")
	private String productname;
	
	@Column(name = "quantity")
	private int quantity;
	
	@Column(name = "m_date")
	private String m_date;
	
	@Column(name = "e_date")
	private String e_date;
	
	@Override
	public String toString() {
		return "Product [pid=" + pid + ", productname=" + productname + ", quantity=" + quantity + ", m_date=" + m_date
				+ ", e_date=" + e_date + ", price=" + price + ", description=" + description + "]";
	}

	@Column(name = "price")
	private int price;
	
	@Column(name = "description")
	private String description;

	public int getPid() {
		return pid;
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

	public String getM_date() {
		return m_date;
	}

	public void setM_date(String m_date) {
		this.m_date = m_date;
	}

	public String getE_date() {
		return e_date;
	}

	public void setE_date(String e_date) {
		this.e_date = e_date;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	
}
