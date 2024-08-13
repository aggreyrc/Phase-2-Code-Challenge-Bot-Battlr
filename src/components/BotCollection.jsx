import React from 'react';


const BotCollection = ({ bots, onEnlist }) => {
  return (
    <div className="bot-collection">
      
      {bots.map((bot) => (
        <div key={bot.id} className="bot-card">
          <img src={bot.avatar_url} alt={bot.name} />
          <h3>{bot.name}</h3>
          <p>Health: {bot.health}</p>
          <p>Class: {bot.bot_class}</p>
          <p>Armor: {bot.armor}</p>
          <p>Created At: {new Date(bot.created_at).toLocaleString()}</p>
          <p>Updated At: {new Date(bot.updated_at).toLocaleString()}</p>
          <button onClick={() => onEnlist(bot)}>Enlist</button>
        </div>
      ))}
    </div>
  );
};

export default BotCollection;