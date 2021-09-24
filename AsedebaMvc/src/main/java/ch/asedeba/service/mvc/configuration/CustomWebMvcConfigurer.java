package ch.asedeba.service.mvc.configuration;

import java.util.List;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.mvc.method.annotation.RequestAttributeMethodArgumentResolver;
import ch.asedeba.service.mvc.adapter.CustomHandlerInterceptorAdapter;
import ch.asedeba.service.mvc.filter.RequestResponseLoggingFilter;

/**
 * 
 * @Author <a href="pDjomo@hamilton-medical.com">Patrick Djomo</a>
 *
 */

@Configuration
@ComponentScan({"ch.asedeba.service.dam.dbaccess", "ch.asedeba.service.dam.adapter", "ch.asedeba.service.locale.handler"})
public class CustomWebMvcConfigurer implements WebMvcConfigurer {



  @Override
  public void addInterceptors(InterceptorRegistry registry) {

    registry.addInterceptor(new CustomHandlerInterceptorAdapter());

  }

  @Override
  public void addArgumentResolvers(List<HandlerMethodArgumentResolver> resolvers) {

    resolvers.add(new RequestAttributeMethodArgumentResolver());

  }


  @Bean
  public FilterRegistrationBean<RequestResponseLoggingFilter> requestResponseLoggingFilter() {

    FilterRegistrationBean<RequestResponseLoggingFilter> registrationBean = new FilterRegistrationBean<>();
    registrationBean.setFilter(new RequestResponseLoggingFilter());
    registrationBean.addUrlPatterns("/*");

    return registrationBean;
  }

}
