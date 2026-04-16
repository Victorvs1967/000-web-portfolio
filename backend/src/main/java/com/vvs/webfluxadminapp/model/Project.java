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
@Document("projects")
public class Project {

  @Id
  private String id;
  private String name;
  private Image image;
  private String description;
  private Skill[] skills;
  private Object[] links;
}
