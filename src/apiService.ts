import axios from 'axios';

const BASE_URL = 'https://api.koranime.fun/v1';

export const fetchHomeData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/home`);
    return response.data;
  } catch (error) {
    console.error('Error fetching home data:', error);
    throw error;
  }
};

export const fetchWatchData = async (endpoint: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/nonton/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching watch data:', error);
    throw error;
  }
};
