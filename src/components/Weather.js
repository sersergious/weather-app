import React from "react";

export default function Weather(props) {
    const { weatherData } = props;

    if (!weatherData || Object.keys(weatherData).length === 0) {
        // Handle the case when weather data is not available or not yet fetched
        return (
            <div className="flex justify-center w-full my-8">
                <p>Loading weather data...</p>
            </div>
        );
    }

    const weather = weatherData.weather[0];

    return (
        <div className="flex justify-center w-full my-8">
            <div className="bg-blue-100 bg-opacity-75 w-[20rem] h-[18rem] sm:w-[28rem] sm:h-80 rounded-xl shadow-md p-8 flex flex-col items-center justify-center">
                <div className="flex items-center justify-center mb-4">
                    <img
                        src={`http://openweathermap.org/img/w/${weather.icon}.png`}
                        alt="Weather Icon"
                        className="w-24 h-24"
                    />
                </div>
                <p className="text-4xl font-bold">{Math.round(weatherData.main.temp)}°C</p>
                <p className="text-lg text-gray-500 capitalize">{weather.description}</p>
                <p className="text-lg text-gray-500 mt-2">{weatherData.name}</p>
            </div>
        </div>

    );
}
