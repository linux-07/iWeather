import React from 'react'
import Container from './Container'
import search_icon from '../assets/search.png'
import clear_img from '../assets/clear.png'
import cloud_img from '../assets/cloud.png'
import drizzle_img from '../assets/drizzle.png'
import humidity_img from '../assets/humidity.png'
import rain_img from '../assets/rain.png'
import snow_img from '../assets/snow.png'
import wind_img from '../assets/wind.png'

const Home = () => {
  document.title = "iWeather | Arnav Nagpurkar"
  return (
    <>
      <Container>
        <h1 className='text-yellow-300 text-3xl font-bold w-full text-center'>iWeather - Your Weather App</h1>
        <hr className='my-3 w-1/2 mx-auto border' />
        <div className="main text-white">
          <div className="search flex w-full justify-center items-center">
              <input type="text" className='py-4 px-7 rounded-full m-3 text-md font-normal' placeholder='Search' />
              <div className="cursor-pointer px-6 py-4 rounded-full bg-white">
                <img src={search_icon} alt="search" />
              </div>
          </div>
          <div className="weather-img my-3">
            <img src={cloud_img} alt="weather-img" className='mx-auto'/>
          </div>
          <div className="temp flex items-center justify-center text-4xl font-bold">
            24&deg;C
          </div>
          <div className="location flex items-center justify-center text-3xl font-bold my-2">
            London
          </div>
          <div className="data-container flex w-full my-10">
            <div className="element w-1/2 flex flex-col justify-center items-center">
              <img src={humidity_img} alt="" />
              <div className="data">
                <div className="humidity-percent text-xl flex justify-center items-center my-4 font-semibold">
                  69%
                </div>
                <div className="text text-xl flex justify-center items-center my-4 font-semibold">
                  Humidity
                </div>
              </div>
            </div>
            <div className="element w-1/2 flex flex-col justify-center items-center">
              <img src={wind_img} alt="" />
              <div className="data">
                <div className="wind-speed text-xl flex justify-center items-center my-4 font-semibold">
                  18 km/h
                </div>
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
