package com.infoway.daos;

import org.springframework.data.jpa.repository.JpaRepository;


import com.infoway.models.entities.Workoutplan;

public interface WorkoutplanDao  extends JpaRepository<Workoutplan , Integer>{

}
