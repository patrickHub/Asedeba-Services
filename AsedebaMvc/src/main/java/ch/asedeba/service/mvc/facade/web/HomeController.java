package ch.asedeba.service.mvc.facade.web;


import java.util.Locale;
import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import ch.asedeba.service.locale.model.entities.SupportedLocale;
import ch.asedeba.service.mvc.configuration.Constants;
import ch.asedeba.service.mvc.configuration.Urls;
import ch.asedeba.service.mvc.handler.FreeMarkerPageHandler;

/**
 * 
 * @Author <a href="pDjomo@hamilton-medical.com">Patrick Djomo</a>
 *
 */

@CrossOrigin
@Controller
public class HomeController {

  private static final Logger LOG = Logger.getLogger(HomeController.class);

  public static final String HOME_TEMPLATE = "home.ftl";

  @Autowired
  private FreeMarkerPageHandler freeMarkerPageHandler;


  @GetMapping(value = "/")
  public ResponseEntity<String> home(@RequestAttribute(Constants.AS_LOCALE) SupportedLocale supportedLocale) {

    Locale currentLocale = new Locale(supportedLocale.getLocale());

    freeMarkerPageHandler.setLocale(currentLocale);
    freeMarkerPageHandler.setUriComponents(Urls.getHome());
    freeMarkerPageHandler.addAttribute(Constants.TITLE, Constants.ASEDEBA_TITLE);

    String body = freeMarkerPageHandler.processTemplate(HOME_TEMPLATE);

    return ResponseEntity.ok().body(body);

  }

}

