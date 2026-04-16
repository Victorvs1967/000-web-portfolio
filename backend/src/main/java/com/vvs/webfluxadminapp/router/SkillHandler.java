package com.vvs.webfluxadminapp.router;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;

import com.vvs.webfluxadminapp.dto.SkillDto;
import com.vvs.webfluxadminapp.error.exception.WrongCredentialException;
import com.vvs.webfluxadminapp.security.JwtUtil;
import com.vvs.webfluxadminapp.service.SkillService;

import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Mono;

@Component
@RequiredArgsConstructor
public class SkillHandler {
  
  private final SkillService skillService;
  private final JwtUtil jwtUtil;
  
  public Mono<ServerResponse> getSkills(ServerRequest request) {
    String token = request.headers().firstHeader("authorization").substring(7);
    return jwtUtil.validateToken(token)
      .map(result -> !result)
      .switchIfEmpty(Mono.error(WrongCredentialException::new))
      .flatMap(credentials -> ServerResponse
      .ok()
      .contentType(MediaType.APPLICATION_JSON)
      .body(skillService.getSkills(), SkillDto.class));
  }

  public Mono<ServerResponse> getSkill(ServerRequest request) {
    String token = request.headers().firstHeader("authorization").substring(7);
    Mono<SkillDto> skill = request.bodyToMono(SkillDto.class);
    return jwtUtil.validateToken(token)
      .map(result -> !result)
      .switchIfEmpty(Mono.error(WrongCredentialException::new))
      .flatMap(credentials -> skill)
      .map(skillService::updateSkill)
      .flatMap(skillDto -> ServerResponse
        .ok()
        .contentType(MediaType.APPLICATION_JSON)
        .body(skillDto, SkillDto.class));
  }

  public Mono<ServerResponse> createSkill(ServerRequest request) {
    Mono<SkillDto> skill = request.bodyToMono(SkillDto.class);
    String token = request.headers().firstHeader("authorization").substring(7);
    return jwtUtil.validateToken(token)
      .map(result -> !result)
      .switchIfEmpty(Mono.error(WrongCredentialException::new))
      .flatMap(credentials -> skill)
      .map(skillService::createSkill)
      .flatMap(skillDto -> ServerResponse
        .ok()
        .contentType(MediaType.APPLICATION_JSON)
        .body(skillDto, SkillDto.class));
  }

  public Mono<ServerResponse> updateSkill(ServerRequest request) {
    Mono<SkillDto> skill = request.bodyToMono(SkillDto.class);
    String token = request.headers().firstHeader("authorization").substring(7);
    return jwtUtil.validateToken(token)
      .map(result -> !result)
      .switchIfEmpty(Mono.error(WrongCredentialException::new))
      .flatMap(credentials -> skill)
      .map(skillService::updateSkill)
      .flatMap(skillDto -> ServerResponse
        .ok()
        .contentType(MediaType.APPLICATION_JSON)
        .body(skillDto, SkillDto.class));
  }

  public Mono<ServerResponse> deleteSkill(ServerRequest request) {
    String id = request.pathVariable("id");
    String token = request.headers().firstHeader("authorization").substring(7);
    return jwtUtil.validateToken(token)
      .map(result -> !result)
      .switchIfEmpty(Mono.error(WrongCredentialException::new))
      .map(credentials -> id)
      .map(skillService::deleteSkill)
      .flatMap(skillDto -> ServerResponse
        .ok()
        .contentType(MediaType.APPLICATION_JSON)
        .body(skillDto, SkillDto.class));
  }
}
