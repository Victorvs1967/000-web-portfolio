package com.vvs.webfluxadminapp.router;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.server.RequestPredicates;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;

@Configuration
public class MailRoute {

  @Bean
  public RouterFunction<ServerResponse> mailRouterFunction(MailHandler handler) {
    return RouterFunctions.route()
      .nest(RequestPredicates.path("/mail"), builder -> builder
        .POST("/sendmail", handler::sendEmail))
      .build();
  }
}
