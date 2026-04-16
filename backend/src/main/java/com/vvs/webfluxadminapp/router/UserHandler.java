package com.vvs.webfluxadminapp.router;

import com.vvs.webfluxadminapp.dto.UserDto;
import com.vvs.webfluxadminapp.error.exception.UserNotFoundException;
import com.vvs.webfluxadminapp.error.exception.WrongCredentialException;
import com.vvs.webfluxadminapp.security.JwtUtil;
import com.vvs.webfluxadminapp.service.UserService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;

import reactor.core.publisher.Mono;

@Component
@RequiredArgsConstructor
public class UserHandler {

  private final UserService userService;
  private final JwtUtil jwtUtil;

  public Mono<ServerResponse> getUsers(ServerRequest request) {
    String token = request.headers().firstHeader("authorization").substring(7);
    return jwtUtil.validateToken(token)
      .map(result -> !result)
      .switchIfEmpty(Mono.error(WrongCredentialException::new))
      .flatMap(credentials -> ServerResponse
        .ok()
        .contentType(MediaType.APPLICATION_JSON)
        .body(userService.getUsers(), UserDto.class));
  }

  public Mono<ServerResponse> getUser(ServerRequest request) {
    String username = request.pathVariable("username");
    String token = request.headers().firstHeader("authorization").substring(7);
    return jwtUtil.validateToken(token)
      .switchIfEmpty(Mono.error(WrongCredentialException::new))
      .map(result -> !result)
      .map(isUsername -> username)
      .map(userService::getUser)
      .flatMap(user -> ServerResponse
        .ok()
        .contentType(MediaType.APPLICATION_JSON)
        .body(user, UserDto.class));
  }

  public Mono<ServerResponse> updateUserData(ServerRequest request) {
    String username = request.pathVariable("username");
    String token = request.headers().firstHeader("authorization").substring(7);
    Mono<UserDto> userDto = request.bodyToMono(UserDto.class);
    return jwtUtil.validateToken(token)
      .switchIfEmpty(Mono.error(WrongCredentialException::new))
      .map(result -> !result)
      .map(isUsername -> username)
      .map(userService::getUser)
      .switchIfEmpty(Mono.error(UserNotFoundException::new))
      .flatMap(credentials -> userDto)
      .map(userService::updateUserData)
      .flatMap(user -> ServerResponse
        .ok()
        .contentType(MediaType.APPLICATION_JSON)
        .body(user, UserDto.class));
  }

  public Mono<ServerResponse> deleteUser(ServerRequest request) {
    String username = request.pathVariable("username");
    String token = request.headers().firstHeader("authorization").substring(7);
    return jwtUtil.validateToken(token)
      .switchIfEmpty(Mono.error(WrongCredentialException::new))
      .map(result -> !result)
      .map(isUsername -> username)
      .flatMap(user -> ServerResponse
        .ok()
        .contentType(MediaType.APPLICATION_JSON)
        .body(userService.deleteUser(user), UserDto.class));
  }
  
}
