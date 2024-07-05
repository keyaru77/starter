import axios from 'axios';

const API_URL = 'https://api.koranime.fun/v1/home';

export const fetchHomeData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
