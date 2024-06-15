import React from 'react'
import './Hero.css'
import Navbar from '../Navbar/Navbar'
import profile_img from '../../assets/cropped prof pic.jpg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" className="profile-img" />
        <h1><span>I am Hasintha Dilshan,</span> SE Undergraduate at SLIIT. </h1>
        <p>I am a software engineering undergraduate from SLIIT. I mainly focused o java and additionally I am
            enthusiastic about IoT.
        </p>
        <div className="hero-action">
            <div className='hero-connect'>Connect with me</div>
            <div >//</div>
            <div className='hero-resume'>My Resume</div>
        </div>
      
    </div>
  )
}
//test commit from working local

export default Hero
