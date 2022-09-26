package Exceptions;

public class CenterNotFoundException extends RuntimeException{	
	 public CenterNotFoundException(Integer id){
	        super("Could not found the Center with id "+ id);
	    }
}