import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [dados, setDados] = useState(null)
  const [moeda, setMoeda] = useState('')

  useEffect(() => {
    if (!moeda) return

    const fetchData = async () => {
      try {
        const response = await axios.get(`https://v6.exchangerate-api.com/v6/16b3597b49d1e3949df055bf/latest/${moeda}`) //token gerado por conta no site da api
        setDados(response.data)
      } catch (error) {
        console.log(error)
      } finally {
        console.log('Requisição finalizada!')
      }
    } 

    fetchData()
  }, [moeda])

  return (
    <>
    {/* 
    TAREFAS DA EQUIPE:
    1. Ajustar arquitetura conforme descrito no README (components, services, hooks, pages)
    2. configurar um .env com a chave da api e fazer a chamada dele no services (fazer um arquivo api)
    3. desenvolver a pagina web conforme wireframe
    */}
      <div className='container'>
        <input 
          type="text"
          placeholder='Escolha a moeda'
          value={moeda}
          onChange={(e) => setMoeda(e.target.value.toUpperCase())} 
        />

        <ul>
          {dados && dados.conversion_rates ? (
            <>
            <li><strong>Dolar: </strong>{dados.conversion_rates.USD}</li>
            <li><strong>Real: </strong>{dados.conversion_rates.BRL}</li>
            <li><strong>Euro: </strong>{dados.conversion_rates.EUR}</li>
            <li><strong>Yene: </strong>{dados.conversion_rates.JPY}</li>
            <li><strong>Libra Esterlina: </strong>{dados.conversion_rates.GBP}</li>
            <li><strong>Franco Suíço: </strong>{dados.conversion_rates.CHF}</li>
            <li><strong>Dolar Canadense: </strong>{dados.conversion_rates.CAD}</li>
            <li><strong>Dolar Australiano: </strong>{dados.conversion_rates.AUD}</li>
            </>
          ) : (
            <li></li>
          )}
        </ul>
      </div>
    </>
  )
}

export default App
