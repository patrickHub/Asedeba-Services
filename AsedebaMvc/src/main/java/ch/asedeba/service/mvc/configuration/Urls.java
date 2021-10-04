package ch.asedeba.service.mvc.configuration;

import org.springframework.web.servlet.mvc.method.annotation.MvcUriComponentsBuilder;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;
import ch.asedeba.service.mvc.facade.web.HomeController;

/**
 * {@code Urls} class is a wrapper class that conatains the url of any available page that can be serve by the backend.
 * 
 * <p>
 * Those urls we will be used by {@link ch.asedeba.service.locale.model.beans.LocalBean LocalBean} to enable internalization available on each template and
 * {@link ch.asedeba.service.mvc.model.bean.UrlBean UrlBean} to enable user to navigate through one page to another.
 * </p>
 * 
 * @Author <a href="pDjomo@hamilton-medical.com">Patrick Djomo</a>
 *
 */
public class Urls {

  private Urls() {}

  public static UriComponentsBuilder uriBase() {

    return UriComponentsBuilder.fromUriString(AppConfigurationMvc.getBaseUri());

  }


  public static UriComponents getHome() {

    return MvcUriComponentsBuilder.fromMethodName(uriBase(), HomeController.class, "home", new Object()).build();

  }

}
