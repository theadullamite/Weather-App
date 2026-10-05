import VideoBackground from "../../public/Background"


const WeatherCard = ({ weather }) => {
    return (
        <div className="mt-6">
           <h2 className="text-2xl font-semibold text-center">{weather.name}, {weather.sys.country}</h2>
           <div className="flex justify-center items-center mt-4">
            <VideoBackground />
            <p className="text-4xl font-bold">{Math.round(weather.main.temp)}</p>
            <p className="text-center text-gray-400 capitalize">{weather.weather[0].description}</p>
           </div>
           <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="text-center">
                <p className="text-gray-400">Humidity</p>
                <p className="font-bold">{weather.main.humidity}%</p>
            </div>
            <div className="text-center">
                <p className="text-gray-400">Wind</p>
                <p>{weather.wind.speed}m/s</p>
            </div>
            <div className="text-center">
                <p className="text-gray-400">Pressure</p>
                <p className="font-bold">{weather.main.pressure}hPa</p>
            </div>
            <div className="text-center">
                <p className="text-gray-400">Feels like</p>
                <p>{Math.round(weather.main.feels_like)}hPa</p>
            </div>
           </div>
        </div>
    )
}

export default WeatherCard