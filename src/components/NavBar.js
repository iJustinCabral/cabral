import React from 'react'
import { Link } from 'react-router-dom'
import ProfilePic from '../Images/me.jpg'

const NavBar = () => {
  return (
    <>
      <div className="header-section">
        <div className="header-frame">
          <h1>Justin Cabral</h1>
          <h2>Software Engineer<br />living in Rhode Island</h2>
        </div>

        <div className="img-frame">
          <img id="profile-pic" src={ProfilePic} alt="" />
        </div>
      </div>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/timeline">Timeline</Link>
        <Link to="/projects">Projects</Link>
        <a href="https://x.com/iJustinCabral" target="_blank" rel="noopener noreferrer">X</a>
        <a href="https://github.com/iJustinCabral" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/justin-cabral-2272a623/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </>
  )
}

export default NavBar