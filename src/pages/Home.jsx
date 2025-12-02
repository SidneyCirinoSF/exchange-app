import CurrencyList from '../components/CurrencyList.jsx'
import { useCurrencyRates } from '../hooks/useCurrencyRates.js'
import { useState } from 'react'

function Home() {
    const [inputValue, setInputValue] = useState('')
    const [amount, setAmount] = useState('')
    const [baseCurrency, setBaseCurrency] = useState('')
    const { data, loading, error } = useCurrencyRates(baseCurrency)
    const [showAllCurrencies, setShowAllCurrencies] = useState(false)

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
        return showAllCurrencies ? rates : rates.slice(0, 8);
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
            {data && currenciesCards.length > 3 && (
                <button
                    onClick={() => setShowAllCurrencies(!showAllCurrencies)}
                    style={{
                        marginTop: '10px',
                        padding: '8px 16px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    {showAllCurrencies ? 'Mostrar menos moedas' : 'Mostrar todas as moedas'}
                </button>
            )}
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
    SAR: "Riyal Saudita"
}