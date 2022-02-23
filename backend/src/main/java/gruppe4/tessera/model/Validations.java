package gruppe4.tessera.model;

import java.util.regex.Pattern;
import java.util.Arrays;
import java.util.List;
import java.util.regex.Matcher;

public class Validations {

  private List<String> postTypes = Arrays.asList("Sell", "Buy");
  private List<String> eventTypes = Arrays.asList("Concert", "Festival", "Sports", "Theater", "Conferences");

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

    String regexPassword = "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{7,}$";
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

    String words[] = description.split("\\s");
    int length = words.length;
    if (length > 3) {
      throw new IllegalArgumentException("Descriprion must be longer. ");
    }

    return true;
  }

  public boolean isValidTitle(String title) {
    if (title == null) {
      throw new IllegalArgumentException("Title cannot be null. ");
    }

    String words[] = title.split("\\s");
    int length = words.length;
    if (length > 2) {
      throw new IllegalArgumentException("Title must be longer. ");
    }

    return true;
  }

  public boolean isValidContactPoint(String contactPoint) {
    if (contactPoint == null) {
      throw new IllegalArgumentException("Contactpoint cannot be null. ");
    }

    String regexNumber = "^[1-9][0-9]*$";
    String regexEmail = "^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$";
    Pattern p1 = Pattern.compile(regexNumber);
    Pattern p2 = Pattern.compile(regexEmail);
    Matcher m1 = p1.matcher(contactPoint);
    Matcher m2 = p2.matcher(contactPoint);

    if (!(m1.matches() || m2.matches())) {
      throw new IllegalArgumentException("Contactpoint not set. ");
    }

    return true;
  }

  public boolean isValidLocation(String location) {
    if (location == null) {
      throw new IllegalArgumentException("Location cannot be null. ");
    }

    return true;
  }

  public boolean isValidPostType(String posttype) {
    if (posttype == null) {
      throw new IllegalArgumentException("Post type cannot be null. ");
    }

    if (!postTypes.contains(posttype)) {
      throw new IllegalArgumentException("Post type must be buy or sell. ");
    }

    return true;
  }

  public boolean isValidEventType(String eventtype) {
    if (eventtype == null) {
      throw new IllegalArgumentException("Event type cannot be null. ");
    }

    if (!eventTypes.contains(eventtype)) {
      throw new IllegalArgumentException("Event type must be buy or sell. ");
    }

    return true;
  }

  public boolean isValidPrice(int price) {
    int count = 0, num = price;
    for (; num != 0; num /= 10, ++count);

    if (count >= 1) {
      return true;
    } 

    return false;
  }
}
