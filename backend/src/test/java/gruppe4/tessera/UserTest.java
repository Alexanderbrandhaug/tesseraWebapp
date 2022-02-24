package gruppe4.tessera;

import javax.xml.bind.Validator;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import gruppe4.tessera.model.Validations;

public class UserTest {

  private Validations validator;

  @BeforeEach
  public void setUp() {
    validator = new Validations();
  }

  @Test
  public void isValidNameTest() {
    Assertions.assertTrue(validator.isValidUsername("username1"), "username1 should be a valid username. ");
    Assertions.assertThrows(IllegalArgumentException.class, () -> validator.isValidUsername(""));
    Assertions.assertThrows(IllegalArgumentException.class, () -> validator.isValidUsername("ole"));
  }

  @Test
  public void isValidPasswordTest() {
    Assertions.assertTrue(validator.isValidPassword("Password1"));
    Assertions.assertThrows(IllegalArgumentException.class, () -> validator.isValidPassword(""));
    Assertions.assertThrows(IllegalArgumentException.class, () -> validator.isValidPassword("pass"));
  }

  @Test
  public void isValidDescriptionTest() {
    Assertions.assertTrue(validator.isValidDescription("This is a valid description."));
    Assertions.assertThrows(IllegalArgumentException.class, () -> validator.isValidDescription("Not valid."));
    Assertions.assertThrows(IllegalArgumentException.class, () -> validator.isValidDescription(null));
  }

  
  
}
