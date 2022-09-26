package com.infoway.daos;

import org.springframework.data.jpa.repository.JpaRepository;


import com.infoway.models.entities.Dietplan;


public interface DietplanDao  extends JpaRepository<Dietplan , Integer> {

}
