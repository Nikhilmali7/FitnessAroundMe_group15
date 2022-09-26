package com.infoway.controllers;
import java.util.List;

import com.infoway.models.entities.User;
import com.infoway.services.AuthService;
import com.infoway.services.CenterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.infoway.models.entities.Center;


@CrossOrigin
@RestController
public class CenterController {

	@Autowired
	private CenterService centerService;

	@Autowired
	private AuthService authService;


	@PostMapping("/center")
	Center newCenter(@RequestBody Center newCenter)
	{
		newCenter.setOwnerId(authService.getCurrentUser().getUser_id());
		return centerService.save(newCenter);
	}
	
	
	@GetMapping("/getcenters")
	List<Center> getAllCenters()
	{
		User user = authService.getCurrentUser();
		if (user.getRole().equals("owner")) {
			return centerService.findMyCenters(user.getUser_id());
		}

		return centerService.findAll();
	}

	@GetMapping("/my_centers")
	List<Center> getOwnerCenters() {
		return centerService.findMyCenters(authService.getCurrentUser().getUser_id());
	}


	@GetMapping("/all_centers")
	List<Center> getAllFilteredCenters(@RequestParam(name = "locality") String locality) {
		return centerService.findByLocality(locality);
	}


	@GetMapping("/localities")
	List<String> getAllLocations() {return centerService.findAllLocalities();}


	@GetMapping("/centers/{id}")
	Center getCenter(@PathVariable Integer id) {
		Center center = centerService.findById(id);
		return center;
	}

	@PutMapping("/centers/{id}")
	Center updateCenter(@RequestBody Center newCenter, @PathVariable Integer id) {
		Center center = centerService.findById(id);
		center.setName(newCenter.getName());
		center.setDescription(newCenter.getDescription());
		center.setLocality(newCenter.getLocality());
		center.setAddress(newCenter.getAddress());
		center.setContact(newCenter.getContact());
		center.setType(newCenter.getType());
		return centerService.save(center);
	}

	//delete user
	@DeleteMapping("/centers/{id}")
	public void delete(@PathVariable("id") int centerId){
		centerService.deleteById(centerId);
	}

}