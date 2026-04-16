package com.vvs.webfluxadminapp.router;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.server.RequestPredicates;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;

@Configuration
public class PageRouter {
  
  @Bean
  public RouterFunction<ServerResponse> pageRouterFunction(PageHandler handler) {
    return RouterFunctions.route()
      .nest(RequestPredicates.path("/api/pages"), builder -> builder
        .POST("", handler::createPage)
        .PUT("", handler::editPage)
        .DELETE("/{name}", handler::deletePage)
        .GET("/{name}", handler::getPage)
        .GET("", handler::getPages))
      .build();
  }
}
