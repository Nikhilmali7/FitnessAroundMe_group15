package com.infoway.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.infoway.models.entities.Center;

import java.util.List;


public interface CenterDao extends JpaRepository<Center,Integer> {
//    List<Center> findByOwner(int owner_id);

    List<Center> findByLocality(String locality);

	List<Center> findByOwnerId(Integer owner_id);

//    List<Center> findByLocation(String locality);

//    List<Center> listall();

//    List<locality> findLocation();


}