package com.infoway.controllers;

import javax.servlet.http.HttpSession;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.infoway.models.entities.User;
import com.infoway.models.Response;
import com.infoway.services.UserService;

@CrossOrigin(maxAge = 3600)
@RestController
public class LoginController {
	@Autowired  
	private UserService userService;   
	
	
	
	  @PostMapping("/users/authenticateUser")
		public ResponseEntity<?> authenticateUser(User user,HttpSession session) {

			User authuser = userService.findByEmail(user.getEmail());

			if(authuser!=null && authuser.getRole().equals("trainer") ){
				if(authuser.getPassword().equals(user.getPassword()) ){
					
					return Response.success(authuser);
				}
			}else if(authuser!=null && authuser.getRole().equals("owner") ){		//trainer
				if(authuser.getPassword().equals(user.getPassword()) ){
					
					return Response.success(authuser);
				}
			}else if(authuser!=null && authuser.getRole().equals("user") ){		//member
				if(authuser.getPassword().equals(user.getPassword()) ){
					
					return Response.success(authuser);
				}
			}	
			return Response.error("404");
		}
	
}








