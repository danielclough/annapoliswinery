import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Features = () => (
  <Section id="features">
    <StyledContainer>
      <Subtitle>Learn More</Subtitle>
      <SectionTitle></SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>About Us</FeatureTitle>
          <FeatureText>
            The vinyards were planted in 1978 by Basil and Barbara Scalabrini.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Wine Making</FeatureTitle>
          <FeatureText>
            Growing conditions in Annapolis are unique to Sonoma County.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Philosophy</FeatureTitle>
          <FeatureText>
            We practice sustainable farming and do not use synthetic pesticides.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Events</FeatureTitle>
          <FeatureText>
            We have a complete kitchen, and can serve up to 200 guests.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Weddings</FeatureTitle>
          <FeatureText>
          We will help you plan according to your wishes to create a successful and joyful celebration.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Rewards</FeatureTitle>
          <FeatureText>
             We produce a very small amount of wine, taking personal care at each step of the process.
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
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
  max-width: 670px;
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
