package gruppe4.tessera.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;    

@Entity // This tells Hibernate to make a table out of this class
@Table(name = "users")    // TODO Table vs Entity
@NoArgsConstructor // TODO ?
@AllArgsConstructor
@Data

public class User {
  @Id //TODO fjerne?    Hvordan flytte det til username?
  @GeneratedValue(strategy=GenerationType.AUTO) // ID will be used as primarykey and will be autoincremented
  
  private Integer id;
  private String username;
  private String description;

  @Column(name = "creation_date", nullable = false)
  private LocalDate creationDate;

  @Column(name = "suspended")
  private boolean isSuspended;

  @Column(unique=true, nullable = false) // tells the DB that email variable is going to be unique and not nullable in the DB
  private String password;  //unique?
  @Column(name = "is_admin")
  private boolean isAdmin;

  @JsonProperty("admin")
  public boolean getRole(){
    return isAdmin;
  }

}