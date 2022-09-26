package com.infoway.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.infoway.models.entities.GymMember;

public interface GymMemberDao extends JpaRepository<GymMember, Integer> {
 
	//GymMember findByEmail(String email);
	//List<GymMember> findByRole(String role);
}