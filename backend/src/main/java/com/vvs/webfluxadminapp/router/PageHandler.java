package com.vvs.webfluxadminapp.router;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;

import com.vvs.webfluxadminapp.dto.PageDto;
import com.vvs.webfluxadminapp.service.PageService;

import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Mono;

@Component
@RequiredArgsConstructor
public class PageHandler {
  
  private final PageService pageService;

  public Mono<ServerResponse> getPages(ServerRequest request) {
    return ServerResponse
      .ok()
      .contentType(MediaType.APPLICATION_JSON)
      .body(pageService.getPages(), PageDto.class);
  }

  public Mono<ServerResponse> getPage(ServerRequest request) {
    String pageName = request.pathVariable("name");
    return ServerResponse
      .ok()
      .contentType(MediaType.APPLICATION_JSON)
      .body(pageService.getPage(pageName), PageDto.class);
  }

  public Mono<ServerResponse> createPage(ServerRequest request) {
    return request.bodyToMono(PageDto.class)
      .flatMap(pageService::createPage)
      .flatMap(page -> ServerResponse
        .ok()
        .contentType(MediaType.APPLICATION_JSON)
        .body(Mono.just(page), PageDto.class));
  }

  public Mono<ServerResponse> editPage(ServerRequest request) {
    return request.bodyToMono(PageDto.class)
      .flatMap(pageService::editPage)
      .flatMap(page -> ServerResponse
        .ok()
        .contentType(MediaType.APPLICATION_JSON)
        .body(Mono.just(page), PageDto.class));
  }

  public Mono<ServerResponse> deletePage(ServerRequest request) {
    String pageName = request.pathVariable("name");
    return ServerResponse
      .ok()
      .contentType(MediaType.APPLICATION_JSON)
      .body(pageService.deletePage(pageName), PageDto.class);
  }
}
