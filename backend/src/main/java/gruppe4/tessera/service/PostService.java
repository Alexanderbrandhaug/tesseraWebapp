package gruppe4.tessera.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import gruppe4.tessera.model.Post;
import gruppe4.tessera.repository.PostRepository;
import lombok.AllArgsConstructor;
import lombok.Data;

@Service
@Data
@AllArgsConstructor
public class PostService {
    private PostRepository postRepository;

    public Iterable<Post> findAllPosts(){
        return postRepository.findAll();
    }

    public Optional<Post> findPostById(Integer id){
        return postRepository.findById(id);
    }

    public Iterable<Post> findAllPostsByUserId(Integer id){
        return postRepository.findPostsByUserId(id);
    }

    public boolean savePost(Post post) {
        postRepository.save(post);
        return true;
    }
}
