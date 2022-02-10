package gruppe4.tessera.repository;



import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import gruppe4.tessera.model.User;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete
@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
 User findById(int id);
}