package com.vvs.webfluxadminapp.service;

import com.vvs.webfluxadminapp.dto.EmailResponseDto;

import reactor.core.publisher.Mono;

public interface EmailService {
  Mono<Void> sendMail(EmailResponseDto email);
}
