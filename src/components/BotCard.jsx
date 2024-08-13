import React from 'react';

const BotCard = ({ bot, onEnlist }) => {
  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <button onClick={() => onEnlist(bot.id)}>Enlist</button>
    </div>
  );
};

export default BotCard;


