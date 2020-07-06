package com.example.demo.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="trainer")
public class Trainer implements Serializable {
	
	
	private static final long serialVersionUID = 1L;
	
	  @NotNull
	  @Id
	  @Column(name="t_id")
	  @GeneratedValue (generator="increment")
	  int t_id;
	  
	  @NotBlank
	  @Column(name="username")
	  String username;
	  
	  @NotBlank
	  @Column(name="password")
	  String password;
	  
	  @NotBlank
	  @Column(name="name")
	  String name;
	  
	  @NotBlank
	  @Column(name="contact")
	  String contact;
	  
	  @NotBlank
	  @Column(name="email")
	  String email;
	  
	  @NotBlank
	  @Column(name="addr")
	  String addr;
	  
	  @NotBlank
	  @Column(name="gender")
	  String gender;
	  
	  @NotBlank
	  @Column(name="dob")
	  String dob;
	  
	  @NotBlank
	  @Column(name="experience")
	  String experience;
	  
	  @NotBlank
	  @Column(name="speciality")
	  String speciality;

	public int getT_id() {
		return t_id;
	}

	public void setT_id(int t_id) {
		this.t_id = t_id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAddr() {
		return addr;
	}

	public void setAddr(String addr) {
		this.addr = addr;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public String getExperience() {
		return experience;
	}

	public void setExperience(String experience) {
		this.experience = experience;
	}

	public String getSpeciality() {
		return speciality;
	}

	public void setSpeciality(String speciality) {
		this.speciality = speciality;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "Trainer [t_id=" + t_id + ", username=" + username + ", password=" + password + ", name=" + name
				+ ", contact=" + contact + ", email=" + email + ", addr=" + addr + ", gender=" + gender + ", dob=" + dob
				+ ", experience=" + experience + ", speciality=" + speciality + "]";
	}
	  
}
