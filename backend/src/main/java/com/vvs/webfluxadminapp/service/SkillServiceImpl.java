package com.vvs.webfluxadminapp.service;

import org.springframework.stereotype.Service;

import com.vvs.webfluxadminapp.dto.SkillDto;
import com.vvs.webfluxadminapp.mapper.AppMapper;
import com.vvs.webfluxadminapp.model.Skill;
import com.vvs.webfluxadminapp.repository.SkillRepository;

import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
@RequiredArgsConstructor
public class SkillServiceImpl implements SkillService {

  private final SkillRepository skillRepository;
  private final AppMapper appMapper;

  @Override
  public Flux<SkillDto> getSkills() {
    return skillRepository.findAll()
      .map(skill -> appMapper.convert(skill, SkillDto.class));
  }

  @Override
  public Mono<SkillDto> getSkill(String id) {
    return skillRepository.findById(id)
      .map(skill -> appMapper.convert(skill, SkillDto.class));
  }

  @Override
  public Mono<SkillDto> createSkill(SkillDto skillDto) {
    return skillRepository.save(appMapper.convert(skillDto, Skill.class))
      .map(skill -> appMapper.convert(skill, SkillDto.class));
  }

  @Override
  public Mono<SkillDto> updateSkill(SkillDto skillDto) {
    return skillRepository.findById(skillDto.getId())
      .switchIfEmpty(Mono.error(RuntimeException::new))
      .map(skill -> Skill.builder()
        .id(skill.getId())
        .name(skillDto.getName())
        .description(skillDto.getDescription())
        .percent(skillDto.getPercent())
        .build())
      .flatMap(skillRepository::save)
      .map(skill -> appMapper.convert(skill, SkillDto.class));
  }

  @Override
  public Mono<SkillDto> deleteSkill(String id) {
    return skillRepository.findById(id)
      .switchIfEmpty(Mono.error(RuntimeException::new))
      .flatMap(this::delete)
      .map(skill -> appMapper.convert(skill, SkillDto.class));
  }

  private Mono<Skill> delete(Skill skill) {
    return Mono.fromSupplier(() -> {
      skillRepository
        .delete(skill)
        .subscribe();
      return skill;
    });
  }

}
