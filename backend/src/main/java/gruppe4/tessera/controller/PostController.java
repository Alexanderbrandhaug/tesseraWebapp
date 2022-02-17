package gruppe4.tessera.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import gruppe4.tessera.model.Post;
import gruppe4.tessera.service.PostService;

@Controller
@RequestMapping(path = "/tessera/api")
@CrossOrigin("*")
public class PostController {
    

    @Autowired
    private PostService postService;


@GetMapping(path = "/posts")
public @ResponseBody Iterable<Post> getAllPosts(){
    return postService.findAllPosts();
}
@GetMapping(path = "/post/{id}")
public @ResponseBody Optional<Post> getPostById(@PathVariable Integer id){
    return postService.findPostById(id);
}

@GetMapping(path = "posts/{id}")
public @ResponseBody Iterable<Post> getAllPostsFromUser(@PathVariable Integer id){
    return postService.findAllPostsByUserId(id);
}
}
