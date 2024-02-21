import React from 'react'
import Container from './Container'

const About = () => {
  document.title = "About - iWeather | Arnav Nagpurkar"
  return (
    <>
      <Container>
        <h1 className='text-blue-400 text-3xl font-bold w-full text-center'>About - iWeather</h1>
        <hr className='my-3 w-1/2 mx-auto border' />
      </Container>
    </>
  )
}

export default About
