package gruppe4.tessera.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import com.fasterxml.jackson.annotation.JsonProperty;


@Entity // This tells Hibernate to make a table out of this class
public class User {
  @Id
  @GeneratedValue(strategy=GenerationType.AUTO) // ID will be used as primarykey and will be autoincremented
  private Integer id;
  private String name;
  @Column(unique=true)
  private String email;
  private String password;
  private String phoneNumber;
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

  public String getPhoneNumber(){
    return phoneNumber;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    if (checkValidEmail(email) && !email.endsWith(" ")) {
      this.email = email.toLowerCase();
  }
    else
      throw new IllegalArgumentException("Invalid Email format(e.g olanordmann@gmail.com) ");
  }

  public void setPhoneNumber(String phoneNumber) { //checks if phonenum starts with 4 or 9, and that the length is 8
    if ((String.valueOf(phoneNumber).charAt(0) == '9' || String.valueOf(phoneNumber).charAt(0) == '4') && String.valueOf(phoneNumber).length() == 8) {
      this.phoneNumber = phoneNumber;
    
} 
  else
    throw new IllegalArgumentException("Not valid number-format. Must be 8-digits long and start with 9 or 4");
}

// helper method that checks valid email format
static boolean checkValidEmail(String email) {
  String regex = "^[\\w-_\\.+]*[\\w-_\\.]\\@([\\w]+\\.)+[\\w]+[\\w]$";
    return email.matches(regex);
 
}
}