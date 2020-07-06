package com.example.demo.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="members")
public class Member implements Serializable {
	
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@Column(name="mid")
	@GeneratedValue(strategy = GenerationType.AUTO)
	int mid;

	@Column(name="username")
	String username;
	
	@Column(name="name")
	String name;
	
	@Column(name="addr")
	String addr;
	
	@Column(name="email")
	String email;
	
	@Column(name="contact")
	String contact;
	
	@Column(name="mem_type")
	String mem_type;
	
	@Column(name="gender")
	String gender;
	
	@Column(name="password")
	String password;
	
	@Column(name="dob")
	String dob;

	public int getMid() {
		return mid;
	}

	public void setMid(int mid) {
		this.mid = mid;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddr() {
		return addr;
	}

	public void setAddr(String addr) {
		this.addr = addr;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getMem_type() {
		return mem_type;
	}

	public void setMem_type(String mem_type) {
		this.mem_type = mem_type;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "Member [mid=" + mid + ", username=" + username + ", name=" + name + ", addr=" + addr + ", email="
				+ email + ", contact=" + contact + ", mem_type=" + mem_type + ", gender=" + gender + ", password="
				+ password + ", dob=" + dob + "]";
	}

	


	
	
}
