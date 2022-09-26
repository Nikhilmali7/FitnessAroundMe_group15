package com.infoway.services;

import java.util.List;

import com.infoway.models.entities.User;

public interface UserService {
    User findById(int user_id);
    List<User>findAll();
    User save(User u);
    User update(User u);
    void deleteById(int user_id);
    public User authenticate(String email, String password);
    User findByEmail(String email);
	List<User> findByRole(String role) ;
    
}
