import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

 
const Features = () => (
  <Section id="wine">
    <StyledContainer>
      <Subtitle>Our Wine</Subtitle>
      <SectionTitle></SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>2016 Pinot Noir</FeatureTitle>
          <FeatureText>
Deep color.  Strawberry and cherry fruit.  Orange peel finish.
$60

          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Barbera and Primitivo</FeatureTitle>
          <FeatureText>
Italian Red Blend   "Red Wine"                                                                                   
Dark fruit, rich body, French oak
$32
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>2016 Zinfandel</FeatureTitle>
          <FeatureText>
Raspberry, thyme, light and bright.  Tip: Served chilled, as a Rose
$28
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>2008 Zinfandel Port</FeatureTitle>
          <FeatureText>
Decadent desert, very intense fruit; 500ml (for adults only)
$45
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer>

    <WarningContainer>
        <FeatureItem>
          <WarningTitle>WARNING</WarningTitle>
          <WarningText>
Drinking distilled spirits, beer, coolers, wine and other alcoholic beverages may increase cancer risk, and, during pregnancy, can cause birth defects.  <br />
For more information go to www.P65Warnings.ca.gov/alcohol  
          </WarningText>
        </FeatureItem>
    </WarningContainer>

  </Section>
)

export default Features

const StyledContainer = styled(Container)``

const WarningContainer = styled(Container)`
  margin-top: 1%;
`
const WarningTitle = styled.h4`
  color: red;
  letter-spacing: 0px;
  font-size: 9px;
`
const WarningText = styled.p`
  text-align: center;
  font-size: 9px;
  margin-top: -20px;
  line-height: 10px;

`



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
