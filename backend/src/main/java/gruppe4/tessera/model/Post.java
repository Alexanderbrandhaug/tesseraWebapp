package gruppe4.tessera.model;

import java.time.LocalDate;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.persistence.Transient;
import com.fasterxml.jackson.annotation.JsonIgnore;
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

    /**
     * NB!
     * Removed validations for demo!!!
     */

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO) // ID will be used as primarykey and will be autoincremented
    private Integer id;
    private String title, description, contactPoint, location, postType, eventType;
    private int price;
    private boolean showPost;
    private LocalDate creationDate;
    private Integer closerId;
    @Column(name = "user_id", insertable = false, updatable = false)
    private Integer userId;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    @JsonIgnore
    private User user;

    @Transient
    @JsonIgnore
    private Validations validate = new Validations();

    public void setTitle (String title) {
        //if (validate.isValidTitle(title)) {
        this.title = title;
        //}
    }

    public void setDescription(String description) {
        //if (validate.isValidDescription(description)) {
        this.description = description;
        //}
    }

    public void setContactPoint(String contactPoint) {
        //if (validate.isValidContactPoint(contactPoint)) {
        this.contactPoint = contactPoint;
        //}
    }

    public void setLocation(String location) {
        //if (validate.isValidLocation(location)) {
        this.location = location;
        //}
    }

    public void setPostType(String posttype) {
        //if (validate.isValidPostType(posttype)) {
        this.postType = posttype;
        //}
    }

    public void setEventType(String eventtype) {
        //if (validate.isValidEventType(eventtype)) {
        this.eventType = eventtype;
        //}
    }

    public void setPrice(int price) {
        //if (validate.isValidPrice(price)) {
        this.price = price;
        //}
    }
}