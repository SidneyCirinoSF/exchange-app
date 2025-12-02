import getFlag from "../services/getFlag";

const CurrencyCard = ({ code, name, value }) => {
  return (
    <div
      className="
        flex justify-between items-center
        p-4
        bg-transparent border border-purple-200
        rounded-xl shadow-sm
      "
    >
      {/* Lado esquerdo */}
      <div className="flex flex-col text-left">
        <span className="text-lg font-semibold">{code}</span>
        <span className="text-base text-gray-700">{value.toFixed(2)}</span>
        <span className="text-sm text-gray-600">{name}</span>
      </div>

      {/* Bandeira */}
      <img
        src={getFlag(code)}
        alt={code}
        className="
          w-12 h-12
          rounded-md
          object-cover
        "
      />
    </div>
  );
};

export default CurrencyCard;
