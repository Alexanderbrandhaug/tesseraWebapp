package gruppe4.tessera.model;

import java.util.regex.Pattern;

import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;
import java.util.regex.Matcher;


@Component
public class Validations {

  private List<String> postTypes = Arrays.asList("Selling", "Buying");
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
    if (description.length() < 4) {
      throw new IllegalArgumentException("Description cannot be null. ");
    }

    return true;
  }

  public boolean isValidTitle(String title) {
    if (title == null) {
      throw new IllegalArgumentException("Title cannot be null. ");
    }

    if (! (title.length() > 5)) {
      throw new IllegalArgumentException("Must be a longer title. ");
    }

    return true;
  }

  public boolean isValidContactPoint(String contactPoint) {
    if (contactPoint == null) {
      throw new IllegalArgumentException("Contactpoint cannot be null. ");
    }

    String regexNumber = "^[1-9][0-9]*$";
    Pattern p1 = Pattern.compile(regexNumber);
    Matcher m1 = p1.matcher(contactPoint);

    if (!(m1.matches())) {
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
