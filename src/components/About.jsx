import React from 'react'
import Container from './Container'

const About = () => {
  document.title = "About - iWeather | Arnav Nagpurkar"
  return (
    <>
      <Container>
        <h1 className='text-yellow-300 text-3xl font-bold w-full text-center'>About - iWeather</h1>
        <hr className='my-3 w-1/2 mx-auto border' />
        <p className='text-white text-lg m-8'>iWeather is a simple weather application built using React.js, Tailwind CSS and OpenWeatherMap API.<br /> It allows users to search for weather information based on the city name and displays various weather parameters such as temperature, humidity, and wind speed.<br />iWeather is made by <a href="https://github.com/arnavnagpurkar" className='text-red-500 hover:text-red-400'>Arnav Nagpurkar</a> and it is open source! You can get the source code on GitHub.</p>
      </Container>
    </>
  )
}

export default About
