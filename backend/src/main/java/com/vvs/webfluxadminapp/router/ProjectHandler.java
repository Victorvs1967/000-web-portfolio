package com.vvs.webfluxadminapp.router;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;

import com.vvs.webfluxadminapp.dto.ProjectDto;
import com.vvs.webfluxadminapp.error.exception.WrongCredentialException;
import com.vvs.webfluxadminapp.model.Project;
import com.vvs.webfluxadminapp.security.JwtUtil;
import com.vvs.webfluxadminapp.service.ProjectService;

import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Mono;

@Component
@RequiredArgsConstructor
public class ProjectHandler {

  private final ProjectService projectService;
  private final JwtUtil jwtUtil;

  public Mono<ServerResponse> getProjects(ServerRequest request) {
    String token = request.headers().firstHeader("authorization").substring(7);
    return jwtUtil.validateToken(token)
      .switchIfEmpty(Mono.error(WrongCredentialException::new))
      .flatMap(result -> ServerResponse
      .ok()
      .contentType(MediaType.APPLICATION_JSON)
      .body(projectService.getProjects(), Project.class));
  }

  public Mono<ServerResponse> getProject(ServerRequest request) {
    String id = request.pathVariable("id");
    String token = request.headers().firstHeader("authorization").substring(7);
    return jwtUtil.validateToken(token)
      .switchIfEmpty(Mono.error(WrongCredentialException::new))
      .map(result -> id)
      .map(projectService::getProject)
      .flatMap(projectDto -> ServerResponse
        .ok()
        .contentType(MediaType.APPLICATION_JSON)
        .body(projectDto, ProjectDto.class));
  }

  public Mono<ServerResponse> createProject(ServerRequest request) {
    Mono<ProjectDto> project = request.bodyToMono(ProjectDto.class);
    String token = request.headers().firstHeader("authorization").substring(7);
    return jwtUtil.validateToken(token)
      .switchIfEmpty(Mono.error(WrongCredentialException::new))
      .flatMap(result -> project)
      .map(projectService::createProject)
      .flatMap(projectDto -> ServerResponse
        .ok()
        .contentType(MediaType.APPLICATION_JSON)
        .body(projectDto, ProjectDto.class));
  }

  public Mono<ServerResponse> editProject(ServerRequest request) {
    Mono<ProjectDto> project =  request.bodyToMono(ProjectDto.class);
    String token = request.headers().firstHeader("authorization").substring(7);
    return jwtUtil.validateToken(token)
      .switchIfEmpty(Mono.error(WrongCredentialException::new))
      .flatMap(result -> project)
      .map(projectService::updateProject)
      .flatMap(projectDto -> ServerResponse
        .ok()
        .contentType(MediaType.APPLICATION_JSON)
        .body(projectDto, ProjectDto.class));
  }

  public Mono<ServerResponse> deleteProject(ServerRequest request) {
    String id = request.pathVariable("id");
    String token = request.headers().firstHeader("authorization").substring(7);
    return jwtUtil.validateToken(token)
      .switchIfEmpty(Mono.error(WrongCredentialException::new))
      .map(result -> id)
      .map(projectService::deleteProject)
      .flatMap(projectDto -> ServerResponse
        .ok()
        .contentType(MediaType.APPLICATION_JSON)
        .body(projectDto, ProjectDto.class));
  }
}
