function getFlag(code) {
  if (code === "EUR") { {/* Gambiarra pq nessa api não tem o Reino Unido kk */}
    return "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg";
  }

  return `https://flagsapi.com/${code.slice(0, 2)}/flat/64.png`;
}
export default getFlag;