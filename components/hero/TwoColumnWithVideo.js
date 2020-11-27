import React, { useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
//eslint-disable-next-line
import { css } from 'styled-components/macro'

import Header, {
  NavLink,
  NavLinks,
  PrimaryLink,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from '../headers/light.js'

import ReactModalAdapter from '../../helpers/ReactModalAdapter.js'
import ResponsiveVideoEmbed from '../../helpers/ResponsiveVideoEmbed.js'

import { ReactComponent as PlayIcon } from 'feather-icons/dist/icons/play-circle.svg'
import { ReactComponent as CloseIcon } from 'feather-icons/dist/icons/x.svg'
import { ReactComponent as SvgDecoratorBlob1 } from '../../images/svg-decorator-blob-1.svg'
import { ReactComponent as SvgDecoratorBlob2 } from '../../images/dot-pattern.svg'
import DesignIllustration from '../../images/design-illustration.svg'

const backgroundUrl = '/images/jasmine-home-1.jpeg'

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`
const Container = styled.div`
  ${tw`relative min-h-screen -mx-8 -mt-8 bg-center bg-cover`}
  background-image: url("/images/jasmine-home-1.jpeg");
`

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-400 opacity-15`

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`

const TwoColumn = tw.div`flex flex-col items-center justify-center lg:flex-row md:items-center max-w-screen-xl mx-auto py-20 md:py-24`
const LeftColumn = tw.div`relative flex-shrink-0 text-center lg:text-left`
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex flex-col justify-center`

const Heading = styled.h1`
  ${tw`font-serif text-3xl font-black leading-none text-center text-gray-100 lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl`}
  span {
    ${tw`inline-block mt-2`}
  }
`

const SlantedBackground = styled.span`
  ${tw`relative px-4 py-2 -mx-4 text-primary-500`}
  &::before {
    content: '';
    ${tw`absolute inset-0 transform -skew-x-12 bg-gray-100 -z-10`}
  }
`
const Paragraph = tw.p`my-5 lg:my-8 text-base lg:text-lg font-medium text-gray-100 max-w-lg mx-auto lg:mx-0`

const Actions = tw.div`flex flex-col items-center sm:flex-row justify-center lg:justify-start mt-8`
const PrimaryButton = tw.button`font-bold px-8 lg:px-10 py-3 rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 focus:shadow-outline focus:outline-none transition duration-300`
const WatchVideoButton = styled.button`
  ${tw`flex items-center mt-4 transition duration-300 sm:mt-0 sm:ml-8 text-secondary-300 hocus:text-primary-400 focus:outline-none`}
  .playIcon {
    ${tw`w-12 h-12 stroke-1`}
  }
  .playText {
    ${tw`ml-2 font-medium`}
  }
`

const IllustrationContainer = tw.div`flex justify-center md:justify-end items-center relative max-w-3xl lg:max-w-none`

// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`absolute bottom-0 left-0 w-64 h-64 transform pointer-events-none opacity-5 -translate-x-2/3 -z-10`}
`
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`absolute bottom-0 right-0 w-32 h-32 transform translate-x-10 translate-y-10 opacity-25 pointer-events-none fill-current text-primary-500 -z-10`}
`

const StyledModal = styled(ReactModalAdapter)`
  &.mainHeroModal__overlay {
    ${tw`fixed inset-0 z-50`}
  }
  &.mainHeroModal__content {
    ${tw`absolute inset-0 flex items-center justify-center max-w-screen-xl m-4 bg-gray-200 rounded-lg outline-none xl:mx-auto sm:m-16`}
  }
  .content {
    ${tw`w-full lg:p-16`}
  }
`
const CloseModalButton = tw.button`absolute top-0 right-0 mt-8 mr-8 hocus:text-primary-500`

export default ({
  heading = 'Modern React Templates, Just For You',
  description = 'Our templates are easy to setup, understand and customize. Fully modular components with a variety of pages and components.',
  primaryButtonText = 'Get Started',
  primaryButtonUrl = '#',
  watchVideoButtonText = 'Watch Video',
  watchVideoYoutubeUrl = 'https://www.youtube.com/embed/_GuOjXYl5ew',
  imageSrc = DesignIllustration,
  imageCss = null,
  imageDecoratorBlob = false,
  buttonRounded = true,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const toggleModal = () => setModalIsOpen(!modalIsOpen)
  const buttonRoundedCss = buttonRounded && tw`rounded-full`

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
      {/* <OpacityOverlay /> */}
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <TwoColumn>
          <LeftColumn>
            <Heading>
              <span>Welcome to</span>
              <br />
              <SlantedBackground>Jasmine Tours</SlantedBackground>
            </Heading>
            <Paragraph>MOTORBIKE TOURS – EASYRIDER TOURS – MOTORBIKE RENTAL – ROOMS</Paragraph>
            <Actions>
              <PrimaryButton as="a" href={primaryButtonUrl}>
                {/* {primaryButtonText} */}
                Book now
              </PrimaryButton>
              <WatchVideoButton onClick={toggleModal}>
                <span className="playIconContainer">
                  <PlayIcon className="playIcon" />
                </span>
                <span className="playText">{watchVideoButtonText}</span>
              </WatchVideoButton>
            </Actions>
          </LeftColumn>
          {/* <RightColumn> */}
          {/* <IllustrationContainer>
              <img css={imageCss} src={imageSrc} alt="Hero" />
              {imageDecoratorBlob && <DecoratorBlob2 />}
            </IllustrationContainer> */}
          {/* </RightColumn> */}
        </TwoColumn>
        <DecoratorBlob1 />
        <StyledModal
          closeTimeoutMS={300}
          className="mainHeroModal"
          isOpen={modalIsOpen}
          onRequestClose={toggleModal}
          shouldCloseOnOverlayClick={true}
        >
          <CloseModalButton onClick={toggleModal}>
            <CloseIcon tw="w-6 h-6" />
          </CloseModalButton>
          <div className="content">
            <ResponsiveVideoEmbed url={watchVideoYoutubeUrl} tw="w-full" />
          </div>
        </StyledModal>
      </HeroContainer>
    </Container>
  )
}
