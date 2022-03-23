package gruppe4.tessera.repository;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import gruppe4.tessera.model.User;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete
@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
    User findByUsername(String username);
    User findUserById(Integer id);

    @Transactional
    @Modifying
    @Query(value = "UPDATE users SET username = ?2, password = ?3 WHERE id = ?1", nativeQuery = true)
    public void updateUserByID(Integer userID, String username, String password);

}