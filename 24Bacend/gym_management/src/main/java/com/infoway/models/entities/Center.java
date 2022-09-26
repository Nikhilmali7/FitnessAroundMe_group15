package com.infoway.models.entities;


import lombok.AllArgsConstructor;
import lombok.Data;
import net.bytebuddy.implementation.bind.annotation.AllArguments;

import java.sql.Date;
import javax.persistence.*;

@Entity
@Table(name="centers")
@Data
@AllArgsConstructor
public class Center {

	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String name;
	private String description;
	private String locality;
	private String address;
	private String contact;
	private int ownerId;
	private String type;
	
	
	public Center() {	}

	
	public Center(Integer id, String name, String description, String locality, String address, String contact, Integer ownerId, String type) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.locality = locality;
		this.address = address;
		this.contact = contact;
		this.ownerId = ownerId;
		this.type = type;
	}

	public Center(String locality){
		super();
		this.locality=locality;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getLocality() {
		return locality;
	}

	public void setLocality(String locality) {
		this.locality = locality;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public Integer getOwnerId() {
		return ownerId;
	}
	public void setOwnerId(int ownerId) {
		this.ownerId = ownerId;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
}