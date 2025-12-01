import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;

const getCurrencyRates = async (baseCurrency) => {
  if (!baseCurrency) throw new Error('Moeda base é obrigatória');

  const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${baseCurrency}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export default getCurrencyRates;