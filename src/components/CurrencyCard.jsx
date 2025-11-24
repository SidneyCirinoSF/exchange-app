import getFlag from "../services/getFlag";

const CurrencyCard = ({ code, name, value }) => {
  return (
    <div style={styles.card}>
      <div style={styles.left}>
        <span style={styles.code}>{code}</span>
        <span style={styles.value}>{value.toFixed(2)}</span>
        <span style={styles.name}>{name}</span>
      </div>

      <img
        src={getFlag(code)}
        alt={code}
        style={styles.flag}
      />
    </div>
  );
};

export default CurrencyCard;

const styles = {
  card: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px",
    borderRadius: "12px",
    backgroundColor: "#f5f5f5",
    border: "1px solid #ddd",
  },
  left: {
    display: "flex",
    flexDirection: "column",
  },
  code: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  value: {
    fontSize: "16px",
    color: "#333",
  },
  name: {
    fontSize: "14px",
    color: "#555",
  },
  flag: {
    width: "48px",
    height: "48px",
    borderRadius: "6px",
    objectFit: "cover",
  },
};
