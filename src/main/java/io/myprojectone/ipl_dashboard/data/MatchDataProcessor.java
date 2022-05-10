package io.myprojectone.ipl_dashboard.data;

import java.time.LocalDate;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.batch.item.ItemProcessor;

import io.myprojectone.ipl_dashboard.model.Match;
    
public class MatchDataProcessor implements ItemProcessor<MatchInput, Match> {

    private static final Logger log = LoggerFactory.getLogger(MatchDataProcessor.class);

    @Override
    public Match process(final MatchInput matchInput) throws Exception {
        
        Match match = new Match();

        match.setId(Long.parseLong(matchInput.getId()));
        match.setCity(matchInput.getCity());
        match.setDate(LocalDate.parse(matchInput.getDate()));
        match.setPlayerOfMatch(matchInput.getPlayer_of_match());
        match.setVenue(matchInput.getVenue());
        
        String tosswinner = matchInput.getToss_winner();
        String tossdecision = matchInput.getToss_decision();
        String t1 = matchInput.getTeam1();
        String t2 = matchInput.getTeam2();

        if( tossdecision.equals("bat")){
            if(tosswinner.equals(t1)){
                match.setTeam1(t1);
                match.setTeam2(t2);
            }else{
                match.setTeam1(t2);
                match.setTeam2(t1);
            }
        }else{
            if(tosswinner.equals(t1)){
                match.setTeam1(t2);
                match.setTeam2(t1);
            }else{
                match.setTeam1(t1);
                match.setTeam2(t2);
            }
        }

        match.setTossWinner(matchInput.getToss_winner());
        match.setTossDecision(matchInput.getToss_decision());
        match.setMatchWinner(matchInput.getWinner());
        match.setResult(matchInput.getResult());
        match.setResultMargin(matchInput.getResult_margin());
        match.setUmpire1(matchInput.getUmpire1());
        match.setUmpire2(matchInput.getUmpire2());

        return match;

    }

}
