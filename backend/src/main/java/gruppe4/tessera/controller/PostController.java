package gruppe4.tessera.controller;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Optional;

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

import gruppe4.tessera.model.Post;
import gruppe4.tessera.service.PostService;
import gruppe4.tessera.service.UserService;
import io.swagger.v3.oas.annotations.Operation;

@Controller
@RequestMapping(path = "/tessera/api")
@CrossOrigin("*")
public class PostController {

    @Autowired
    private PostService postService;

    @Autowired
    private UserService userService;

    @GetMapping(path = "/posts")
    @Operation(summary = "Get all posts that is created")
    public @ResponseBody Iterable<Post> getAllPosts() {
        return postService.findAllPosts();
    }

    @GetMapping(path = "/post/{id}")
    @Operation(summary = "Get a single post based on the ID of the post")
    public @ResponseBody Optional<Post> getPostById(@PathVariable Integer id) {
        return postService.findPostById(id);
    }

    @GetMapping(path = "posts/{id}")
    @Operation(summary = "Get all posts made by a specific user, based on the user ID")
    public @ResponseBody Iterable<Post> getAllPostsFromUser(@PathVariable Integer id) {
        return postService.findAllPostsByUserId(id);
    }

    @PostMapping(path = "/post")
    @Operation(summary = "Create a single post")
    public @ResponseBody String createPost(@RequestParam String title, String description, String contactPoint,
            String location, String postType, String eventType, int price, String username,@DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime eventDate) {
       
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
        newPost.setEventDate(eventDate);
        newPost.setUser(userService.getUserByUsername(username));

        if (postService.savePost(newPost)) {
            return "Post successfully created";
        }
        return "Not created";
    }

    @PostMapping(path = "/posts/")
    @Operation(summary = "endpoint to disable a post due to the post no longer is active (i.e someone bought the ticket)")
    public @ResponseBody String closePost(@RequestParam Integer postID, Integer closerID){
       postService.disablePost(closerID, postID);
       return "Post updated";
    }

    @GetMapping(path = "/posts/transactions/{userID}")
    @Operation(summary = "Get all closed post where the user ID has been the buying or selling part of the deal")
    public @ResponseBody Iterable<Post> getAllDisabledPostsFromUser(@PathVariable Integer userID){
        return postService.getAllDisabledPostByUserID(userID);
    }
}
