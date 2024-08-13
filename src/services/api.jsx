const BASE_URL = 'http://localhost:3000';

// Fetch all bots
export const getBots = async () => {
  try {
    const response = await fetch(`${BASE_URL}/bots`);
    if (!response.ok) {
      throw new Error('Failed to fetch bots');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching bots:', error);
    throw error;
  }
};

// Enlist a bot
export const enlistBot = async (botId) => {
  try {
    const response = await fetch(`${BASE_URL}/enlist-bot/${botId}`, {
      method: 'POST',
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Failed to enlist bot: ${errorMessage}`);
    }
  } catch (error) {
    console.error('Error enlisting bot:', error);
    throw error;
  }
};

// Release a bot
export const releaseBot = async (botId) => {
  try {
    const response = await fetch(`${BASE_URL}/release-bot/${botId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to release bot');
    }
  } catch (error) {
    console.error('Error releasing bot:', error);
    throw error;
  }
};

// Discharge a bot
export const dischargeBot = async (botId) => {
  try {
    const response = await fetch(`${BASE_URL}/discharge-bot/${botId}`, {
      method: 'DELETE',
    });
    console.log('Response', response);

    if (!response.ok) {
      throw new Error('Failed to discharge bot');
    }
  } catch (error) {
    console.error('Error discharging bot:', error);
    throw error;
  }
};

// Get bot details by ID
export const getBotById = async (botId) => {
  try {
    const response = await fetch(`${BASE_URL}/bots/${botId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch bot details');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching bot details:', error);
    throw error;
  }
};





