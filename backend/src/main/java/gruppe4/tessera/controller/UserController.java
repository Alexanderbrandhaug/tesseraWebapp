package gruppe4.tessera.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import gruppe4.tessera.model.User;
import gruppe4.tessera.service.UserService;

@Controller
@RequestMapping(path = "/tessera/api")
@CrossOrigin("*")
public class UserController{

@Autowired
private UserService userService;



@GetMapping(path = "/users")
public @ResponseBody Iterable<User> getAllUsers(){
    System.out.println("test");
    return userService.getAllUsers();
}


@GetMapping(path = "/user/{username}")
public @ResponseBody User getUserByUsername(@PathVariable String username){
    return userService.getUserByUsername(username);
 }
}