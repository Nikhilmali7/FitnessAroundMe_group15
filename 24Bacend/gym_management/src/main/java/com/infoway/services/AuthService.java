package com.infoway.services;


import com.infoway.daos.UserDao;
import com.infoway.models.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    @Autowired
    private UserDao userDao;

    public User getAuthenticateUser(String apiKey) {
        return userDao.findByAuthToken(apiKey);
    }

    public User getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return getAuthenticateUser((String) authentication.getPrincipal());
    }
}
