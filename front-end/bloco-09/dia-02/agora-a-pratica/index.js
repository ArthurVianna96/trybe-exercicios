const EXCHANGE_API_URL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/';
const CRYPTOS_API_URL = 'https://api.coincap.io/v2/assets';

const getObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
}

const fetchExchangeRate = async (from, to) => {
  const url = `${EXCHANGE_API_URL}${from.toLowerCase()}/${to.toLowerCase()}.min.json`;
  const response = await fetch(url, getObject);
  const data = await response.json();
  return data.brl;
}

const fetchCoins = async () => {
  const response = await fetch(CRYPTOS_API_URL, getObject);
  const { data } = await response.json();
  const filteredCoins = data.filter(({ rank }) => rank <= 10);
  return filteredCoins;
};

const createElement = ({ name, symbol, priceUsd }, elementToAppend, exchangeRate) => {
  const newCoin = document.createElement('li');
  newCoin.innerHTML = `
    <p><b>${name} (${symbol})</b> ${(parseFloat(priceUsd)*exchangeRate).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
  `;
  elementToAppend.appendChild(newCoin);
}

const loadCoins = async () => {
  const list = document.getElementById('crytpos-list');
  const exchangeRate = await fetchExchangeRate('USD', 'BRL');
  const coins = await fetchCoins();
  coins.forEach((coin) => createElement(coin, list, exchangeRate));
}

window.onload = () => loadCoins();