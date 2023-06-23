import React from "react";

export default function Header() {
    return (
        <header className="flex flex-col items-center justify-center mx-auto py-8">
            <h1 className="text-4xl sm:text-6xl font-bold text-center mb-4 text-gray-800">
                Welcome to WeatherRN
            </h1>
            <h3 className="text-2xl sm:text-4xl text-center text-gray-600">
                Discover the current weather for any city.
            </h3>
        </header>
    );
}
