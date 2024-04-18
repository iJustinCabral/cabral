import React from 'react'
import './Home.css'
import ProfilePic from '../../Images/me.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
  return ( 
    <>
    <body class="">
    <div class="container">
        <div class="header-section">

          <div class="header-frame">
            <h1>Justin Cabral</h1>
            <h2>Computer Scientist living in Rhode Island</h2>
          </div>

          <div class="img-frame">
            <img id="profile-pic" src={ProfilePic} alt=""></img>
          </div>

        </div>

        <div class="links">
          <a href="https://x.com/iJustinCabral/articles">Articles</a>
          <Link to="/timeline">My Timeline</Link>
          <Link to="/projects">Projects</Link>
          <a href="https://x.com/iJustinCabral">X</a>
          <a href="https://github.com/iJustinCabral">GitHub</a>
          <a href="https://huggingface.co/ijustincabral">Hugging Face</a>
          <a href="https://www.linkedin.com/in/justin-cabral-2272a623/">LinkedIn</a>
        </div>
        
        <div class="bio">
          <h3> Hello world,</h3>
          <p>My name is Justin and my passion in life is personal computers. From my first interaction with an IBM PC at my
          vovo's house, to finally getting my own PC in 1999, I've been in love with computers and technology ever since.
          I have fond memories of using an Apple II during my elementry school years and thinking that it must be magic making
          it work. However, it wasn't until I grew older and used the first iPhone in 2007 that I became enamored with programming and design.</p>

          <p>For the first time, I felt the love and dedication of the people who made a product without ever knowing them. It showed me
            that a personal computer is more than just bytes and bits, but a tool that is made for everyone. From that point on I taught
            myself how to program by reading books on C and Objective-C from Big Nerd Ranch. I then went on to start an app company with a friend, and
            even went back to college where I graduated with a M.S. degree in computer science from WPI. 
          </p>

          <p>I will forever stay hungry, and stay foolish.</p>
          <p>-justin</p>

          
        </div>

    </div>
    </body>
    </>
  )
}

export default Home