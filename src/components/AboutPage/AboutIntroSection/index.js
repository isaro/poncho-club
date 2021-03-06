import React from 'react'
import { Wrapper, InfoWrapper, Content} from './style'
import PageIntro from "../../elements/PageIntro";

const AboutIntroSection = ({ content }) =>
    <Wrapper>
        <InfoWrapper>
            <PageIntro text="PONCHO" />
            <Content>{content()}</Content>
        </InfoWrapper>
    </Wrapper>

export default AboutIntroSection
