import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import Hero2 from "../components/Hero2"
import Price from "../components/Price"
import Work from "../components/Work"
const Project = () => {
  return (
    <div>
      <Navbar/>
      <Hero2 heading="PROJECTS." text="some of the most recent works"/>
      <Price/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project
