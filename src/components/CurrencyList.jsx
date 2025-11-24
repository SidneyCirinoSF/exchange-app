import CurrencyCard from "./CurrencyCard";

export default function CurrencyList({ currencies }) {
  return (
    <div style={styles.container}>
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

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    width: "100%",
  },
};
