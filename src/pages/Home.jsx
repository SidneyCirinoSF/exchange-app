import CurrencyList from '../components/CurrencyList.jsx'
import { useCurrencyRates } from '../hooks/useCurrencyRates.js'
import { useState } from 'react'

function Home() {
    const [inputValue, setInputValue] = useState('')
    const [baseCurrency, setBaseCurrency] = useState('')
    const { data, loading, error } = useCurrencyRates(baseCurrency)

    const handleChange = (e) => {
        const value = e.target.value.toUpperCase()
        setInputValue(value)
        
        // Só att o estado da baseCurrency (que dispara a API) quando tiver 3 letras, isso evita varias chamadas.
        if (value.length === 3) {
            setBaseCurrency(value)
        }
    }

    const currenciesCards = Object.keys(currenciesCardNames)

    const currencyArray = (() => {
        if (!data) return [];

        const rates = Object.entries(data.conversion_rates)
            .filter(([code]) => currenciesCards.includes(code))
            .map(([code, value]) => ({
                code,
                value,
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
                onChange={handleChange}
                maxLength={3}
            />

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