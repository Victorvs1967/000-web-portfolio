package com.vvs.webfluxadminapp.router;

import java.util.Map;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;

import com.vvs.webfluxadminapp.dto.EmailResponseDto;
import com.vvs.webfluxadminapp.service.EmailService;

import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Mono;

@Component
@RequiredArgsConstructor
public class MailHandler {

  private final EmailService emailService;

  public Mono<ServerResponse> sendEmail(ServerRequest request) {
    Mono<EmailResponseDto> message = request.bodyToMono(EmailResponseDto.class);
    return message
      .switchIfEmpty(Mono.error(new RuntimeException("Message is empty...")))
      .map(emailService::sendMail)
      .flatMap(msg -> ServerResponse
        .ok()
        .contentType(MediaType.APPLICATION_JSON)
        .body(Mono.just(Map.of("message", "Message sent successfully...")), Map.class));
  }
}
