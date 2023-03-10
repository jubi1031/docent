import { useContext, useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useSound } from '@shared/hooks'
import { clamp } from '@shared/utils'
import Modal from '@/components/Modal'
import { ConfigContext } from '@/components/ConfigContext'
import { MIN_VIEWPORT, MAX_VIEWPORT } from '@/constants'
import Greeting from './Greeting'
import Introducing from './Introducing'

type OpeningProps = {}

const InfoIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14ZM8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
      fill="white"
    />
    <circle cx="8" cy="5" r="1" fill="white" />
    <rect x="7.25" y="7" width="1.5" height="5" rx="0.75" fill="white" />
  </svg>
)

const ArrawIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7 11L10 8L7 5"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const Opening = ({}: OpeningProps) => {
  const modalContent = useRef<null | 'greeting' | 'introducing'>(null)
  const { swiperRef, openModal, setOpenModal } = useContext(ConfigContext)
  const isOpenModalCount = useRef(0)

  const [paused, setPaused] = useState(false)
  const [_, secondHalfSound] = useSound({
    src: 'sounds/open.mp3',
    volume: 0.5,
    loop: false
  })

  const handleOpenGreeting = (event: React.MouseEvent) => {
    event.stopPropagation()
    modalContent.current = 'greeting'
    setOpenModal(true)
    setPaused(false)
    secondHalfSound.play()
  }

  const handleOpenIntroducing = (event: React.MouseEvent) => {
    event.stopPropagation()
    modalContent.current = 'introducing'
    ++isOpenModalCount.current
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    modalContent.current = null
    setOpenModal(false)
    secondHalfSound.stop()
  }

  return (
    <Wrapper>
      <Intro>
        <Header>
          <Inner>
            <Number>#2</Number>
            <Title>???????????? ??? ?????????</Title>
            <ButtonToGreet type="button" onClick={handleOpenGreeting}>
              ????????? ?????????
            </ButtonToGreet>

            <Writer>
              <KoName onClick={handleOpenIntroducing}>
                ????????? ??? ????????? <InfoIcon />
                <Tooltip inVisible={isOpenModalCount.current > 0}>
                  ????????? ?????? ??????
                </Tooltip>
              </KoName>
              <EnName onClick={handleOpenIntroducing}>
                ????????? &nbsp; &nbsp; &nbsp; &nbsp; ????????????
              </EnName>
            </Writer>
            <Book>
              <img src="/images/opening/cover.png" alt="" />
            </Book>
          </Inner>
        </Header>
        <Body>
          <Inner>
            <Swiper modules={[Pagination]} pagination={{ clickable: true }}>
              <SwiperSlide>
                <Paragraph>
                  <TextDecoration>
                    <Quote>???&nbsp;</Quote>????????? ?????? ???????????? ??????
                  </TextDecoration>
                  <TextDecoration>
                    ?????? ?????? ????????? ????????? ???????????????
                  </TextDecoration>
                  <TextDecoration>
                    <strong>????????? ?????? ????????????</strong>
                  </TextDecoration>
                  <TextDecoration>
                    ???????????????. ???????????? ??????????????????.
                  </TextDecoration>
                  <TextDecoration>????????? ???????????? ????????????</TextDecoration>
                  <TextDecoration>
                    ????????? ????????? ?????? ?????? ?????? ???????????????
                    <Quote>&nbsp;???</Quote>
                  </TextDecoration>
                </Paragraph>
              </SwiperSlide>
              <SwiperSlide>
                <Paragraph>
                  <TextDecoration>
                    <Quote>???&nbsp;</Quote>
                    <strong>&lt;???????????? ??? ?????????&gt;</strong>??? ??????
                  </TextDecoration>
                  <TextDecoration>
                    ???????????? ????????? ????????? ?????????.
                  </TextDecoration>
                  <TextDecoration>????????? ????????? ????????????</TextDecoration>
                  <TextDecoration>
                    ????????? ?????? ???????????? ????????? ?????????
                  </TextDecoration>
                  <TextDecoration>
                    ????????? ???????????? ???????????????<Quote>&nbsp;???</Quote>
                  </TextDecoration>
                  <TextDecoration>&nbsp;</TextDecoration>
                </Paragraph>
              </SwiperSlide>
              <SwiperSlide>
                <Paragraph>
                  <TextDecoration>
                    <Quote>???&nbsp;</Quote>??????????????? ????????? ?????????
                  </TextDecoration>
                  <TextDecoration>????????? ???????????????.</TextDecoration>
                  <TextDecoration>??????1 ????????? ?????? ?????????</TextDecoration>
                  <TextDecoration>
                    ???????????? <strong>????????? ?????????</strong>???
                  </TextDecoration>
                  <TextDecoration>??????2 ????????? ?????? ??????</TextDecoration>
                  <TextDecoration>
                    <strong>????????? ??????</strong>??? ???????????????.
                    <Quote>&nbsp;???</Quote>
                  </TextDecoration>
                </Paragraph>
              </SwiperSlide>
            </Swiper>
            <Buttons>
              <Button
                type="button"
                onClick={() => swiperRef.current.slideTo(2, 0)}>
                ????????? ??????
                <ArrawIcon />
              </Button>
              <Button
                type="button"
                onClick={() => swiperRef.current.slideTo(103, 0)}>
                ?????? ??????
                <ArrawIcon />
              </Button>
            </Buttons>
          </Inner>
        </Body>
      </Intro>

      <Modal
        backdrop={
          modalContent.current === 'greeting'
            ? '/images/opening/cover.png'
            : '/images/opening/doctor.jpg'
        }
        isVisible={openModal}
        onClose={handleCloseModal}
        talkInside>
        {modalContent.current === 'greeting' && (
          <Greeting
            paused={paused}
            setPaused={setPaused}
            secondHalfSound={secondHalfSound}
          />
        )}
        {modalContent.current === 'introducing' && <Introducing />}
      </Modal>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const Intro = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`

const Header = styled.div`
  position: relative;
  color: #fff;
  padding-top: 83.73%;
  height: 0;
  /* height: 314px; */
  background-image: url(/images/opening/intro-bg.jpg);
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #478ee1;
  ${Inner} {
    position: absolute;
    padding: 6.4%;
  }
`

const Title = styled.h2`
  font-size: 32px;
  line-height: 35px;
  ${clamp('font-size', [MIN_VIEWPORT, MAX_VIEWPORT, 32])};
  ${clamp('line-height', [MIN_VIEWPORT, MAX_VIEWPORT, 35])};
  margin-top: 4px;
`

const Number = styled.span`
  font-size: 20px;
  line-height: 35px;
  ${clamp('font-size', [MIN_VIEWPORT, MAX_VIEWPORT, 20])};
  ${clamp('line-height', [MIN_VIEWPORT, MAX_VIEWPORT, 35])};
  font-weight: 700;
`

const Writer = styled.div`
  margin-top: auto;
  cursor: pointer;
`

const KoName = styled.strong`
  position: relative;
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  line-height: 20px;
  ${clamp('font-size', [MIN_VIEWPORT, MAX_VIEWPORT, 14])};
  ${clamp('line-height', [MIN_VIEWPORT, MAX_VIEWPORT, 20])};
  margin-bottom: 2px;
  svg {
    margin-left: 4px;
  }
`

const EnName = styled.span`
  display: block;
  color: #ffffff;
  opacity: 0.6;
  font-size: 12px;
  line-height: 18px;
  ${clamp('font-size', [MIN_VIEWPORT, MAX_VIEWPORT, 12])};
  ${clamp('line-height', [MIN_VIEWPORT, MAX_VIEWPORT, 18])};
`

const Tooltip = styled(motion.span)<{ inVisible: boolean }>`
  ${({ inVisible }) => (inVisible ? 'display: none' : '')};
  position: absolute;
  left: calc(100% - 21px);
  bottom: calc(100% + 7px);
  padding: 6px 8px;
  font-size: 12px;
  line-height: 18px;
  color: #242424;
  border-radius: 4px;
  background-color: #fff;
  transition: all 0.16s;
  opacity: 1;
  white-space: nowrap;
  font-weight: 400;
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.12))
    drop-shadow(2px 6px 12px rgba(0, 0, 0, 0.12));
  &.is-hidden {
    opacity: 0;
    pointer-events: none;
  }
  &::before {
    content: '';
    position: absolute;
    left: 8px;
    bottom: -6px;
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 6px 5px 0 5px;
    border-color: #fff transparent transparent transparent;
    transform: rotate(0deg);
  }
`

const Body = styled.div`
  position: relative;
  flex: 1;
  background-image: url(/images/opening/paper-img.jpg);
  background-position: 0 0;
  background-size: contain;
  ${Inner} {
    padding: 9% 0;
  }
  .swiper {
    width: 67%;
    margin: 0 auto;
    overflow: hidden;
  }
  .swiper-wrapper {
    display: flex;
  }
  .swiper-slide {
    flex-shrink: 0;
  }
  .swiper-pagination {
    display: flex;
    justify-content: center;
    gap: 6px;
    margin-top: 4px;
  }
  .swiper-pagination-bullet {
    display: block;
    width: 5px;
    height: 5px;
    ${clamp('width', [MIN_VIEWPORT, MAX_VIEWPORT, 5])};
    ${clamp('height', [MIN_VIEWPORT, MAX_VIEWPORT, 5])};
    background-color: #dfdfdf;
    border-radius: 50%;
  }
  .swiper-pagination-bullet-active {
    background-color: #242424;
  }
`

const Book = styled(motion.div)`
  position: absolute;
  right: 10.66%;
  bottom: 8.28%;
  width: 27.2%;
  height: 45.54%;
  /* background-color: #f5f5f5; */
  border-radius: 0px 4px 4px 0px;
  overflow: hidden;
  filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.2))
    drop-shadow(2px 2px 6px rgba(0, 0, 0, 0.1));
  img {
    height: 100%;
  }
  &::before {
    content: '';
    position: absolute;
    z-index: 2;
    left: 0;
    top: 0;
    display: block;
    width: 19.6%;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.05) 0%,
      rgba(0, 0, 0, 0.05) 0.01%,
      rgba(0, 0, 0, 0.05) 5.97%,
      rgba(255, 255, 255, 0.3) 15.89%,
      rgba(255, 255, 255, 0) 28.19%,
      rgba(0, 0, 0, 0.05) 28.19%,
      rgba(0, 0, 0, 0.0277927) 46.96%,
      rgba(255, 255, 255, 0) 47.51%,
      rgba(255, 255, 255, 0.1) 54.14%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`

const Paragraph = styled.p`
  color: #000;
`

const TextDecoration = styled.span`
  display: block;
  margin-bottom: 14px;
  padding-bottom: 8px;
  font-size: 14px;
  line-height: 20px;
  ${clamp('font-size', [MIN_VIEWPORT, MAX_VIEWPORT, 14])};
  ${clamp('line-height', [MIN_VIEWPORT, MAX_VIEWPORT, 20])};
  border-bottom: 1px solid #dfdfdf;
  text-align: center;
  white-space: nowrap;
`

const Quote = styled.span`
  line-height: 1.125;
  font-size: 22px;
  ${clamp('font-size', [MIN_VIEWPORT, MAX_VIEWPORT, 22])};
  opacity: 0.6;
`

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  gap: 16px;
`

const Button = styled.button`
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 18px;
  padding: 8px;
  ${clamp('font-size', [MIN_VIEWPORT, MAX_VIEWPORT, 12])};
  ${clamp('line-height', [MIN_VIEWPORT, MAX_VIEWPORT, 18])};
  ${clamp('padding', [MIN_VIEWPORT, MAX_VIEWPORT, 8])};
  color: #fff;
  background-color: #333;
  border-radius: 4px;
`

const ButtonToGreet = styled.button`
  width: 25vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  line-height: 18px;
  margin-top: 24px;
  padding: 8px;
  ${clamp('font-size', [MIN_VIEWPORT, MAX_VIEWPORT, 12])};
  ${clamp('line-height', [MIN_VIEWPORT, MAX_VIEWPORT, 10])};
  ${clamp('padding', [MIN_VIEWPORT, MAX_VIEWPORT, 8])};
  color: #fff;
  background-color: rgba;
  border-radius: 4px;
  border-width: 1.5px 1.5px 1.5px 1.5px;
  border-style: solid;
  border-color: white;
`

export default Opening
