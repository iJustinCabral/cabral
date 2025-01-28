import React from 'react'
import './Timeline.css'
import ProfilePic from '../../Images/me.jpg'
import Volpe from '../../Images/volpe.png'
import WPI from '../../Images/wpi.png'
import NavSea from '../../Images/navsea.png'
import RIC from '../../Images/ric.png'
import Thinkr from '../../Images/thinkr.png'
import BigNerd from '../../Images/big-nerd.png'
import { Link } from 'react-router-dom'


const Timeline = () => {
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
                    <a href="https://justincabral.substack.com/" target=' _blank'>Blog</a>
                    <a href="https://x.com/iJustinCabral" target=' _blank'>X</a>
                    <a href="https://github.com/iJustinCabral" target=' _blank'>GitHub</a>
                    <a href="https://www.linkedin.com/in/justin-cabral-2272a623/" target=' _blank'>LinkedIn</a>
                </div>

                <hr></hr>

                <div class="history">
                    <div class="entry row">
                        <div class="timespan"> 2023-Now</div>
                        <div class="ico">
                            <div class="entry-dot"></div>
                            <img src={Volpe} alt=""></img>
                        </div>

                        <div class="desc">
                            In June of 2023 after graduating from WPI, I joined Volpe National Transporation Systems. I'm a Computer Scientist
                            in the Advanced Vehicle Technology division known internally as V-337. I'm currently working on tasks that cover software engineering, data science
                            and cybersecurity.
                            <p></p>
                        </div>
                    </div>

                    <div class="entry row">
                        <div class="timespan"> 2022</div>
                        <div class="ico">
                            <div class="entry-dot"></div>
                            <img src={NavSea} alt=""></img>
                        </div>

                        <div class="desc">
                            In May 2022 to July 2022 I interned at the Nav Sea Warefare Center in Newport, Rhode Island. During my internship I worked on
                            binary disassembly, improving research tools using docker containers, and built custom hardened linux kernels. 
                            <p></p>
                        </div>
                    </div>

                    <div class="entry row">
                        <div class="timespan"> 2021-2023</div>
                        <div class="ico">
                            <div class="entry-dot"></div>
                            <img src={WPI} alt=""></img>
                        </div>

                        <div class="desc">
                            In May of 2023 I graduated with a Masters of Science in Computer Science from Worcestor Polytechnic Institute. I also had
                            the distint honor of being part of the national CyberCorps: Scholarship for Service program.
                            <p></p>
                        </div>
                    </div>

                    <div class="entry row">
                        <div class="timespan"> 2018-2021</div>
                        <div class="ico">
                            <div class="entry-dot"></div>
                            <img src={RIC} alt=""></img>
                        </div>

                        <div class="desc">
                            In May 2021 I gradudated from Rhode Island College with a Bachelors of Science in Computer Science. I look back foundly at my time here because
                            I met some great friends and worked in the I.T. department helping students.
                            <p></p>
                        </div>
                    </div>

                    <div class="entry row">
                        <div class="timespan"> 2013-2018</div>
                        <div class="ico">
                            <div class="entry-dot"></div>
                            <img src={Thinkr} alt=""></img>
                        </div>

                        <div class="desc">
                            In 2013 I dropped out of Community College in Rhode Island and co-founded a company called Thinkr with a close friend to focus on building application for Apple platforms. These are 
                            what I consider the good ole days. We focused on buildling things for the love of craftsmanship and art, while bringing our own culture into the products we made. 
                            Though the company only lasted 5 years, this was the most invaulable experience I've ever had when it comes to building and learning. If there's a reason why I love programming and
                            design, my time spent here would be it.
                            
                            <p></p>
                        </div>
                    </div>

                    <div class="entry row">
                        <div class="timespan"> 2008-2012</div>
                        <div class="ico">
                            <div class="entry-dot"></div>
                            <img src={BigNerd} alt=""></img>
                        </div>

                        <div class="desc">
                            When the iPhone receieved the update for the App Store in 2008 I knew what I wanted to do for the rest of my life, and that was to design and program software. I read numerous
                            books from Big Nerd Ranch encompassing C, Objective-C and everything about Apple's framworks. With many thanks to Aaron Hillegass for providing the material, I
                            was able to reach my goal and become a self taught computer programmer. To say the iPhone and these books changed the course of my life would be an understatement. 
                        </div>
                    </div>


                </div>

            </div>
        </body>
    </>
  )
}

export default Timeline
