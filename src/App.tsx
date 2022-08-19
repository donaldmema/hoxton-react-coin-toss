import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";

function App() {
  const [coin, setCoin] = useState("");

  const flipCoin = () => {
    setCoin("flipping");
    setTimeout(() => {
      setCoin(Math.random() > 0.5 ? "heads" : "tails");
    }, 1000);
  };

  return (
    <div className="App">
      {coin === "" && (
        <img
          src="https://miro.medium.com/max/425/1*UdFt2qWrJx8hN2O0fcAl_g.jpeg"
          alt="flip the coin"
        />
      )}

      {coin === "flipping" && (
        <img
          src="https://nationaltoday.com/wp-content/uploads/2021/06/Flip-A-Coin-Day-640x514.jpg"
          alt="flipping"
        />
      )}

      <div className="coin-container">
        {coin === "heads" && (
          <>
            <h2>Heads</h2>
            <img
              className="coin"
              src="https://qph.cf2.quoracdn.net/main-qimg-57e97e36918b359f28e86b8cbf567436.webp"
              alt="heads img"
            />
          </>
        )}

        {coin === "tails" && (
          <>
            <h2>Tails</h2>
            <img
              className="coin"
              src="https://coin-brothers.com/photos/United_Kingdom_(Great_Britain)_Pounds_2/2015-2017_28.04.2017_18.32_01.jpg"
              alt="tails img"
            />
          </>
        )}
      </div>

      <Button variant="primary" onClick={() => flipCoin()}>
        Flip the Coin
      </Button>
    </div>
  );
}

export default App;
