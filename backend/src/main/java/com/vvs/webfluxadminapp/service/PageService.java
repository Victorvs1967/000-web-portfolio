package com.vvs.webfluxadminapp.service;

import com.vvs.webfluxadminapp.dto.PageDto;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface PageService {
  Flux<PageDto> getPages();
  Mono<PageDto> getPage(String name);
  Mono<PageDto> createPage(PageDto page);
  Mono<PageDto> editPage(PageDto page);
  Mono<PageDto> deletePage(String name);
}
