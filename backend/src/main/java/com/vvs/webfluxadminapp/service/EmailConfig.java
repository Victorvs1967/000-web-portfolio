package com.vvs.webfluxadminapp.service;

import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component
public class EmailConfig {

  @NotNull
  @Value("${mail.smtp.host}")
  private String host;

  @NotNull
  @Value("${mail.smtp.port}")
  private int port;

  @NotNull
  @Value("${mail.smtp.username}")
  private String username;

  @NotNull
  @Value("${mail.smtp.password}")
  private String password;

  @NotNull
  @Value("${mail.smtp.auth}")
  private Boolean auth;

  @NotNull
  @Value("${mail.smtp.ssl.enable}")
  private Boolean ssl;

  @Value("${mail.smtp.starttls.enable}")
  private Boolean ttls;

  @Value("${mail.smtp.debug}")
  private Boolean debug;

}
