package io.myprojectone.ipl_dashboard.repository;

import org.springframework.data.repository.CrudRepository;

import io.myprojectone.ipl_dashboard.model.Team;

public interface TeamRepository extends CrudRepository<Team, Long> {
    Team findByTeamName(String teamName);
}
