package ch.asedeba.service.mvc.adapter;


import java.util.Objects;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.jboss.logging.Logger;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;
import org.springframework.web.util.WebUtils;
import ch.asedeba.service.locale.model.entities.SupportedLocale;
import ch.asedeba.service.mvc.configuration.Constants;

/**
 * 
 * @Author <a href="pDjomo@hamilton-medical.com">Patrick Djomo</a>
 *
 */

public class CustomHandlerInterceptorAdapter extends HandlerInterceptorAdapter {

  private final Logger LOG = Logger.getLogger(CustomHandlerInterceptorAdapter.class);

  @Override
  public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

    // get hc_locale parameter from http request
    String localeParam = request.getParameter(Constants.AS_LOCALE);


    SupportedLocale supportedLocale = null;

    if (Objects.isNull(localeParam)) {

      Cookie cookie = WebUtils.getCookie(request, Constants.AS_LOCALE);

      if (Objects.isNull(cookie)) {

        supportedLocale = SupportedLocale.ENGLISH;
        response.addCookie(new Cookie(Constants.AS_LOCALE, supportedLocale.getLocale()));

      } else {

        supportedLocale = SupportedLocale.getSupportedLocale(cookie.getValue());
      }

    } else {

      response.addCookie(new Cookie(Constants.AS_LOCALE, localeParam));
      supportedLocale = SupportedLocale.getSupportedLocale(localeParam);
    }


    request.setAttribute(Constants.AS_LOCALE, supportedLocale);

    return true;

  }



}
