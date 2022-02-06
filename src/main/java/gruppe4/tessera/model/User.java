package gruppe4.tessera.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonProperty;

@Table
@Entity(name = "User") // This tells Hibernate to make a table out of this class
public class User {
  @Id
  @GeneratedValue(strategy=GenerationType.AUTO) // ID will be used as primarykey and will be autoincremented
  private Integer id;
  private String name;
  @Column(unique=true, nullable = false) // tells the DB that email variable is going to be unique and not nullable in the DB
  private String email;
  private String password;
  @Column(name = "is_admin")
  private boolean isAdmin;
  
  

  public Integer getId() {
    return id;
  }

  public void setAdmin(boolean isAdmin){
    this.isAdmin = isAdmin;
  }
  @JsonProperty("admin")
  public boolean getRole(){
    return isAdmin;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }
  public void setPassword(String password){
    this.password = password;
  }
  public String getPassword(){
    return password;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }
}