import React from 'react';

const PlayerInfo = ({ playerData }) => {
  return (
    <div className="player-info">
      <h2>{playerData.player_name}</h2>
      <p>Team: {playerData.team_abbreviation}</p>
      <p>Season: {playerData.season}</p>
      <p>Age: {playerData.age}</p>
      <p>Height: {playerData.player_height} cm</p>
      <p>Weight: {playerData.player_weight} kg</p>
      <p>Country: {playerData.country}</p>
      <p>College: {playerData.college}</p>
      <p>Draft Year: {playerData.draft_year}</p>
      <p>Draft Round: {playerData.draft_round}</p>
      <p>Draft Number: {playerData.draft_number}</p>
      <p>Points: {playerData.pts}</p>
      <p>Rebounds: {playerData.reb}</p>
      <p>Assists: {playerData.ast}</p>
      <p>Net Rating: {playerData.net_rating}</p>
      <p>Usage Percentage: {playerData.usg_pct}</p>
      <p>Assist Percentage: {playerData.ast_pct}</p>
      <p>Defensive Rebound Percentage: {playerData.dreb_pct}</p>
      <p>Offensive Rebound Percentage: {playerData.oreb_pct}</p>
      <p>True Shooting Percentage: {playerData.ts_pct}</p>
    </div>
  );
};

export default PlayerInfo;