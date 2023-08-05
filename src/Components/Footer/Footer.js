import React from 'react'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FooterContainer, FooterSubHeading, FooterSubscription, FooterSubText, 
    SocialIconLink, SocialLogo, SocialMedia, SocialMediaWrap, ThinkrIcon, 
    WebsiteRights, SocialIcons, XIconImg} from './Footer.elements';
import XIcon from '../../Images/TwitterX.png'

const Footer = () => {
  return (
    <>
        <SocialMedia>
            <SocialMediaWrap>
                
                <WebsiteRights>
                    Website Created by Justin Cabral. 
                    <br></br>
                    Stay Hungry. Stay Foolish.
                </WebsiteRights>

                <SocialIcons>
                    <SocialIconLink href='https://twitter.com/iJustinCabral' target='_blank' aria-label='Twitter'>
                        <XIconImg  src={XIcon}/>
                    </SocialIconLink>

                    <SocialIconLink href='https://github.com/iJustinCabral' target='_blank' aria-label='GitHub'>
                        <FaGithub />
                    </SocialIconLink>

                    <SocialIconLink href='https://www.linkedin.com/in/justin-cabral-2272a623/' target='_blank' aria-label='LinkedIn'>
                        <FaLinkedin />
                    </SocialIconLink>

                </SocialIcons>

            </SocialMediaWrap>
        </SocialMedia>
    </>
  )
}

export default Footer