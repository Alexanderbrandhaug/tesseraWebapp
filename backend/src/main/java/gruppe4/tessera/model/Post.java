package gruppe4.tessera.model;
import java.time.LocalDate;
import javax.persistence.Entity;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;



@Entity
@Table(name = "posts")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Post {
   
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)// ID will be used as primarykey and will be autoincremented
    private Integer id;
    private String title, description, contactPoint, location,postType,eventType;
    private int price;
    private boolean showPost;
    private LocalDate createdAt;
   
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    @JsonIgnoreProperties({"username", "description", "creationDate", "profilePicture", "password", "suspended", "admin"})
    private User user;

}