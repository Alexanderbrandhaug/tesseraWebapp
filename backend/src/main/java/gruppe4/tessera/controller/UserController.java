package gruppe4.tessera.controller;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
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

@Controller
@RequestMapping(path = "/tessera/api")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping(path = "/users")
    public @ResponseBody Iterable<User> getAllUsers() {
        System.out.println("test");
        return userService.getAllUsers();
    }

    @GetMapping(path = "/user/{username}")
    public @ResponseBody User getUserByUsername(@PathVariable String username) {
        return userService.getUserByUsername(username);
    }

    @PostMapping(path = "/user")
    public @ResponseBody String createNewUser(@RequestParam String username, String description,
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate creationDate, String profilePicture,
            boolean isAdmin, String password) {

        User newUser = new User();
        newUser.setUsername(username);
        newUser.setDescription(description);
        newUser.setCreationDate(creationDate);
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
