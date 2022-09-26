package com.infoway.security;

import com.infoway.filters.APIKeyAuthFilter;
import com.infoway.models.entities.User;
import com.infoway.services.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;

@Configuration
@EnableWebSecurity
@Order(1)
public class APISecurityConfig extends WebSecurityConfigurerAdapter {

  @Value("${gym-management.http.auth-token-header-name}")
  private String principalRequestHeader;

  @Autowired
  AuthService authService;

  @Override
  protected void configure(HttpSecurity httpSecurity) throws Exception {
    APIKeyAuthFilter filter = new APIKeyAuthFilter(principalRequestHeader);
    filter.setAuthenticationManager(new AuthenticationManager() {

      @Override
      public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String principal = (String) authentication.getPrincipal();
        User user = authService.getAuthenticateUser(principal);
        if (user == null)
        {
          throw new BadCredentialsException("The API key was not found or not the expected value.");
        }
        authentication.setAuthenticated(true);


        return authentication;
      }
    });


    httpSecurity.cors().and().csrf().disable()
                  .addFilter(filter)
                  .authorizeRequests()
                  .antMatchers(HttpMethod.POST,"/users").permitAll()
                  .antMatchers(HttpMethod.POST, "/users/authenticateUser").permitAll()
                  .antMatchers("/**").authenticated();
  }

}