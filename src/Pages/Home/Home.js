import React from 'react'
import MyPhoto from '../../Images/me.jpg'
import Divider from '../../Components/SectionDivider/SectionDivider'
import { Container, ContentWrapper, ImageWrapper, Image, GreetingsTextWrapper, IntroWrapper, AboutMeTextWrapper } from './Home.elements'

const Home = () => {
  return ( 
    <>
    <Container>
        <ContentWrapper>
          <Image src={MyPhoto} />
          
          <IntroWrapper> 
            <GreetingsTextWrapper> Hello, I'm Justin Cabral.</GreetingsTextWrapper>
            <AboutMeTextWrapper> I'm a <u>programmer</u>, <u>designer</u>, <u>gamer</u>, and lover of all things <u>technology</u>. </AboutMeTextWrapper>
            <br></br>
            <AboutMeTextWrapper>I have 10 years' of experience programming and designing software. Everything from creating apps for the iPhone, to creating websites and more. I strongly believe
            that if you put enough love into something you create, whoever ends up using it or seeing what you've made will inheritly feel that passion. Which is why whenever I set out
            to create something, I want it to be a reflection of who I am.
          </AboutMeTextWrapper>
          </IntroWrapper>

        </ContentWrapper>

        <Divider />

        <ContentWrapper>
          <h1>My Education</h1>
        </ContentWrapper>

    </Container>
    </>
  )
}

export default Home