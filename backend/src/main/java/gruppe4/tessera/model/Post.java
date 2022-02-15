package gruppe4.tessera.model;
import java.time.LocalDate;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;



@Entity
@Table(name = "posts")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Post {
   
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)// ID will be used as primarykey and will be autoincremented
    private Integer id;
    private String title, description, contactPoint;
    @Column(name = "buy_or_sell_post", nullable = false)
    private String buyOrSellType;
    @Column(name = "type_of_post", nullable = false)
    private String typeOfPost;
    private int price;
    private boolean activeOrUnactive;
    private LocalDate createdAt;


    @JsonProperty("Show post")
    public boolean getActiveOrUnactive(){
        return activeOrUnactive;
    }
}