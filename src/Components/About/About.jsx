import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/cropped prof pic.jpg'
const About = () => {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt=""/>
      </div>
      <div className='about-sections'>
        <div className="about-left">
            <img src={profile_img} alt="" className='about-profile-img'/>
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am experienced web developer using technologies like MERN Stack , Java servelets , PHP and also I have intergrated
                    IoT systems into my projects.
                </p>
                <p>I will hope to explore more about software engineering merged with IoT and planning to extend my knowledge into
                    AI + IoT + Software systems.
                </p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>MERN Stack</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>IoT</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>Java</p><hr style={{width:"50%"}} /></div>
            </div>
        </div>        
      </div>
      <div className="about-achievements">
            <div className="about-achievement">
                <h1>10+</h1>
                <p>Years Of Experience</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>90+</h1>
                <p>Projects Completed</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>2</h1>
                <p>Dean's List Certifications</p>
            </div>
            
        </div>
    </div>
  )
}

export default About
