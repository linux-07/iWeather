import React from 'react'
import Container from './Container'

const About = () => {
  document.title = "About - iWeather | Arnav Nagpurkar"
  return (
    <>
      <Container>
        <h1 className='text-yellow-300 text-3xl font-bold w-full text-center'>About - iWeather</h1>
        <hr className='my-3 w-1/2 mx-auto border' />
        <p className='text-white text-lg m-8'>A weather app made by <a className='text-red-500 hover:text-red-400' href="https://github.com/arnavnagpurkar" target='_blank'>Arnav Nagpurkar</a> using react js, tailwind css and openweathermap's API.<br />This is a open source project. Source code is uploaded on github!</p>
      </Container>
    </>
  )
}

export default About
