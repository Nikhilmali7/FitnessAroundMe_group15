package com.infoway.models.entities;

import org.apache.commons.lang.RandomStringUtils;

import javax.persistence.*;

@Entity
@Table(name="users")
public class User {
	
	
	  @Id
	  @GeneratedValue(strategy = GenerationType.IDENTITY)
	  private int user_id;
	  private String name;
	  private String contact;
	  private String address;
	  private String email;
	  private String password;
	  private String role;

	  @Column(unique=true)
	  private String authToken;



	public User() {
		
	}


	public User(int user_id, String name, String contact, String address, String email, String password, String role,
			String authToken) {
		super();
		this.user_id = user_id;
		this.name = name;
		this.contact = contact;
		this.address = address;
		this.email = email;
		this.password = password;
		this.role = role;
		this.authToken = authToken;
//		this.centers = centers;
	}




	public int getUser_id() {
		return user_id;
	}



	public void setUser_id(int user_id) {
		this.user_id = user_id;
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



	public String getAddress() {
		return address;
	}



	public void setAddress(String address) {
		this.address = address;
	}



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	public String getPassword() {
		return password;
	}



	public void setPassword(String password) {
		this.password = password;
	}



	public String getRole() {
		return role;
	}



	public void setRole(String role) {
		this.role = role;
	}

	public String getAuthToken() {
		return authToken;
	}

	public void setAuthToken(String authToken) {
		this.authToken = authToken;
	}

	@Override
	public String toString() {
		return "User [user_id=" + user_id + ", name=" + name + ", contact=" + contact + ", address=" + address
				+ ", email=" + email + ", password=" + password + ", role=" + role + "]";
	}


	public String generateAuthToken() {
		return RandomStringUtils.random(16,true,true);
	}
}