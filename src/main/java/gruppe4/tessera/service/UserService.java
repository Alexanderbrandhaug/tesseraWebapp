package gruppe4.tessera.service;

import java.util.Optional;

import org.springframework.stereotype.Service;
import gruppe4.tessera.model.User;
import gruppe4.tessera.repository.UserRepository;

//service class that uses UserRepository in order to CRUD User entitys in the DB
@Service
public class UserService {

    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public boolean saveUser(User user) {
        userRepository.save(user);
        return true;
    }
    public User getUserById(Integer id){
        return userRepository.findUserById(id);
    }

    public Boolean editUserByID(Integer userID, String username, String password) {
        User user = getUserById(userID);
        user.setUsername(username);
        user.setPassword(password);
        userRepository.save(user);
        return true;
    }
}
