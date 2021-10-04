package ch.asedeba.service.configuration;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Import;
import org.springframework.scheduling.annotation.EnableScheduling;
import ch.asedeba.service.dam.configuration.AsedebaPersistentManager;
import ch.asedeba.service.mvc.configuration.CustomWebMvcConfigurer;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class, HibernateJpaAutoConfiguration.class}, scanBasePackages = {"ch.asedeba.service.*"})

@ComponentScan(basePackages = {"ch.asedeba.service.rest.v1.api", "ch.asedeba.service.mvc.handler", "ch.asedeba.service.mvc.facade.web"})

@Import({AsedebaPersistentManager.class, CustomWebMvcConfigurer.class})

@EnableScheduling

public class Application extends SpringBootServletInitializer {

  @Override
  protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
    return builder.sources(Application.class);
  }

  public static void main(String[] args) {
    SpringApplication.run(Application.class, args);
  }
}
