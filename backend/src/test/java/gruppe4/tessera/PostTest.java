package gruppe4.tessera;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import gruppe4.tessera.model.Post;
import gruppe4.tessera.model.User;
import gruppe4.tessera.model.Validations;

public class PostTest {

    private Post post;
    private Post emptyPost;
    private User user;
    private Validations validator;

    @BeforeEach
    public void setup() {
        validator = new Validations(); // need to use setters in tests, i.e setTitle, setDescription etc
        // verdier for Post-objektet
        Integer postId = 369;
        String title = "Selger the Strokes-biletter!! (BILLIG)";
        String description = "biletter til Strokes konserten kommende fredag. Røverkjøp!";
        String contactPoint = "tlf: 473265032";
        String location = "Magnus Berrføtts veg 15F";
        String postType = "sale";
        String eventType = "concert";
        Integer price = 500;
        boolean showPost = true;
       LocalDate creationDate = LocalDate.of(2021, 11, 12);
        Integer userId = 107;

        // User-objekt
        user = new User(userId, "kulegutten99", "glad i konserter", LocalDate.now().minusDays(50), "img.jpg", false, "passord123", false, null, null);

        // post-objekt
       post = new Post(postId, title, description, contactPoint, location, postType, eventType, price, showPost, creationDate, userId, userId, user, null,null);

        emptyPost = new Post();

        // TODO: koble User-objektet til Post-objektet?
        // ArrayList<Post> postList;
        // postList.add(post);
        // user.setPosts(postList);
    }

    // GETTERS -----
    @Test
    public void getId() {
        assertEquals(post.getId(), 369);
    }

    @Test
    public void getTitle() {
        assertEquals(post.getTitle(), "Selger the Strokes-biletter!! (BILLIG)");
    }

    @Test
    public void getDescription() {
        assertEquals(post.getDescription(), "biletter til Strokes konserten kommende fredag. Røverkjøp!");
    }

    @Test
    public void getContactPoint() {
        assertEquals(post.getContactPoint(), "tlf: 473265032");
    }

    @Test
    public void getLocation() {
        assertEquals(post.getLocation(), "Magnus Berrføtts veg 15F");
    }

    @Test
    public void getPostType() {
        assertEquals(post.getPostType(), "sale");
    }

    @Test
    public void getEventType() {
        assertEquals(post.getEventType(), "concert");
    }

    @Test
    public void getPrice() {
        assertEquals(post.getPrice(), 500);
    }

    // @Test
    // public void getShowPost() {
    // // assertEquals(post.getShowPost(), true);
    // }

    @Test
    public void getCreationDate() {
        assertEquals(post.getCreationDate(), LocalDate.of(2021, 11, 12));
    }

    @Test
    public void getUserId() {
        assertEquals(post.getUserId(), 107);
    }

    // @Test
    // public void getUser() {
    // // post.getUser(user);
    // // assertEquals(post.getUser(), 666);
    // }

    // SETTERS -----
    @Test
    public void setId() {
        Integer postId = 124325;
        post.setId(postId);
        assertEquals(post.getId(), postId);
    }

    @Test
    public void setTitle() {
        String title = "Ønsker Grimes biletter for under 300kr!";
        post.setTitle(title);
        assertEquals(post.getTitle(), title);
    }

    @Test
    public void setDescription() {
        String description = "Lorem ipsum dolor amet";
        post.setDescription(description);
        assertEquals(post.getDescription(), description);
    }

    @Test
    public void setContactPoint() {
        String contactPoint = "tlf: 117 123";
        post.setContactPoint(contactPoint);
        assertEquals(post.getContactPoint(), contactPoint);
    }

    @Test
    public void setLocation() {
        String location = "Nallerudskansen 52";
        post.setLocation(location);
        assertEquals(post.getLocation(), location);
    }

    @Test
    public void setPostType() {
        String postType = "buying";
        post.setPostType(postType);
        assertEquals(post.getPostType(), postType);
    }

    @Test
    public void setEventType() {
        String eventType = "art gallery";
        post.setEventType(eventType);
        assertEquals(post.getEventType(), eventType);
    }

    @Test
    public void setPrice() {
        Integer price = 421;
        post.setPrice(price);
        assertEquals(post.getPrice(), price);
    }

    // @Test
    // public void setShowPost() {
    // boolean showPost = true;
    // post.setShowPost(showPost);
    // // assertEquals(post.getShowPost(), showPost);

    // }

    @Test
    public void setCreationDate() {
        LocalDate creationDate = LocalDate.now();
        post.setCreationDate(creationDate);
        assertEquals(post.getCreationDate(), creationDate);
    }

    @Test
    public void setUserId() {
        Integer userId = 70;
        post.setUserId(userId);
        assertEquals(post.getUserId(), userId);
    }

    // @Test
    // public void setUser() {
    // // post.setUser(user);
    // // assertEquals(post.getUser(), 666);
    // }

}