import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBotById } from '../services/api';


const BotSpecs = () => {
  const { id } = useParams();
  const [bot, setBot] = useState(null);

  useEffect(() => {
    const fetchBotDetails = async () => {
      try {
        const data = await getBotById(id);
        setBot(data);
      } catch (error) {
        console.error('Error fetching bot details:', error);
      }
    };

    fetchBotDetails();
  }, [id]);

  if (!bot) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bot-specs">
      <img src={bot.avatar_url} alt={bot.name} />
      <h2>{bot.name}</h2>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
      <p>Catchphrase: {bot.catchphrase}</p>
    </div>
  );
};

export default BotSpecs;











