import { React, useState } from "react";

var myHeaders = new Headers();
myHeaders.append("apikey", "NQ4mQ6Xpuyvq1lQYYdXn50h77CtWjjQp");

const CurrencyItem = (props) => {
  const [currency_name, UpdateCurrency_name] = useState(
    props.post.base + "/" + props.post.symbols
  );
  const [currency_price, UpdateCurrency_price] = useState("0");

  function GetCurrency(props) {
    let requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
      base: props.post.base,
      symbols: props.post.symbols,
    };
    function processResult(result) {
      result = JSON.parse(result);
      if (result.success) {
        UpdateCurrency_price(result.rates[requestOptions.symbols]);
      }
    }
    let api_url =
      "https://api.apilayer.com/exchangerates_data/latest?symbols=" +
      requestOptions.symbols +
      "&base=" +
      requestOptions.base;
    console.log(api_url);
    fetch(api_url, requestOptions)
      .then((response) => response.text())
      .then((result) => processResult(result))
      .catch((error) => console.log("error", error));
  }

  return (
    <div className="currency">
      <p>
        {currency_name} {currency_price}{" "}
      </p>
      <button style={{ marginLeft: "20px" }} onClick={() => GetCurrency(props)}>
        Click me to get Currency{" "}
      </button>
    </div>
  );
};

export default CurrencyItem;
