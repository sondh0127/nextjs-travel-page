import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { css } from 'styled-components/macro' //eslint-disable-line

import Header, {
  NavLink,
  NavLinks,
  PrimaryLink as PrimaryLinkBase,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from '../headers/light.js'

const StyledHeader = styled(Header)`
  ${tw`w-full pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`

const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`
const Container = styled.div`
  ${tw`relative h-screen -mx-8 -mt-8 bg-center bg-cover min-h-144`}
  background-image: url("/images/jasmine-home-1.jpeg");
`

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-400 opacity-5`

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col max-w-screen-xl`
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`

const Heading = styled.h1`
  ${tw`-mt-24 text-3xl font-black leading-snug text-center text-gray-100 sm:text-4xl lg:text-5xl xl:text-6xl sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`

const PrimaryAction = tw.button`rounded-full px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline`
const Paragraph = tw.p`my-5 lg:my-8 text-base lg:text-lg font-medium text-gray-100 max-w-lg mx-auto lg:mx-0`

export default () => {
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="#">About</NavLink>
      <NavLink href="#">Blog</NavLink>
      <NavLink href="#">Locations</NavLink>
      <NavLink href="#">Pricing</NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink href="/#">Hire Us</PrimaryLink>
    </NavLinks>,
  ]

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <Content>
          <Heading>
            Welcome to
            <br />
            Jasmine Tours
          </Heading>
          <Paragraph>MOTORBIKE TOURS & EASYRIDER TOURS & MOTORBIKE RENTAL & ROOMS</Paragraph>
          <PrimaryAction> Book now </PrimaryAction>
        </Content>
      </HeroContainer>
    </Container>
  )
}
