export default function CurrencyList({ rates, loading, error }) {
    if (loading) return <p className="info"> Carregando Cotações... </p>;
    if (error) return <p className="error"> {error} </p>;
    if (!rates) return null;


    const mainCurrencies = ['USD', 'BRL', 'EUR', 'JPY', 'GBP', 'CHF', 'CAD', 'AUD'];

    return (
        <ul className="currency-list">
            {mainCurrencies.map(currency => (
                <li key={currency}>
                    <strong>{currency}</strong> {rates[currency]?.toFixed(4) || 'N/A'}
                </li>
            ))}
        </ul>
    );
}