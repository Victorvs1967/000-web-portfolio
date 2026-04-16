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
@Document("pages")
public class Page {
  
  @Id
  private String id;
  private String name;
  private String title;
  private String subtitle;
  private String description;
  private Object payload;
}
