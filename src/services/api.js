import axios from 'axios';

const API_KEY = '16b3597b49d1e3949df055bf';

const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest`;

export const getCurrencyRates = async (baseCurrency) => {
  if (!baseCurrency) throw new Error('Moeda base é obrigatória');

  const url = `${API_URL}/${baseCurrency}`;
  console.log('Chamando API:', url); 

  try {
    const response = await axios.get(url);
    console.log('Dados recebidos:', response.data);
    return response.data;
  } catch (err) {
    console.error('Erro na API:', err.response?.data || err.message);
    throw err;
  }
};