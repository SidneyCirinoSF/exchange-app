import { useState, useEffect } from "react";
import { getCurrencyRates } from "../services/api";

export const useCurrencyRates = (baseCurrency = '') => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!baseCurrency) {
            setData(null);
            return;
        }

        const fetchRates = async () => {
            setLoading(true);
            setError(null);
            try {
                console.log('Buscando cotações para:', baseCurrency);
                const result = await getCurrencyRates(baseCurrency);
                console.log('Dados recebidos:', result);
                setData(result);
            } catch (err) {
                console.log('Erro na API', err);
                setError(err.message || 'Erro ao carregar cotações');
            } finally {
                setLoading(false);
            }
        };

        fetchRates();

    }, [baseCurrency]);

    return { data, loading, error};
};