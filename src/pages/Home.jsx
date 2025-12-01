import CurrencyList from '../components/CurrencyList.jsx'
import { useCurrencyRates } from '../hooks/useCurrencyRates.js'
import { useState } from 'react'

function Home() {
    const [inputValue, setInputValue] = useState('')
    const [amount, setAmount] = useState('')
    const [baseCurrency, setBaseCurrency] = useState('')
    const { data, loading, error } = useCurrencyRates(baseCurrency)

    const handleChange = (e) => {
        // Só att o estado da baseCurrency (que dispara a API) quando tiver 3 letras, isso evita varias chamadas.
        if (inputValue.length === 3 && amount > 0) {
            setBaseCurrency(inputValue)
        }
    }

    const currenciesCards = Object.keys(currenciesCardNames)

    const currencyArray = (() => {
        if (!data) return [];

        const rates = Object.entries(data.conversion_rates)
            .filter(([code]) => currenciesCards.includes(code))
            .map(([code, value]) => ({
                code,
                value: value * amount,
                name: currenciesCardNames[code]
            }));

        return rates;
    })();

    return (
        <div className='container'>
            <input 
                type="text"
                placeholder='Escolha a moeda (Ex: USD, BRL, EUR)'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value.toUpperCase())}
                maxLength={3}
            />

            <input 
                type="number"
                placeholder='Digite o valor a ser convertido'
                value={amount}
                onChange={(e) => Number(setAmount(e.target.value))}
                maxLength={3}
            />

            <button
                onClick={handleChange}
            >
                Converter
            </button>

            {loading && <p>Carregando cotações...</p>}
            {error && <p className="error">Erro: {error}</p>}
            {data && <CurrencyList currencies={currencyArray} />}
        </div>
    )
}

export default Home

const currenciesCardNames = {
    USD: "Dólar Americano",
    BRL: "Real Brasileiro",
    EUR: "Euro",
    GBP: "Libra Esterlina",
    JPY: "Iene Japonês",
    CHF: "Franco Suíço",
    CAD: "Dólar Canadense",
    AUD: "Dólar Australiano",
}