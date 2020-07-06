package com.example.demo.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="contactus")
public class ContactUs implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@NotNull
	@Id
	@Column(name="csid")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int csid;
	
	@NotBlank
	@Column(name = "name")
	private String name;
	
	@NotBlank
	@Column(name = "email")
	private String email;
	
	@NotBlank
	@Column(name = "contact")
	private String contact;
	
	@NotBlank
	@Column(name = "message")
	private String message;

	public int getCsid() {
		return csid;
	}

	public void setCsid(int csid) {
		this.csid = csid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "ContactUs [csid=" + csid + ", name=" + name + ", email=" + email + ", contact=" + contact + ", message="
				+ message + "]";
	}

	
	
}