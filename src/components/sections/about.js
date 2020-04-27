import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Features = () => (
  <Section id="about">
    <StyledContainer>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>History</FeatureTitle>
          <FeatureText>
            The Scalabrini’s first planted the vineyards in 1978, replacing an old apple orchard. With no winery, the first wine was made in a redwood grove at the top of the hill, a 1986 Cabernet Sauvignon. We built the winery in 1987, and began making wine from each vintage thereafter.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Wine Making</FeatureTitle>
          <FeatureText>
            Growing conditions in Annapolis are unique to Sonoma County :  an elevation of about 1000ft, five and a half miles from the Pacific Ocean , cool coastal breezes, sandy low-vigor soils, and abundant sunshine.  From vine to bottle, we do everything we can to stay out of the way, and let the wine grow.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Philosophy</FeatureTitle>
          <FeatureText>
            Our aim is to allow the grapes flavors to develop naturally. We practice sustainable farming and do not use synthetic pesticides.  All of our fruit is hand picked and carefully inspected.  No fining agents are used. Personal care and attention go into every bottle. 
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Mission Statement</FeatureTitle>
          <FeatureText>
            What you taste in the bottle is what is grown in the fields.  All our wines are made from locally grown wine grapes.  Our mission statement:  "To Use Local Fruit and Provide our Customers with the Essence of The Sonoma North Coast."
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>Family</FeatureTitle>
          <FeatureText>
             We are family owned and operated, and are involved in every phase of the wine growing process.  From pruning to bottling, we take personal pride in producing the best wine we possibly can. Our focus is on quality, not quantity. We produce a very small amount of wine, taking personal care at each step of the process. 
          </FeatureText>
        </FeatureItem>
    </StyledContainer>
  </Section>
)

export default Features

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 3640px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
`
