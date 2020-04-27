import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Weddings = () => (
  <Section id="weddings">
    <StyledContainer>
        <FeatureItem>
          <FeatureTitle>Weddings</FeatureTitle>
          <FeatureText>
                Picture your wedding taking place in the most romantic setting nature has to offer.  <br />
                As elegant or as casual as you wish.  Let your imagination run wild and create your dream wedding.   <br />
                On top of the world, dining and dancing under the stars.  Beautiful, breath- taking panoramic views.   <br />
                We offer weddings and events for up to 200 guests.  Full kitchen.   <br />
                We will help you plan according to your wishes to create a successful and joyful celebration.         <br />
                        <br />
                  Available dates May  through September.  <br />
                   <br />
                       <button> Call for reservations.</button> <br />
                        <br />
                       <button>Learn more</button> <br />

              <InfoText>
              Information and Pricing: <br />
               <br />
              1- 200 guest maximum <br />

              2- Available May1 to September 30 <br />

              3- Available 4pm to 10pm .  Other times may be available, please inquire   <br />

              4- Receptions/parties/rehearsal dinners and corporate events OK <br />

              5- Outdoor facility <br />

              6- Set up and break down included <br />

              7- Catering kitchen Included <br />

              8- $5000 grounds/site use fee first 75 guest, additional guests $15 each <br />

              9- Includes tables, chairs, place settings, bartender and site attendant, gazebo set-up, lighting and clean up <br />

              10- Not included: beverages, catering, food service, linens, flowers, minister, photographer, cake, decorations, etc. <br />

              11- Third party rental items to consider: dance floor, tent, stage, heaters, sound system, DJ/Band <br />

              12- Portable restroom rental fee required if more than 100 guests, $120 <br />

              13- Wedding site planning/coordination included <br />

              14- One day event insurance required <br />

              15- Accommodations available in the Sea Ranch and Gualala areas.  Check: <br />

              www.redwoodcoastchamber.com  <br />

              www.searanchlodge.com  <br />

              www.ramshead-realty.com <br />

              16- Available in surrounding areas: Tennis, swimming, hiking, kayaking, beaches, and much more <br />

              17- Many award winning Annapolis wines to choose from.  <br /> 
               <br /> 
              If you would like to bring your own wine, a $15 corkage per bottle will apply, $2.00 per six pack of beer, $30 per keg, and $6 per bottle of champagne.  <br />
              </InfoText>
          </FeatureText>
        </FeatureItem>
    </StyledContainer>
  </Section>
)

export default Weddings

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

const InfoText = styled.p`
  text-align: left;
`