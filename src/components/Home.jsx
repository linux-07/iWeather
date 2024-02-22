import React from 'react'
import Container from './Container'
import search_icon from '../assets/search.png'
import cloud_img from '../assets/cloud.png'
import humidity_img from '../assets/humidity.png'
import wind_img from '../assets/wind.png'
import toTitleCase from '../titleCase'


const Home = () => {
  document.title = "iWeather | Arnav Nagpurkar";

  const API_KEY = import.meta.env.VITE_API_KEY;

  const search = async () => {
    const element = document.querySelector("#searchInput");
    const elementValue = element.value.toTitleCase()
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${elementValue}&appid=${API_KEY}`;
    let response = await fetch(url);
    let data = await response.json();
    if (data.message === 'city not found') {
      document.querySelector("#not-found").classList.remove("hidden");
    }
    else {
      const humidityPercent = document.querySelector("#humidity-percent");
      const windSpeed = document.querySelector("#wind-speed");
      const location = document.querySelector("#location");
      const tempElement = document.querySelector("#temp");
      const celsiusTemp = (data.main.temp - 273.15).toFixed(2); // Convert temperature from Kelvin to Celsius

      location.innerHTML = elementValue;
      tempElement.innerHTML = `${celsiusTemp}&deg;C`;
      humidityPercent.innerHTML = `${data.main.humidity}%`;
      windSpeed.innerHTML = `${data.wind.speed} km/h`;
    };
    element.value = ''
  }

  return (
    <>
      <Container>
        <h1 className='text-yellow-300 text-3xl font-bold w-full text-center'>iWeather - Your Weather App</h1>
        <hr className='my-3 w-1/2 mx-auto border' />
        <div className="main text-white">
          <div className="search flex w-full justify-center items-center">
            <input onKeyDown={(key) => { key.code === 'Enter' && search() }} type="text" className='text-black py-4 px-7 rounded-full m-3 text-md font-normal' id='searchInput' placeholder='Search' />
            <div onClick={() => { search() }} className="cursor-pointer px-6 py-4 rounded-full bg-white">
              <img src={search_icon} alt="search" />
            </div>
          </div>
          <div id="not-found" className='text-2xl font-bold text-red-500 flex items-center justify-center my-2 hidden'>
            City not Found !!
          </div>
          <div className="weather-img my-3">
            <img src={cloud_img} alt="weather-img" className='mx-auto' />
          </div>
          <div id='temp' className="flex items-center justify-center text-4xl font-bold"></div>
          <div id='location' className="flex items-center justify-center text-3xl font-bold my-2"></div>
          <div className="data-container flex w-full my-10">
            <div className="element w-1/2 flex flex-col justify-center items-center">
              <img src={humidity_img} alt="" />
              <div className="data">
                <div id='humidity-percent' className="text-xl flex justify-center items-center my-4 font-semibold"></div>
                <div className="text text-xl flex justify-center items-center my-4 font-semibold">
                  Humidity
                </div>
              </div>
            </div>
            <div className="element w-1/2 flex flex-col justify-center items-center">
              <img src={wind_img} alt="" />
              <div className="data">
                <div id='wind-speed' className="text-xl flex justify-center items-center my-4 font-semibold"></div>
                <div className="text text-xl flex justify-center items-center my-4 font-semibold">
                  Wind Speed
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Home
