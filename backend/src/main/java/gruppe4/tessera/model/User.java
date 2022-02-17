package gruppe4.tessera.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Entity // This tells Hibernate to make a table out of this class
@Table(name = "users")
@NoArgsConstructor
@AllArgsConstructor
@Data

public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO) // ID will be used as primarykey and will be autoincremented
  private Integer id;

  @Column(name = "username", unique = true, nullable = false)
  private String username;
  private String description;

  @Column(name = "creation_date", nullable = false)
  private LocalDate creationDate;

  private String profilePicture;

  @Column(name = "is_suspended", nullable = false)
  private boolean isSuspended;

  @Column(nullable = false) // tells the DB that email variable is going to be unique and not nullable in
                            // the DB
  private String password;
  @Column(name = "is_admin", nullable = false)
  private boolean isAdmin;

  @OneToMany(mappedBy = "user")
  @JsonIgnore
  private List<Post> posts;

  @JsonProperty("admin")
  public boolean getRole() {
    return isAdmin;
  }

}