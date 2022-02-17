package gruppe4.tessera.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import gruppe4.tessera.model.Post;

@Repository
public interface PostRepository extends CrudRepository<Post, Integer> {
    Optional<Post> getPostById(Integer id);

    Iterable<Post> findPostsByUserId(Integer id);
}
