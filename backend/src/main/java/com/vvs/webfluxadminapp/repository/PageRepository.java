package com.vvs.webfluxadminapp.repository;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

import com.vvs.webfluxadminapp.model.Page;

import reactor.core.publisher.Mono;

public interface PageRepository extends ReactiveMongoRepository<Page, String> {
  Mono<Page> findPageByName(String title);
}
