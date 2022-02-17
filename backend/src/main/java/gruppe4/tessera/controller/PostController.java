package gruppe4.tessera.controller;

import java.time.LocalDate;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import gruppe4.tessera.model.Post;
import gruppe4.tessera.service.PostService;
import gruppe4.tessera.service.UserService;

@Controller
@RequestMapping(path = "/tessera/api")
@CrossOrigin("*")
public class PostController {

    @Autowired
    private PostService postService;

    @Autowired
    private UserService userService;

    @GetMapping(path = "/posts")
    public @ResponseBody Iterable<Post> getAllPosts() {
        return postService.findAllPosts();
    }

    @GetMapping(path = "/post/{id}")
    public @ResponseBody Optional<Post> getPostById(@PathVariable Integer id) {
        return postService.findPostById(id);
    }

    @GetMapping(path = "posts/{id}")
    public @ResponseBody Iterable<Post> getAllPostsFromUser(@PathVariable Integer id) {
        return postService.findAllPostsByUserId(id);
    }

    @PostMapping(path = "/post")
    public @ResponseBody String createPost(@RequestParam String title, String description, String contactPoint,
            String location, String postType, String eventType, int price, String username) {
       
        Post newPost = new Post();
        LocalDate localdate = LocalDate.now();
        newPost.setTitle(title);
        newPost.setDescription(description);
        newPost.setContactPoint(contactPoint);
        newPost.setLocation(location);
        newPost.setPostType(postType);
        newPost.setEventType(eventType);
        newPost.setPrice(price);
        newPost.setCreationDate(localdate);
        newPost.setShowPost(true);
        newPost.setUser(userService.getUserByUsername(username));

        if (postService.savePost(newPost)) {
            return "Post successfully created";
        }
        return "Not created";
    }

}
