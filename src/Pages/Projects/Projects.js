import React from 'react'
import './Projects.css'
import { Link } from 'react-router-dom'
import ProfilePic from '../../Images/me.jpg'
import Vital from '../../Images/Vital.png'
import NFT from '../../Images/nft.gif'
import Present from '../../Images/present.png'
import Timerverse from '../../Images/timerverse.jpg'
import Hat from '../../Images/hat.png'

const Projects = () => {
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
            <Link to="/">Home</Link>
            <Link to="/timeline">Timeline</Link>
            <Link to="/projects">Projects</Link>
            <a href="https://x.com/iJustinCabral/articles" target=' _blank'>Articles</a>
            <a href="https://x.com/iJustinCabral" target=' _blank'>X</a>
            <a href="https://github.com/iJustinCabral" target=' _blank'>GitHub</a>
            <a href="https://huggingface.co/ijustincabral" target=' _blank'>Hugging Face</a>
            <a href="https://www.linkedin.com/in/justin-cabral-2272a623/" target=' _blank'>LinkedIn</a>
           </div>
          
          <hr></hr>

         
          <div class="ctitle"> My Projects</div>

          <div class="project">
            <div class="pico">
              <img src={Vital} alt=""></img>
            </div>
            <div class="pdesc">
                <a href="https://apps.apple.com/us/app/vital-step-counter/id6451499273">Vital</a> is an iOS 
                app that tracks your steps, floors climbed, distance walked, and more. It's 100% free  and it became available in September 2023 for iOS 17. 
                This app was the start of a brand new journey for me as a developer where I'm focusing on buidling things I find enjoyable to create.
                
            </div>
            <div class="pend"></div>
            <hr></hr>
          </div>

          <div class="project">
            <div class="pico">
              <img src={NFT} alt=""></img>
            </div>
            <div class="pdesc">
                The <a href="https://opensea.io/collection/thinkrs">Thinkrs NFT</a> collection went on sale August 1st, 2022 to help raise money to fund a college scholarship for a student and I couldn't be happier with all
                the hard work everyone put in to make it happen. The entire journey to this NFT collection was rewarding and I'm really proud of everyone on the team who helped create it, even though we didn't meet our sales expectations.
                
            </div>
            <div class="pend"></div>
            <hr></hr>
          </div>

          <div class="project">
            <div class="pico">
              <img src={Present} alt=""></img>
            </div>
            <div class="pdesc">
                Having been inspired by a kickstarter project by Scott Thrift, in 2020 I created a free application for iPhone. 
                <a href='https://apps.apple.com/us/app/the-present-day-moon-year/id1545231545'>The Present - Day Moon Year</a> is about keeping time, but staying in the moment. The Year clock completes
                one rotation per year and centers ones self in the moment, instead of feeling the pressure of time passing us by. 
                
            </div>
            <div class="pend"></div>
            <hr></hr>
          </div>

          <div class="project">
            <div class="pico">
              <img src={Timerverse} alt=""></img>
            </div>
            <div class="pdesc">
                In early 2014 I worked with my best friend to create a timer app called Timerverse for iPhone that encompassed both our design values. We both love everything
                about time and space, so we worked incredibly hard to bring those elements into the application. It launched on the App Store in September of 2014
                and saw over 100,000 downloads.  This was without a doubt, the good ole days.
            </div>
            <div class="pend"></div>
            <hr></hr>
          </div>

          <div class="project">
            <div class="pico">
              <img src={Hat} alt=""></img>
            </div>
            <div class="pdesc">
                 Having learned to program on my own with the help of great books from The Big Nerd Ranch. I first learned with C then moved to Objective-C to create my first
                application, Virtual Hat. It was released on the iOS App Store in September of 2013. Every few years I return to update it
                in order to learn some of the new technologies Apple introduces inside their frameworks.
            </div>
            <div class="pend"></div>
            <hr></hr>
          </div>
          

      </div>
    </body>
    </>
  )
}

export default Projects