import { Droplets, Wind, Gauge, Thermometer } from "lucide-react";

const WeatherCard = ({ weather }) => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold text-center">
        {weather.name}, {weather.sys.country}
      </h2>
      <div className="flex justify-center items-center gap-2 mt-4">
        <p className="text-4xl font-bold">{Math.round(weather.main.temp)}°C</p>
        <p className="text-gray-400 capitalize">
          {weather.weather[0].description}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1.5 text-gray-400 mb-1">
            <Droplets className="w-4 h-4 text-blue-400" />
            <span>Humidity</span>
          </div>
          <p className="font-bold">{weather.main.humidity}%</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1.5 text-gray-400 mb-1">
            <Wind className="w-4 h-4 text-teal-400" />
            <span>Wind</span>
          </div>
          <p className="font-bold">{weather.wind.speed} m/s</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1.5 text-gray-400 mb-1">
            <Gauge className="w-4 h-4 text-amber-400" />
            <span>Pressure</span>
          </div>
          <p className="font-bold">{weather.main.pressure} hPa</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1.5 text-gray-400 mb-1">
            <Thermometer className="w-4 h-4 text-orange-400" />
            <span>Feels like</span>
          </div>
          <p className="font-bold">{Math.round(weather.main.feels_like)}°C</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;