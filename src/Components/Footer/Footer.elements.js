import styled from "styled-components";
import { FaMagento } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
color: #fff;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #000;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const SocialIcon = styled(FaMagento)`
  margin-right: 10px;
`;

export const WebsiteRights = styled.small`
  color: #000;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
`;

export const SocialIconLink = styled.a`
  color: #000;
  font-size: 24px;
  padding-left: 20px;
`;
