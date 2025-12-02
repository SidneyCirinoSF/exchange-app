import CurrencyCard from "./CurrencyCard";

export default function CurrencyList({ currencies }) {
  return (
    <div className=" grid grid-cols-3 gap-6 w-400 max-w-5xl mx-auto">
      {currencies.map((c) => (
        <CurrencyCard
          key={c.code}
          code={c.code}
          name={c.name}
          value={c.value}
        />
      ))}
    </div>
  );
}
