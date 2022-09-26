package com.infoway.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.infoway.models.entities.Plan;


public interface PlanDao extends JpaRepository<Plan , Integer> {
	//User findByEmail(String email);
	//List<User> findByRole(String role);
}
