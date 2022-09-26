package com.infoway.services;

import com.infoway.models.entities.Center;

import java.util.List;

public interface CenterService {
    Center findById(int center_id);
    List<Center> findAll();
    List<Center> findMyCenters(int owner_id);

//    List<Center> findByLocation(String locality);
//    List<Center> findByOwner(int owner_id);
    Center save(Center u);
    Center update(Center u);
    void deleteById(int center_id);
    List<Center> findByLocality(String locality);
    List<Center> findByAddress(String address) ;
    List<Center> findByLocation(String locality);

//    List<Center> listall();


    List<String> findAllLocalities();
}
