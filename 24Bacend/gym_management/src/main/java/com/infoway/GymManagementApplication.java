package com.infoway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class GymManagementApplication{

	public static void main(String[] args) {
		SpringApplication.run(GymManagementApplication.class, args);
	}

//	@Autowired
//	private UserServiceImpl userService;
//	
//	@Override
//	public void run(String... args) throws Exception {
//		User user = userService.findById(1001);
//	System.out.println(user);
//		
//		List<User> list = userService.findAll();
//		for (User element : list) {
//			System.out.println(element.toString());
//		}
//		 
////		User email = userService.findByEmail("rohit@gmail.com");		
////		System.out.println(email.toString());
////		
////		List<User> member_list = userService.findByRole("member");
////		for (User element : member_list) {
////			System.out.println(element);
////		}
		
		
//	}

}
