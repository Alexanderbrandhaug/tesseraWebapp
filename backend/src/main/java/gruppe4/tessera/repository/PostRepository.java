package gruppe4.tessera.repository;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import gruppe4.tessera.model.Post;

@Repository
public interface PostRepository extends CrudRepository<Post, Integer> {
    Optional<Post> getPostById(Integer id);

    Iterable<Post> findPostsByUserId(Integer id);


    @Transactional
    @Modifying
    @Query(value = "UPDATE posts set show_post = false WHERE id = ?1", nativeQuery = true)
    public void updateShowPost(Integer id);


    

}
