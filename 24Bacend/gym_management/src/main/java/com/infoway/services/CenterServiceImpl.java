package com.infoway.services;

import com.infoway.daos.CenterDao;
import com.infoway.models.entities.Center;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Transactional
@Service
public class CenterServiceImpl implements CenterService {

    @Autowired
    private CenterDao centerDao;

    
    @Override
    public Center findById(int center_id) {
        Optional<Center> b = centerDao.findById(center_id);
        return b.orElse(null);
    }

    @Override
    public List<Center> findAll() {
        return centerDao.findAll();
    }

    @Override
    public List<Center> findMyCenters(int owner_id) {
        return centerDao.findByOwnerId(owner_id);
    }

//    @Override
//    public List<Center> findByOwner(int owner_id) {
//        return centerDao.findByOwner(owner_id);
//    }

    @Override
    public Center save(Center u) {
        return centerDao.save(u);
    }

    @Override
    public Center update(Center u) {
        return centerDao.save(u);
    }

    @Override
    public void deleteById(int center_id) {
        centerDao.deleteById(center_id);
    }

    @Override
    public List<Center> findByLocality(String locality) {
        return centerDao.findByLocality(locality);
    }

    @Override
    public List<Center> findByAddress(String address) {
        return centerDao.findByLocality(address);
    }

    @Override
    public List<Center> findByLocation(String locality) {
        return centerDao.findByLocality(locality);
    }

    @Override
    public List<String> findAllLocalities() {
        List<Center> centers = centerDao.findAll();
        return centers.stream()
                .map(center -> center.getLocality().toUpperCase())
                .distinct().collect(Collectors.toList());

    }

//    @Override
//    public List<Center> findLocation() {
//        return null;
//    }

//    @Override
//    public List<Center> listall(){
//        return centerDao.listall();
//    }
}
