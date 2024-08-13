import React from 'react';

const YourBotArmy = ({ army, onRelease, onDischarge }) => {

  return (
    <div>
      <h2>Your Bot Army</h2>
      <div className="bot-collection">
        {army.map((bot) => (
          <div key={bot.id} className="bot-card">
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <p>Health: {bot.health}</p>
            <p>Class: {bot.bot_class}</p>
            <p>Armor: {bot.armor}</p>
            <p>Created At: {new Date(bot.created_at).toLocaleString()}</p>
            <p>Updated At: {new Date(bot.updated_at).toLocaleString()}</p>
            <button onClick={() => onRelease(bot)}>Release</button>
            <button onClick={() => onDischarge(bot.id)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;