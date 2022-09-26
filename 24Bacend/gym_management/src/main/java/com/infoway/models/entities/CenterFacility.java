package com.infoway.models.entities;

import javax.persistence.*;

@Entity
@Table(name="center_facilities")
public class CenterFacility {

    @Id
    @GeneratedValue
    private Integer id;

    private int centerId;

    private int facilityId;

    public CenterFacility() { }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public int getCenterId() {
        return centerId;
    }

    public void setCenterId(int centerId) {
        this.centerId = centerId;
    }

    public int getFacilityId() {
        return facilityId;
    }

    public void setFacilityId(int facilityId) {
        this.facilityId = facilityId;
    }
}
