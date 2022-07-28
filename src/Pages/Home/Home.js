import React from 'react'
import MyPhoto from '../../Images/me.jpg'
import WpiPhoto from '../../Images/wpi.png'
import RicPhoto from '../../Images/ric.png'
import NftPhoto from '../../Images/nft.gif'
import ThinkrPhoto from '../../Images/thinkr.png'
import HatPhoto from '../../Images/hat.png'
import TimerversePhoto from '../../Images/timerverse.jpg'
import PresentPhoto from '../../Images/present.png'
import ContentDivider from '../../Components/ContentDivider/ContentDivider'
import Divider from '../../Components/SectionDivider/SectionDivider'
import { Container, ContentWrapper, Image, 
         IntroWrapper, SplitContainer,EducationSplitContainer, LeftSection, 
         RightSection, TitleText, ParagraphText, ContentImage, RoundedContentImage, SectionWrapper, LineDivider } from './Home.elements'
import ProjectHeader from '../../Components/ProjectHeader/ProjectHeader'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return ( 
    <>
    <Container>
        <ContentWrapper>
          <Image src={MyPhoto} />
          <IntroWrapper> 
            <TitleText> Hello World, I'm Justin.</TitleText>
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
            <EducationSplitContainer> 
              <LeftSection> 
                <TitleText> Graduate Degree</TitleText>
                <ParagraphText> Graduating Spring 2023 : M.S. in Computer Science & Computer Security</ParagraphText>
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
            </EducationSplitContainer>

        <LineDivider />


            <EducationSplitContainer> 
              <LeftSection> 
                <TitleText> Undergraduate Degree</TitleText>
                <ParagraphText> Graduated Spring 2021 : B.S. in Computer Science.</ParagraphText>
                <br></br>
                <ParagraphText> I started my undergraduate degree at Rhode Island College in Fall of 2018. During my time at RIC I was on the Presdient's
                  Dean's list every semester and finished with Magna Sum Laude Honors. I also worked at the Help Desk supporting students, and made great friends
                  during my time there. I look back very foundly on my time at RIC and the opportunities it provided me. 
                </ParagraphText>
                <br></br>
                <ParagraphText><b>GPA: 3.82</b></ParagraphText>
              </LeftSection>
              <RightSection> 
                <ContentImage src={RicPhoto} />
              </RightSection>
            </EducationSplitContainer>
          </SectionWrapper>
        </ContentWrapper>

      <ContentDivider />

        <ContentWrapper>
          <SectionWrapper>
          <SplitContainer>
            <LeftSection>
              <ProjectHeader numberText={"01"} titleText={"Virtual Hat"}/>
                <ParagraphText>
                In 2012 I learned to program on my own. I first learned with C then moved to Objective-C to create my first
                application, Virtual Hat. It was released on the iOS App Store in September of 2013. Every few years I return to update it
                in order to learn some of the new technologies Apple introduces inside their frameworks. In 2020, I rewrote the App using Swift and SwiftUI and 
                I'm currently considering doing another big revision to bring it up to date.
                </ParagraphText>
            </LeftSection>
            <RightSection>
              <ContentImage src={HatPhoto}/>
            </RightSection>
          </SplitContainer>

          <SplitContainer>
            <LeftSection>
              <ProjectHeader numberText={"02"} titleText={"Timerverse"}/>
                <ParagraphText>
                In early 2014 I worked with my best friend Larry Ryan to create a timer app for iPhone that encompassed both our design values. We both love everything
                about time and space, so we worked incredibly hard to bring those elements into the application. It launched on the App Store in September of 2014
                and saw over 100,000 downloads. We also started a company called Thinkr in the same year which was a great learning expierence in itself. This was without a doubt, the
                good old days.
                </ParagraphText>
            </LeftSection>
            <RightSection>
            <RoundedContentImage src={TimerversePhoto}/>
            </RightSection>
          </SplitContainer>

          <SplitContainer>
            <LeftSection>
              <ProjectHeader numberText={"03"} titleText={"The Present"}/>
                <ParagraphText>
                Having been inspired by a kickstarter project by Scott Thrift, In 2020 I created a free application for iPhone that would give people the same great experience
                by providing them with clock widgets for their iOS home screen. The Present - Day Moon Year is about keeping time, but staying in the moment. The Year clock completes
                one rotation per year and centers ones self in the moment, instead of feeling the pressure of time passing us by.
                </ParagraphText>
            </LeftSection>
            <RightSection>
            <ContentImage src={PresentPhoto}/>
            </RightSection>
          </SplitContainer>

          <SplitContainer>
            <LeftSection>
              <ProjectHeader numberText={"04"} titleText={"Thinkr Labs"}/>
                <ParagraphText>
                In early 2022, a group of friends I met during my time in college and myself set out to create a company called Thinkr Labs, with the name being inspired by my previous company. The north star of the company
                is to disrupt higher education and provide students with affordable, accessible, and quality education. Serving as the product manager and lead programmer, we created a web
                site using ReactJS, and developed Ethereum smart contracts using the Solidity programming language. If you interested in learning more about our mission, visit the website: <a href="https://thinkr.online">www.thinkr.online</a>
                </ParagraphText>
            </LeftSection>
            <RightSection>
              <ContentImage src={ThinkrPhoto} />
            </RightSection>
          </SplitContainer>

          <SplitContainer>
            <LeftSection>
              <ProjectHeader numberText={"05"} titleText={"Thinkrs NFTs"}/>
                <ParagraphText>
                In order for Thinkr Labs to accomplish our goal of providing underprivileged students with a scholarship and stipend, we created a NFT collection to raise money for the cause.
                The artwork was done by two incredibly talented members of our team. The Thinkrs NFT collection went on sale August 1st and I couldn't be happier with all
                the hard work everyone put in to make it happen. The entire journey to this NFT collection was rewarding and I've learned more about what it takes to run a succesful company
                that contains different teams. I'm really proud of everyone.
                </ParagraphText>
            </LeftSection>
            <RightSection>
              <ContentImage src={NftPhoto}/>
            </RightSection>
          </SplitContainer>

          </SectionWrapper>
        </ContentWrapper>

        <ContentDivider />

        <ContentWrapper>
          <Footer />
        </ContentWrapper>


    </Container>
    </>
  )
}

export default Home