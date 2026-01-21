import { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import video from "./video.mp4";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";

  const fetchWeather = async (city) => {
    
    if (!API_KEY) {
      setError("API key not found. Restart server and check .env file.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.get(API_URL, {
        params: {
          q: city,
          units: "metric",
          appid: API_KEY,
        },
      });

      setWeather(response.data);
    } catch (err) {
      if (err.response?.status === 404) {
        setError("City not found. Please try again.");
      } else if (err.response?.status === 401) {
        setError("Invalid API key. Wait 10–15 minutes after creating key.");
      } else {
        setError("Something went wrong. Try again later.");
      }
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={video} type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      <div className="bg-black/70 text-white rounded-lg shadow-lg p-8 max-w-md w-full z-10">
        <h1 className="text-3xl font-bold text-center mb-6">Weather App</h1>

        <SearchBar fetchWeather={fetchWeather} />

        {loading && <p className="text-center mt-4">Loading...</p>}
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        {weather && <WeatherCard weather={weather} />}
      </div>
    </div>
  );
}

export default App;
