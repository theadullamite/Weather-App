import { useState } from "react";
import SearchBar from "./components/SearchBar";
import axios from "axios";
import WeatherCard from "./components/WeatherCard";
import VideoBackground from "./components/Background";

function App() {
  //import api from .env
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl = import.meta.env.VITE_API_URL;

  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  //create an async fetchweather function with city as a parameter and import axios to fetch your api....pass the function as a prop into the SearchBar Component
  //set setLoading as true, and setError as empty
  const fetchWeather = async (city) => {
    setLoading(true);
    setError("");

    //use try and catch error handlers to fetch your url
    try {
      const url = `${apiUrl}?q=${city}&units=metric&appid=${apiKey}`;
      const response = await axios.get(url);
      console.log(response.data);
      //parse setWeather with response.data
      setWeather(response.data);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError("City not found. Please try again later.");
      } else {
        setError("An error occured. Please try again later.");
      }
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <VideoBackground />
      <div className="min-h-screen flex flex-col items-center justify-center bg-violet-100 relative overflow-hidden">
        <div className="bg-black/70 text-white rounded-lg p-8 shadow-lg max-w-md w-full z-10">
          <h1 className="text-3xl font-bold text-center mb-6">Weather App</h1>
          <SearchBar fetchWeather={fetchWeather} />
          {/* check if loading is true */}
          {loading && <p className="text-center mt-6">Loading...</p>}
          {/* check the error state */}
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
          {/* check the weather state and pass weather as prop into the weather component */}
          {weather && <WeatherCard weather={weather} />}
        </div>
      </div>
    </div>
  );
}

export default App;
