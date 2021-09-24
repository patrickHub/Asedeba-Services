package ch.asedeba.service.mvc.configuration;

import ch.asedeba.service.dam.utilities.Utility;

/**
 * 
 * @Author <a href="pDjomo@hamilton-medical.com">Patrick Djomo</a>
 *
 */
public class AppConfigurationMvc {

  private static final String PROD_BASE_URI = "https://wwww.asedeba.ch/AsedebaService";
  private static final String TEST_BASE_URI = "http://127.0.0.1:8070/AsedebaService";

  public static String getBaseUri() {

    if (isLocalDeployment()) {
      return TEST_BASE_URI;
    }

    return PROD_BASE_URI;
  }



  public static boolean isLocalDeployment() {
    return Utility.isLocalDeployment();
  }

}
