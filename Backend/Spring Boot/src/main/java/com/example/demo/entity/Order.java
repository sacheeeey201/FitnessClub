package com.example.demo.entity;

import java.io.Serializable;
import com.example.demo.entity.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.*;

@Entity
@Table(name="orders")
public class Order implements Serializable {
	
	
	private static final long serialVersionUID = 1L;

	  @Id
	  @Column(name="oid")
	  @GeneratedValue (generator="increment")
	  private  int oid;
	
	 
	  @Column(name="pid")
	  private int pid;
		
	  
	  @Column(name="mid")
	  private  int mid;
	  
	  @Column(name="total")
	  private String total;

	public int getOid() {
		return oid;
	}

	public void setOid(int oid) {
		this.oid = oid;
	}

	

	public int getPid() {
		return pid;
	}

	public void setPid(int pid) {
		this.pid = pid;
	}

	public int getMid() {
		return mid;
	}

	public void setMid(int mid) {
		this.mid = mid;
	}

	public String getTotal() {
		return total;
	}

	public void setTotal(String total) {
		this.total = total;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "Order [oid=" + oid + ", pid=" + pid + ", mid=" + mid + ", total=" + total + "]";
	}
	
	
}