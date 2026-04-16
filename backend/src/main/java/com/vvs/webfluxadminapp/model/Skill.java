package com.vvs.webfluxadminapp.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Document("skills")
public class Skill {
  
  @Id
  private String id;
  private String name;
  private String description;
  private int percent;

}
