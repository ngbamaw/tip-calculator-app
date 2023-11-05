import React from "react";
import classNames from "clsx";

import DollarIcon from "./assets/images/icon-dollar.svg?react";
import PersonIcon from "./assets/images/icon-person.svg?react";
import StyledTipCalculator from "./style";
import "./font.css";

export default function App() {
  const [billInput, setBillInput] = React.useState("");
  const [personInput, setPersonInput] = React.useState("");
  const [tipPerPerson, setTipPerPerson] = React.useState("0.00");
  const [total, setTotal] = React.useState("0.00");
  const [tip, setTip] = React.useState(0);
  const [customTip, setCustomTip] = React.useState(true);

  React.useEffect(() => {
    if (billInput && personInput) {
      const bill = parseFloat(billInput);
      const person = parseFloat(personInput);
      setTipPerPerson(
        ((bill * (tip / 100)) / person)
          .toFixed(2)
          .replace(/\d(?=(\d{3})+\.)/g, "$&,")
      );
      setTotal(
        ((bill * (1 + tip / 100)) / person)
          .toFixed(2)
          .replace(/\d(?=(\d{3})+\.)/g, "$&,")
      );
    } else {
      setTipPerPerson("0.00");
      setTotal("0.00");
    }
  }, [billInput, personInput, tip]);

  const onReset = () => {
    setBillInput("");
    setPersonInput("");
    setTipPerPerson("0.00");
    setTotal("0.00");
    setTip(0);
    setCustomTip(true);
  };

  return (
    <StyledTipCalculator>
      <div id="tip-calculator">
        <div id="input-section">
          <div className="tip-input-container">
            <label>
              Bill
              <div className="tip-input">
                <DollarIcon />
                <input
                  type="text"
                  pattern="\d+(\.)?(\d{1,2})?"
                  value={billInput}
                  placeholder="0"
                  onChange={(e) => {
                    if (e.target.validity.valid) setBillInput(e.target.value);
                  }}
                />
              </div>
            </label>
          </div>

          <div className="tip-input-container">
            <h2>Select Tip %</h2>
            <div className="tip-selection-group">
              {[5, 10, 15, 25, 50].map((value) => (
                <button
                  className={classNames({
                    "tip-selection": true,
                    selected: tip === value,
                  })}
                  onClick={() => {
                    setCustomTip(false);
                    setTip(value);
                  }}
                >
                  {value}%
                </button>
              ))}
              <input
                type="text"
                value={(customTip && tip) || ""}
                placeholder="Custom"
                pattern="\d+(\.)?(\d{1,2})?$"
                onFocus={() => setCustomTip(true)}
                onChange={(e) => setTip(Number(e.target.value))}
              />
            </div>
          </div>

          <div className="tip-input-container">
            <label>
              Number of People
              <div className="tip-input">
                <PersonIcon />
                <input
                  type="text"
                  value={personInput}
                  pattern="\d+"
                  placeholder="0"
                  onChange={(e) => {
                    if (e.target.validity.valid) setPersonInput(e.target.value);
                  }}
                />
              </div>
            </label>
          </div>
        </div>
        <div id="result-section">
          <div className="tip-line">
            <div className="label">
              <p className="name">Tip Amount</p>
              <p className="person">/ person</p>
            </div>

            <p className="price">${tipPerPerson}</p>
          </div>
          <div className="tip-line">
            <div className="label">
              <p className="name">Total</p>
              <p className="person">/ person</p>
            </div>

            <p className="price">${total}</p>
          </div>
          <button
            type="button"
            id="btn-reset"
            onClick={() => onReset()}
            disabled={!tip && !billInput && !personInput}
          >
            RESET
          </button>
        </div>
      </div>
    </StyledTipCalculator>
  );
}
