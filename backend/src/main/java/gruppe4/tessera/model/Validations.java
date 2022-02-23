package gruppe4.tessera.model;

import java.util.regex.Pattern;
import java.util.regex.Matcher;

public class Validations {
  
  public boolean isValidUsername(String username) {
    if (username == null) {
      throw new IllegalArgumentException("Username cannot be null. ");
    }
    
    String regexUsername = "^(?=[a-zA-Z0-9._]{5,15}$)(?!.*[_.]{2})[^_.].*[^_.]$";
    Pattern r = Pattern.compile(regexUsername);
    Matcher match = r.matcher(username);

    if (!(match.matches())) {
      throw new IllegalArgumentException("Username...");
    }
    
    return true;
  }

  public boolean isValidPassword(String password) {
    if (password == null) {
      throw new IllegalArgumentException("Password cannot be null. ");
    }

    String regexPassword = " ^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$ ";
    Pattern r = Pattern.compile(regexPassword);
    Matcher match = r.matcher(password);

    if (!(match.matches())) {
      throw new IllegalArgumentException("Password...");
    }

    return true;
  }

  public boolean isValidDescription(String description) {
    if (description == null) {
      throw new IllegalArgumentException("Description cannot be null. ");
    }

    String words[]=description.split("\\s");  
    int length = words.length;
    if (length > 3) {
      throw new IllegalArgumentException("Descriprion must be longer. ");
    }

    return true;
  }

}
