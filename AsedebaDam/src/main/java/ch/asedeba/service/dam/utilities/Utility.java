package ch.asedeba.service.dam.utilities;

import java.util.Arrays;
import java.util.List;


/**
 * 
 * @Author <a href="pDjomo@hamilton-medical.com">Patrick Djomo</a>
 *
 */
public class Utility {

  private Utility() {}

  public static boolean isLocalDeployment() {
    if (null != System.getenv("ASEDEBA_PRODUCTION_SERVER") && "1".equals(System.getenv("ASEDEBA_PRODUCTION_SERVER"))) {
      return false;
    }
    return true;
  }


  public static boolean isJUnitTest() {
    StackTraceElement[] stackTrace = Thread.currentThread().getStackTrace();
    List<StackTraceElement> list = Arrays.asList(stackTrace);
    for (StackTraceElement element : list) {
      if (element.getClassName().startsWith("org.junit.")) {
        return true;
      }
    }
    return false;
  }
}
