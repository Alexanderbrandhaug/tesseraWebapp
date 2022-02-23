package gruppe4.tessera.controller;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import gruppe4.tessera.model.User;
import gruppe4.tessera.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;

@Controller
@RequestMapping(path = "/tessera/api")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping(path = "/users")
    @Operation(summary = "Get all registered users")
    public @ResponseBody Iterable<User> getAllUsers() {
        System.out.println("test");
        return userService.getAllUsers();
    }

    @GetMapping(path = "/user/{username}")
    @Operation(summary = "Get a single user based on the username")
    public @ResponseBody User getUserByUsername(@Parameter(description = "username of the user to be found")
    @PathVariable String username) {
        return userService.getUserByUsername(username);
    }

    @PostMapping(path = "/user")
    @Operation(summary = "Register a new user")
    public @ResponseBody String createNewUser(@RequestParam String username, String description, String profilePicture, boolean isAdmin, String password) {

        User newUser = new User();
        LocalDate localdate = LocalDate.now();
        newUser.setUsername(username);
        newUser.setDescription(description);
        newUser.setCreationDate(localdate);
        newUser.setProfilePicture(profilePicture);
        newUser.setSuspended(false);
        newUser.setAdmin(isAdmin);
        newUser.setPassword(password);

        if (userService.saveUser(newUser)) {
            return "User successfully created";
        }
        return "Not created";
    }
}
