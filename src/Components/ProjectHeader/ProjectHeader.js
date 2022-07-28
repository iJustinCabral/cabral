import React from 'react'
import { HeaderWrapper, ProjectNumberText, VertialLineDivider, ProjectTitleText, HorizontalLineDivider, Container } from './ProjectHeader.elements'

const ProjectHeader = ({numberText, titleText}) => {
  return (
    <Container>
        <HeaderWrapper>
            <ProjectNumberText> {numberText} </ProjectNumberText>
            <VertialLineDivider />
            <ProjectTitleText> {titleText} </ProjectTitleText>
        </HeaderWrapper>
        <HorizontalLineDivider />
    </Container>
  )
}

export default ProjectHeader