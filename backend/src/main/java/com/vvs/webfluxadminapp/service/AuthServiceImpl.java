package com.vvs.webfluxadminapp.service;

import com.vvs.webfluxadminapp.dto.ResponseDto;
import com.vvs.webfluxadminapp.dto.UserDto;
import com.vvs.webfluxadminapp.error.exception.EmailAlreadyExistException;
import com.vvs.webfluxadminapp.error.exception.UserAlreadyExistException;
import com.vvs.webfluxadminapp.mapper.AppMapper;
import com.vvs.webfluxadminapp.model.User;
import com.vvs.webfluxadminapp.repository.UserRepository;
import com.vvs.webfluxadminapp.security.JwtUtil;

import lombok.RequiredArgsConstructor;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import reactor.core.publisher.Mono;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

  private final PasswordEncoder passwordEncoder;
  private final UserRepository userRepository;
  private final JwtUtil jwtUtil;
  private final AppMapper appMapper;

  @Override
  public Mono<UserDto> signUp(UserDto userDto) {
    return isUserExist(userDto.getUsername())
      .filter(userExist -> !userExist)
      .switchIfEmpty(Mono.error(UserAlreadyExistException::new))
      .flatMap(userExist -> isEmailExist(userDto.getEmail())
        .filter(emailExist -> !emailExist)
        .switchIfEmpty(Mono.error(EmailAlreadyExistException::new)))
      .map(aBoolean -> userDto)
      .map(usrDto -> appMapper.convert(usrDto, User.class))
      .doOnNext(user -> user.setPassword(passwordEncoder.encode(user.getPassword())))
      .doOnNext(user -> user.setActive(true))
      .flatMap(userRepository::save)
      .map(user -> appMapper.convert(user, UserDto.class));
}

  @Override
  public Mono<ResponseDto> login(String username, String password) {
    return userRepository.findUserByUsername(username)
      .filter(userDetails -> passwordEncoder.matches(password, userDetails.getPassword()))
      .map(userDetails -> jwtUtil.generateToken(userDetails))
      .map(token -> ResponseDto.builder()
        .token(token)
        .build());
  }

  private Mono<Boolean> isUserExist(String username) {
    return userRepository.findUserByUsername(username)
      .map(user -> true)
      .switchIfEmpty(Mono.just(false));
  }

  private Mono<Boolean> isEmailExist(String email) {
    return userRepository.findUserByEmail(email)
      .map(user -> true)
      .switchIfEmpty(Mono.just(false));
  }

}
