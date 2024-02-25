# iWeather - Your Weather App

iWeather is a simple weather application built using React.js. It allows users to search for weather information based on the city name and displays various weather parameters such as temperature, humidity, and wind speed.

## Features

- **Search**: Users can enter the name of a city to retrieve its weather information.
- **Temperature Display**: The temperature is displayed in Celsius.
- **Humidity and Wind Speed**: Additional weather parameters like humidity percentage and wind speed are also provided.
- **Error Handling**: If a city is not found, an appropriate error message is displayed.

## Technologies Used

- **React.js**: The frontend framework used for building the application.
- **Tailwind CSS**: Utility-first CSS framework used for styling.
- **OpenWeatherMap API**: API used for fetching weather data based on the user's search query.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/arnavnagpurkar/iWeather.git
   ```

2. Navigate to the project directory:

   ```
   cd iWeather
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Set up environment variables:

   Obtain an API key from [OpenWeatherMap](https://openweathermap.org/) and add it to your environment variables file (`.env.local`) as `VITE_API_KEY`.

5. Start the development server:

   ```
   npm run dev
   ```

## Contributing

Contributions are welcome! If you'd like to contribute to this project, feel free to submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
