import React from 'react'
import MyPhoto from '../../Images/me.jpg'
import WpiPhoto from '../../Images/wpi.png'
import RicPhoto from '../../Images/ric.png'
import NftPhoto from '../../Images/nft.gif'
import ThinkrPhoto from '../../Images/thinkr.png'
import HatPhoto from '../../Images/hat.png'
import TimerversePhoto from '../../Images/timerverse.jpg'
import VitalPhoto from '../../Images/Vital.png'
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
                <ParagraphText> Graduated May 2023 : M.S. in Computer Sciencey</ParagraphText>
                <br></br>
                <ParagraphText> I started graduate school at Worcestor Polytechnic Institute in Fall of 2021 and was selected as a CyberCorps: Scholarship 
                  For Service award winner. The SFS program is a nationally recognized award for the top students in security related fields. I was selected by a panel of 
                  WPI faculty and staff to receive this highly competitive federal scholarship funded by the U.S. Congress through the 
                  National Science Foundation. 
                </ParagraphText>
                <br></br>
                <ParagraphText><b>GPA: 3.9</b></ParagraphText>
              </LeftSection>
              <RightSection> 
                <ContentImage src={WpiPhoto} />
              </RightSection>
            </EducationSplitContainer>

        <LineDivider />


            <EducationSplitContainer> 
              <LeftSection> 
                <TitleText> Undergraduate Degree</TitleText>
                <ParagraphText> Graduated May 2021 : B.S. in Computer Science.</ParagraphText>
                <br></br>
                <ParagraphText> I started my undergraduate degree at Rhode Island College in Fall of 2018. During my time at RIC I started its first ever Software Engineering Club and I also worked at the Help Desk supporting students, faculty and staff. I made great friends
                  during my time there and I look back very foundly on my time at RIC and the opportunities it provided me. 
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
                In 2012 I learned to program on my own with the help of great books from The Big Nerd Ranch. I first learned with C then moved to Objective-C to create my first
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
                one rotation per year and centers ones self in the moment, instead of feeling the pressure of time passing us by. This was a passion project done during school to keep sharp 
                on my coding skills.
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
                In early 2022, a group of friends I met during my time in college, amazing artists from RISD, and myself set out to create a company called Thinkr Labs, with the name being inspired by my previous company. The north star of the company
                was to provide scholarships to underprivileged students which would help them attain undergraduate or graduate degrees debt free. It was to be modeled after a similar program I was forunte enough to be part of at WPI. Serving as the product manager and lead programmer, we created a web
                site using ReactJS, and developed Ethereum smart contracts using the Solidity programming language. Though we came up short on our goals, the learning experience was well worth the effort. Website repository can be visted here: <a href="https://github.com/iJustinCabral/thinkr-website">GitHub Repo</a>
                </ParagraphText>
            </LeftSection>
            <RightSection>
              <ContentImage src={ThinkrPhoto} />
            </RightSection>
          </SplitContainer>

          <SplitContainer>
            <LeftSection>
              <ProjectHeader numberText={"05"} titleText={"Thinkr NFTs"}/>
                <ParagraphText>
                In order for Thinkr Labs to try and accomplish our goal of providing underprivileged students with a scholarship and stipend, we created a NFT collection to raise money for the cause.
                The artwork was done by two incredibly talented members of our team. The Thinkrs NFT collection went on sale August 1st, 2022 and I couldn't be happier with all
                the hard work everyone put in to make it happen. The entire journey to this NFT collection was rewarding and I learned a lot more about what it takes to build a product
                that contains different teams contributing. I'm really proud of everyone even though we didn't meet our sales expectations.
                </ParagraphText>
            </LeftSection>
            <RightSection>
              <ContentImage src={NftPhoto}/>
            </RightSection>
          </SplitContainer>

          <SplitContainer>
            <LeftSection>
              <ProjectHeader numberText={"06"} titleText={"Vital - Step Counter"}/>
                <ParagraphText>
                After the 6 year journey to getting my masters degree, I felt I could finally focus on what I loved doing most. Buildings things that I find useful, and hopefully others do too. Vital is an iOS 
                app that tracks your steps, floors climbed, distance walked, and more. It's 100% free, and it became available in September 2023 for iOS 17. This app was the start of a brand new journey 
                for me as a developer. I'm now working to release apps that focus on new areas of intrest to me, which also contritube to building up my knowledge of Apple's frameworks and improving my overall skill as a designer/programmer.
                Vital can be downloaded from the app store here: <a href="https://apps.apple.com/us/app/vital-step-counter/id6451499273">Vital - Step Counter</a>
                </ParagraphText>
            </LeftSection>
            <RightSection>
              <RoundedContentImage src={VitalPhoto}/>
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