import "./App.css";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import { useEffect, useState } from "react";
import type { AlertCountResponse } from "./types";
import axios, { type AxiosResponse } from "axios";
import Login from "./Login";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [alerts, setAlerts] = useState<AlertCountResponse>({
    total: 0,
    land: 0,
    marine: 0,
  });
  const [isWeatherLoading, setIsWeatherLoading] = useState<Boolean>(false);
  const [hasLoadedWeather, setHasLoadedWeather] = useState<Boolean>(false);
  const WEATHER_API_BASE = "https://api.weather.gov";
  const WEATHER_API_ALERTS_COUNT = "/alerts/active/count";

  const loadWeatherData = () => {
    setIsWeatherLoading(true);
    axios
      .get(`${WEATHER_API_BASE}${WEATHER_API_ALERTS_COUNT}`)
      .then((response: AxiosResponse) => response.data as AlertCountResponse)
      .then((data) => setAlerts(data))
      .catch((error) => console.error("Error fetching alerts:", error))
      .finally(() => {
        setIsWeatherLoading(false);
        setHasLoadedWeather(true);
      });
  };

  const handleLogin = (userName: string) => {
    setName(userName);
    setIsLoggedIn(true);
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <h2>Hello {name}!</h2>
      )}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>

      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <h3>Weather Alerts</h3>
      {!hasLoadedWeather ? (
        <button onClick={loadWeatherData} disabled={isWeatherLoading}>
          {isWeatherLoading ? "Loading..." : "Load Weather Data"}
        </button>
      ) : (
        <p>
          Right now there are {alerts?.total} weather alerts reported by the United States National Weather Service.{" "}
          {alerts.land} are on land and {alerts.marine} are on sea.
        </p>
      )}
    </>
  );
}

export default App;
