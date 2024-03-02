import React from 'react';

interface GameCardProps {
  name: string,
  playTime: string,
}

const GameCard: React.FC<GameCardProps> = ({
  name,
  playTime,
}: GameCardProps) => {
  return (
    <div className='game_card'>
      {name} {playTime}h
    </div>
  );
}

export default GameCard;