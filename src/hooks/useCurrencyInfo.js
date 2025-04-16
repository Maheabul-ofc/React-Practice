import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchRates = async () => {
      try {
        // Using Exchange Rate API instead
        const res = await fetch(`https://open.er-api.com/v6/latest/${currency}`);
        const json = await res.json();
        setData(json.rates); // This API returns rates directly in a "rates" object
      } catch (error) {
        console.error("Failed to fetch currency info:", error);
        setData({});
      }
    };

    if (currency) {
      fetchRates();
    }
  }, [currency]);

  return data;
}

export default useCurrencyInfo;