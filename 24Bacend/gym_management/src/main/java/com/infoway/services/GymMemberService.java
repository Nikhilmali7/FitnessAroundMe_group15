package com.infoway.services;

import java.util.List;

import com.infoway.models.entities.GymMember;


public interface GymMemberService {
	GymMember findById(int memberId );
    List<GymMember>findAll();
    GymMember save(GymMember gm);
    GymMember update(GymMember gm);
    void deleteById(int memberId);
//    GymMember findByEmail(String email);
	//List<GymMember> findByRole(String role) ;
}