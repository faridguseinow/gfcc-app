import React, { Component } from "react";
import './style.scss';

class Converter extends Component {
  state = {
    currencies: ["USD", "EUR", "RUB"],
    base: "RUB",
    amount: "",
    convertTo: "USD",
    result: "",
    date: ""
  };

  handleSelect = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
        result: null
      },
      this.calculate
    );
  };

  handleInput = (e) => {
    this.setState(
      {
        amount: e.target.value,
        result: null
      },
      this.calculate
    );
  };

  handleSwap = (e) => {
    e.preventDefault();
    const { base, convertTo } = this.state;
    this.setState(
      {
        base: convertTo,
        convertTo: base,
        result: null
      },
      this.calculate
    );
  };

  calculate = () => {
  const { amount, base, convertTo } = this.state;

  if (isNaN(amount) || amount === "") {
    return;
  }

  const apiKey = "cur_live_pd5Kh9k8TPUdVBIssznMOR6lMbdmtQ48YD7w63Qu"; // вставь сюда свой ключ!

  fetch(`https://api.currencyapi.com/v3/latest?apikey=${apiKey}&base_currency=${base}&currencies=${convertTo}`)
    .then((res) => res.json())
    .then((data) => {
      console.log("API ответ:", data);

      const rate = data.data[convertTo]?.value;

      if (!rate) {
        this.setState({ result: "Ошибка: Валюта не найдена", date: "" });
        return;
      }

      const result = (rate * amount).toFixed(2);
      this.setState({
        result,
        date: new Date().toLocaleDateString()
      });
    })
    .catch((error) => {
      console.error("Ошибка при загрузке курса:", error);
      this.setState({ result: "Ошибка загрузки данных" });
    });
};

  
  

  render() {
    const { currencies, base, amount, convertTo, result, date } = this.state;
    return (
      <div className="converter-container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="card card-body">
              <h5>
                {amount
                  ? `${amount} ${base} равно`
                  : "Введите сумму для конвертации"}
              </h5>
              <h2>
                {result === null ? "Ожидание..." : result} {convertTo}
              </h2>
              <p>Дата обновления: {date}</p>
              <div className="row">
                <div className="col-lg-10 col-md-10 col-sm-10">
                  <form className="form-inline mb-4">
                    <input
                      className="form-control form-control-lg mx-3"
                      value={amount}
                      type="number"
                      onChange={this.handleInput}
                      placeholder="Введите сумму"
                    />
                    <select
                      className="form-control form-control-lg"
                      name="base"
                      value={base}
                      onChange={this.handleSelect}
                    >
                      {currencies.map((currency) => (
                        <option key={currency} value={currency}>
                          {currency}
                        </option>
                      ))}
                    </select>
                  </form>

                  <form className="form-inline mb-4">
                    <input
                      className="form-control form-control-lg mx-3"
                      disabled
                      value={result === null ? "Ожидание..." : result}
                    />
                    <select
                      className="form-control form-control-lg"
                      name="convertTo"
                      value={convertTo}
                      onChange={this.handleSelect}
                    >
                      {currencies.map((currency) => (
                        <option key={currency} value={currency}>
                          {currency}
                        </option>
                      ))}
                    </select>
                  </form>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 align-self-center">
                  <h1
                    onClick={this.handleSwap}
                    className="swap"
                    style={{ cursor: "pointer" }}
                  >
                    &#8595;&#8593;
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Converter;
