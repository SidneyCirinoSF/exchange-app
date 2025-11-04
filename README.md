# 💱 Currency Converter - React App

Aplicação web desenvolvida em **React** para exibir **cotações de moedas em tempo real** (como Dólar, Euro, Iene, entre outras) e realizar **conversões automáticas** entre diferentes moedas, consumindo dados da **[ExchangeRate API v6](https://www.exchangerate-api.com/)**.

---

## 🚀 Tecnologias Utilizadas

- **React** – biblioteca JavaScript para construção da interface.
- **Vite** – ferramenta de build e desenvolvimento rápido.
- **Axios** – para realizar requisições HTTP assíncronas à API.
- **ExchangeRate API v6** – fonte dos dados de cotação de moedas.
- **Kanban (Metodologia Ágil)** – gerenciamento de tarefas.

---

## 📦 Funcionalidades

- 🔍 Exibe as principais **cotações de moedas** (USD, EUR, JPY, GBP, BRL, etc).
- 🔄 Permite **converter valores** entre diferentes moedas.
- 📈 Atualização automática dos valores com base na API.
- 💡 Interface simples, rápida e responsiva.

---

## 🧠 Arquitetura e Organização

A aplicação segue uma estrutura modular, com **componentes reutilizáveis** e **separação de responsabilidades**:

```
src/
├── components/
│   ├── CurrencySelector.jsx
│   ├── ConverterForm.jsx
│   └── ResultDisplay.jsx
├── services/
│   └── api.js        # Configuração do Axios e chamadas à ExchangeRate API
├── hooks/
│   └── useCurrencyConverter.js
├── pages/
│   └── Home.jsx
├── App.jsx
└── main.jsx
```

---

## ⚙️ Como Executar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/currency-converter.git
```

### 2. Acesse o diretório

```bash
cd currency-converter
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure a variável de ambiente da API

Crie um arquivo `.env` na raiz do projeto com a sua chave da **ExchangeRate API v6**:

```
VITE_API_KEY=SUA_CHAVE_AQUI
```

### 5. Execute o servidor de desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em:  
👉 [http://localhost:5173](http://localhost:5173)

---

## 🧩 Exemplo de Requisição à API

Arquivo: `src/services/api.js`

```js
import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;
const baseURL = `https://v6.exchangerate-api.com/v6/${apiKey}`;

export const getExchangeRates = async (baseCurrency = "USD") => {
  const response = await axios.get(`${baseURL}/latest/${baseCurrency}`);
  return response.data;
};
```

---

## 📊 Gestão do Projeto

O desenvolvimento segue a **metodologia ágil Kanban**, com:

- 🧩 **Quadro Kanban** para acompanhamento das tarefas.  
- 🤝 Reuniões rápidas (*daily meetings*) para alinhamento da equipe.

---

## 👨‍💻 Autor

Desenvolvido por **Sidney Cirino, Wagner Daniell, Joalison Silva, Pedro Valença e Fabricio Batista**  
💼 GitHub: [https://github.com/SidneyCirinoSF](https://github.com/SidneyCirinoSF)  
✉️ Contato: sidneycirinosf@gmail.com
