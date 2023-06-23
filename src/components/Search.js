import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import axios from "axios";
import {REACT_APP_OPENCAGE_API_KEY, REACT_APP_OPENWEATHER_API_KEY} from "../constants/apis";

export default function SearchBar(props) {
    const [searchQuery, setSearchQuery] = useState("");

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
        // updates searchQuery state variable to track user's input
    };

    const handleInput = async () => {
        try {
            const geocodingEndpoint = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
                searchQuery
            )}&key=${REACT_APP_OPENCAGE_API_KEY}`;
            const responseGeo = await axios.get(geocodingEndpoint);
            const { lat, lng } = responseGeo.data.results[0].geometry;
            const weatherEndpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${REACT_APP_OPENWEATHER_API_KEY}&units=metric`;
            const responseWeather = await axios.get(weatherEndpoint);
            console.log(responseWeather.data);
            props.updateWeatherData(responseWeather.data); // pass data to the parent component
        } catch (error) {
            console.log("Error:", error.message);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleInput();
        }
    };

    return (
        <div className="w-[60%] sm:w-[500px] mx-auto my-4">
            <div className="flex items-center bg-white rounded-full shadow-md w-full">
                <input
                    type="search"
                    value={searchQuery}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Search"
                    className="focus:outline-none flex-1 py-2 px-4 text-gray-700 placeholder-gray-500 rounded-l-full border-gray-300 h-10"
                />
                <button
                    onClick={handleInput}
                    className="p-2 pr-3 bg-[#bcbcbc] hover:bg-gray-400 rounded-r-full transition-colors duration-300 h-10"
                >
                    <BsSearch className="text-white" />
                </button>
            </div>
        </div>
    );
}