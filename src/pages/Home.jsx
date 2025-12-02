import CurrencyList from "../components/CurrencyList.jsx";
import { useCurrencyRates } from "../hooks/useCurrencyRates.js";
import { useState } from "react";

function Home() {
  const [inputValue, setInputValue] = useState("");
  const [amount, setAmount] = useState("");
  const [baseCurrency, setBaseCurrency] = useState("");
  const { data, loading, error } = useCurrencyRates(baseCurrency);
  const [showAllCurrencies, setShowAllCurrencies] = useState(false);

  const handleChange = () => {
    if (inputValue.length === 3 && amount > 0) {
      setBaseCurrency(inputValue);
    }
  };

  const currenciesCards = Object.keys(currenciesCardNames);

  const currencyArray = (() => {
    if (!data) return [];

    const rates = Object.entries(data.conversion_rates)
      .filter(([code]) => currenciesCards.includes(code))
      .map(([code, value]) => ({
        code,
        value: value * amount,
        name: currenciesCardNames[code],
      }));
    return showAllCurrencies ? rates : rates.slice(0, 9);
  })();

  return (
    <div className="container mx-auto p-6 flex flex-col items-center text-center">
      <div className="flex justify-center w-130 mt-4 mb-20">
        <div
          className="
          flex items-center gap-3
          bg-purple-100 
          rounded-full 
          px-6 py-3 
          shadow-sm 
          w-full max-w-xl
        "
        >
          <input
            type="number"
            placeholder="1"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="
              bg-transparent
              w-10
              outline-none
              text-gray-700
              text-lg
              placeholder:text-gray-400
            "
          />

          <input
            type="text"
            placeholder="Escolha a moeda (Ex: USD, BRL, EUR)"
            maxLength={3}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toUpperCase())}
            className="
              bg-transparent
              flex-1
              outline-none
              text-gray-700
              text-lg
              placeholder:text-gray-400
            "
          />

          <button
            onClick={handleChange}
            className="
              text-gray-600 hover:text-gray-800 
              transition text-2xl hover:cursor-pointer
            "
          >
            ➤
          </button>
        </div>
      </div>

      {loading && <p className="text-gray-600">Carregando cotações...</p>}
      {error && <p className="text-red-500 font-semibold">Erro: {error}</p>}
      {data && <CurrencyList currencies={currencyArray} />}

      {data && currenciesCards.length > 3 && (
        <button
          onClick={() => setShowAllCurrencies(!showAllCurrencies)}
          className="
          mt-15 py-2 px-6 
          bg-transparent 
          hover:bg-gray-700 
          text-gray-700 
          rounded-full 
          transition 
          shadow-sm 
          border 
          border-gray-700 
          hover:text-white
          hover:cursor-pointer"
        >
          {showAllCurrencies
            ? "Mostrar menos moedas"
            : "Mostrar todas as moedas"}
        </button>
      )}
    </div>
  );
}

export default Home;

const currenciesCardNames = {
  USD: "Dólar Americano",
  BRL: "Real Brasileiro",
  EUR: "Euro",
  GBP: "Libra Esterlina",
  JPY: "Iene Japonês",
  CHF: "Franco Suíço",
  CAD: "Dólar Canadense",
  AUD: "Dólar Australiano",
  CNY: "Renminbi Chinês",
  HKD: "Dólar de Hong Kong",
  SGD: "Dólar de Singapura",
  SEK: "Coroa Sueca",
  KRW: "Won Sul-Coreano",
  NOK: "Coroa Norueguesa",
  NZD: "Dólar Neozelandês",
  INR: "Rúpia Indiana",
  MXN: "Peso Mexicano",
  TWD: "Novo Dólar Taiwanês",
  ZAR: "Rand Sul-Africano",
  DKK: "Coroa Dinamarquesa",
  PLN: "Złoty Polonês",
  THB: "Baht Tailandês",
  ILS: "Novo Shekel Israelense",
  IDR: "Rupia Indonésia",
  CZK: "Coroa Tcheca",
  AED: "Dirham dos Emirados Árabes",
  TRY: "Lira Turca",
  HUF: "Forint Húngaro",
  CLP: "Peso Chileno",
  SAR: "Riyal Saudita",
};
