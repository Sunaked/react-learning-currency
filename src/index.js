import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import CurrencyItem from "./components/currency.jsx";
/*
использовать:
https://exchangeratesapi.io/ - апи по курсам валют

ТЗ:
должен быть div с курсом рубля к доллару
если  рубль вырос по сравнению с прошлым днем то
фон зеленый
если упал
то фон красный
выводим курс на страницу по нажатию на кнопку
*/

const exchangeratesapi_apiKey = "NQ4mQ6Xpuyvq1lQYYdXn50h77CtWjjQp";

function App() {
  return (
    <div className="myBody">
      <CurrencyItem post={{ base: "USD", symbols: "RUB" }} />
      <CurrencyItem post={{ base: "USD", symbols: "EUR" }} />
      <CurrencyItem post={{ base: "EUR", symbols: "RUB" }} />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
