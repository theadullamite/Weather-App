import { useState } from "react";
import SearchBar from "./components/SearchBar";
import axios from "axios";
import WeatherCard from "./components/WeatherCard";
import VideoBackground from "../public/Background";

function App() {
  //import api from .env
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl = import.meta.env.VITE_API_URL;
 
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  //const API_KEY = import.meta.env.VITE_API_KEY;
  //create variables for your API KEY and API URL

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
      //pass setWeather with response.data
      setWeather(response.data);
    } catch (error) {
      //in the catch statement, check if error.response and its status = 404
      //then set the setError to "City not found. Please try again later"
      //else, setError to "An error ocurred. Please try again later"
      //then outside the if else statement, setWeather to null
      //and finally, setLoading to false
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-violet-100 relative overflow-hidden">
      <VideoBackground />
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
  );
}

export default App;

//create a layout and then make API request
//create a searchbar component, with an input, a button all nested within the div as the weather app title
//create a state in the searchbar component eg city, setCity so as to pass it as a value and onChange in the input
//create a weather and loading and error state in the App component and set it to null, false
//create a variable in your app component const API_KEY = import.meta.env.VITE_API_KEY;
//another variable const API_URL = `https://api.openweathermap.org/data.2.5/weather`;
//pass fetchWeather into the SearchBar component and its file to access it
//create a Weather Card component and import in the App and also check it value {weather && <WeatherCard />}, pass the weather state into it and access it in the WeatherCard component
