package com.vvs.webfluxadminapp.service;

import org.springframework.stereotype.Service;

import com.vvs.webfluxadminapp.dto.PageDto;
import com.vvs.webfluxadminapp.mapper.AppMapper;
import com.vvs.webfluxadminapp.model.Page;
import com.vvs.webfluxadminapp.repository.PageRepository;

import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
@RequiredArgsConstructor
public class PageServiceImpl implements PageService {

  private final PageRepository pageRepository;
  private final AppMapper mapper;

  @Override
  public Flux<PageDto> getPages() {
    return pageRepository.findAll()
        .map(page -> mapper.convert(page, PageDto.class));
  }

  @Override
  public Mono<PageDto> getPage(String name) {
    return pageRepository.findPageByName(name)
      .switchIfEmpty(Mono.error(new RuntimeException("Page not found")))
      .map(page -> mapper.convert(page, PageDto.class))
      .map(pageDto -> pageDto);
  }

  @Override
  public Mono<PageDto> createPage(PageDto pageDto) {
    return Mono.just(pageDto)
      .map(page -> mapper.convert(page, Page.class))
      .flatMap(pageRepository::save)
      .map(page -> mapper.convert(page, PageDto.class));
  }

  @Override
  public Mono<PageDto> editPage(PageDto pageDto) {
    return pageRepository.findPageByName(pageDto.getName())
      .switchIfEmpty(Mono.error(new RuntimeException("Page not found...")))
      .map(page -> Page.builder()
        .id(page.getId())
        .name(page.getName())
        .title(pageDto.getTitle())
        .subtitle(pageDto.getSubtitle())
        .description(pageDto.getDescription())
        .payload(pageDto.getPayload())
        .build())
      .flatMap(pageRepository::save)
      .map(page -> mapper.convert(page, PageDto.class));
  }

  @Override
  public Mono<PageDto> deletePage(String name) {
    return pageRepository.findPageByName(name)
      .switchIfEmpty(Mono.error(new RuntimeException("Page not found...")))
      .flatMap(this::delete)
      .map(page -> mapper.convert(page, PageDto.class));
  }

  private Mono<Page> delete(Page page) {
    return Mono.fromSupplier(() -> {
      pageRepository
          .delete(page)
          .subscribe();
      return page;
    });
  }

}
