package com.example.demo.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="hresults")
public class HResults implements Serializable {
	
	private static final long serialVersionUID = 1L;

	@Id 
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int rid;
	
	
	@Column(name="mid")
	private int mid;
	

	@Column(name = "height")
	private int height;
	
	@Column(name = "weight")
	private String weight;
	
	@Column(name = "date")   
	private String date;
	
	@Column(name = "healthProblem")
	private String healthProblem;
	
	@Column(name = "bmi")
	private String bmi;

	public int getRid() {
		return rid;
	}

	public void setRid(int rid) {
		this.rid = rid;
	}

	public int getMid() {
		return mid;
	}

	public void setMid(int mid) {
		this.mid = mid;
	}

	public int getHeight() {
		return height;
	}

	public void setHeight(int height) {
		this.height = height;
	}

	public String getWeight() {
		return weight;
	}

	public void setWeight(String weight) {
		this.weight = weight;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getHealthProblem() {
		return healthProblem;
	}

	public void setHealthProblem(String healthProblem) {
		this.healthProblem = healthProblem;
	}

	public String getBmi() {
		return bmi;
	}

	public void setBmi(String bmi) {
		this.bmi = bmi;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "HResults [rid=" + rid + ", mid=" + mid + ", height=" + height + ", weight=" + weight + ", date=" + date
				+ ", healthProblem=" + healthProblem + ", bmi=" + bmi + "]";
	}

	
	
}
