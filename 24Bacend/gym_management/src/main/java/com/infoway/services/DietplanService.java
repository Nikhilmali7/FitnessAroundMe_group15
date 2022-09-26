package com.infoway.services;

import java.util.List;

import com.infoway.models.entities.Dietplan;

public interface DietplanService {
	    Dietplan findById(int planid);
	    List<Dietplan>findAll();
	    Dietplan save(Dietplan dp);
	    Dietplan  update(Dietplan dp);
	    void deleteById(int planid);
}