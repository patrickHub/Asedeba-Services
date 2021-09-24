package ch.asedeba.service.mvc.model.beans;

import ch.asedeba.service.mvc.configuration.Urls;

/**
 * {@code UrlBean} class is a Bean class that will be send as url attribute in {@link ch.asedeba.service.mvc.handler.FreeMarkerPageHandler FreeMarkerPageHandler} class before
 * processing any template.
 * 
 * <p>
 * It contains the url of any available useful page that will available on each template to enable user to navigate through one page to another.
 * </p>
 * 
 * @Author <a href="pDjomo@hamilton-medical.com">Patrick Djomo</a>
 *
 */
public class UrlBean {

  /**
   * {@code UrlBean} class is a Bean class that will be send as url attribute in {@link ch.asedeba.service.mvc.handler.FreeMarkerPageHandler FreeMarkerPageHandler} class before
   * processing any template.
   * 
   * <p>
   * It contains the url of any available useful page that will available on each template to enable user to navigate through one page to another.
   * </p>
   * 
   * @Author <a href="pDjomo@hamilton-medical.com">Patrick Djomo</a>
   *
   */
  public UrlBean() {}

  public String getResourcesUrl() {

    return Urls.uriBase().build().toUriString();
  }

}
