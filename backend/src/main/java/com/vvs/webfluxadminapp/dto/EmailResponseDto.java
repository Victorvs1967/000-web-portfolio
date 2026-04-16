package com.vvs.webfluxadminapp.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class EmailResponseDto {

  @NotNull
  private String subject;

  @NotNull
  @Email
  private String emailTo;

  @NotNull
  @Min(10)
  private String message;

}
