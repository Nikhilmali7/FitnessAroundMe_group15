package com.infoway.services;

import java.util.List;


import com.infoway.models.entities.Workoutplan;

public interface WorkoutplanService {
	    Workoutplan findById(int workoutid);
	    List<Workoutplan>findAll();
	    Workoutplan save(Workoutplan wp);
	    Workoutplan  update(Workoutplan wp);
	    void deleteById(int workoutid );
}
