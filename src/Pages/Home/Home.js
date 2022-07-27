import React from 'react'
import MyPhoto from '../../Images/me.jpg'
import WpiPhoto from '../../Images/wpi.png'
import RicPhoto from '../../Images/ric.png'

import Divider from '../../Components/SectionDivider/SectionDivider'
import { Container, ContentWrapper, Image, 
         IntroWrapper, SplitContainer, LeftSection, 
         RightSection, TitleText, ParagraphText, ContentImage, SectionWrapper } from './Home.elements'

const Home = () => {
  return ( 
    <>
    <Container>
        <ContentWrapper>
          <Image src={MyPhoto} />
          <IntroWrapper> 
            <TitleText> Hello, I'm Justin Cabral.</TitleText>
            <ParagraphText> I'm a <u>programmer</u>, <u>designer</u>, <u>gamer</u>, and lover of all things <u>technology</u>. </ParagraphText>
            <br></br>
            <ParagraphText>I have 10 years' of experience programming and designing software. Everything from creating apps for the iPhone, to making websites and more. I strongly believe
            that if you put enough love into something you create, whoever ends up using it or seeing what you've made will inheritly feel that passion. Which is why whenever I set out
            to create something, I want it to be a reflection of who I am and my values.
          </ParagraphText>
          </IntroWrapper>
        </ContentWrapper>

        <Divider />

        <ContentWrapper>
          <SectionWrapper>
            <SplitContainer> 
              <LeftSection> 
                <TitleText> Graduate Degree</TitleText>
                <ParagraphText> Graduating Spring 2023 :: M.S. in Computer Science</ParagraphText>
                <br></br>
                <ParagraphText> I started graduate school at Worcestor Polytechnic Institute in Fall of 2021 and was selected as a CyberCorps: Scholarship 
                  For Service award winner. The SFS program is a nationally recognized award for the top students in security related fields. I was selected by a panel of 
                  WPI faculty and staff to receive this highly competitive federal scholarship funded by the U.S. Congress through the 
                  National Science Foundation.
                </ParagraphText>
                <br></br>
                <ParagraphText><b>GPA: 4.0</b></ParagraphText>
              </LeftSection>
              <RightSection> 
                <ContentImage src={WpiPhoto} />
              </RightSection>
            </SplitContainer>

            <SplitContainer> 
              <LeftSection> 
                <TitleText> Undergraduate Degree</TitleText>
                <ParagraphText> Graduated Spring 2021 :: B.S. in Computer Science.</ParagraphText>
                <br></br>
                <ParagraphText> I started my undergraduate degree at Rhode Island College in Fall of 2018. During my time at RIC I was on the Presdient's
                  Dean list every semester and finished with Magna Sum Laude Honors. I also worked at the Help Desk supporting students, and made great friends
                  during my time there. I look back very foundly on my time at RIC and the opportunities it provided me. 
                </ParagraphText>
                <br></br>
                <ParagraphText><b>GPA: 3.82</b></ParagraphText>
              </LeftSection>
              <RightSection> 
                <ContentImage src={RicPhoto} />
              </RightSection>
            </SplitContainer>
          </SectionWrapper>
        </ContentWrapper>

    </Container>
    </>
  )
}

export default Home