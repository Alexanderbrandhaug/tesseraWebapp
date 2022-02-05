package gruppe4.tessera.service;
import java.util.List;

import org.springframework.stereotype.Service;

import gruppe4.tessera.model.User;
import gruppe4.tessera.repository.UserRepository;

//service class that uses UserRepository in order to CRUD User entitys in the DB
@Service
public class UserService  {
    
    private UserRepository userRepositoryService;

    public UserService(UserRepository userRepositoryService){
        this.userRepositoryService = userRepositoryService;
    }

    public User findUserByEmail(String email){
        return userRepositoryService.findByEmail(email);
    }
    public void saveUser(User user){
        userRepositoryService.save(user);
    }
    public Iterable<User> getAllUsers(){
        return userRepositoryService.findAll();
    }
}
