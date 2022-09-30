import styles from "./CoinTracker.module.css";

import { useEffect, useState } from "react";

function CoinTracker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  const getCoins = async () => {
    const json = await (
      await fetch(`https://api.coinpaprika.com/v1/tickers`)
    ).json();
    const top16 = json.slice(0, 16);
    setCoins(top16);
    setLoading(false);
  };

  useEffect(() => {
    getCoins();
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <ul className={styles.ul}>
          <h1> "LOADING..."</h1>
        </ul>
      ) : (
        <ul className={styles.ul}>
          {coins.map((coin, index) => (
            <li className={styles.li} key={index}>
              <div className={styles.header}>
                <div>
                  <span>{coin.name}</span>
                  <span>({coin.symbol})</span>
                </div>

                <span>#{coin.rank}</span>
              </div>
              <div className={styles.priceInfo}>
                <span>{coin.quotes.USD.price.toFixed(3)}</span>
                {JSON.stringify(coin.quotes.USD.percent_change_15m).includes(
                  "-"
                ) ? (
                  <span className={styles.blue}>
                    {coin.quotes.USD.percent_change_15m}
                  </span>
                ) : (
                  <span className={styles.red}>
                    {coin.quotes.USD.percent_change_15m}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CoinTracker;
