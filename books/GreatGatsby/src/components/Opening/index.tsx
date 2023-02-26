import { useContext, useRef } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { clamp } from '@shared/utils'
import Modal from '@/components/Modal'
import { ConfigContext } from '@/components/ConfigContext'
import { MIN_VIEWPORT, MAX_VIEWPORT } from '@/constants'

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

  const handleOpenGreeting = (event: React.MouseEvent) => {
    event.stopPropagation()
    modalContent.current = 'greeting'
    setOpenModal(true)
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
  }

  return (
    <Wrapper>
      <Intro>
        <Header>
          <Inner>
            <Number>#2</Number>
            <Title>달러구트 꿈 백화점</Title>
            <ButtonToGreet type="button" onClick={handleOpenGreeting}>
              도슨트 인사말
            </ButtonToGreet>

            <Writer>
              <KoName onClick={handleOpenIntroducing}>
                양재웅 ㆍ 김해나 <InfoIcon />
                <Tooltip inVisible={isOpenModalCount.current > 0}>
                  도슨트 소개 보기
                </Tooltip>
              </KoName>
              <EnName onClick={handleOpenIntroducing}>
                전문의 &nbsp; &nbsp; &nbsp; &nbsp; 아나운서
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
                    <Quote>“&nbsp;</Quote>작품의 주요 스토리는 물론
                  </TextDecoration>
                  <TextDecoration>
                    책에 대한 신선한 해설을 들려드리는
                  </TextDecoration>
                  <TextDecoration>
                    <strong>밀리의 서재 도슨트북</strong>
                  </TextDecoration>
                  <TextDecoration>
                    안녕하세요. 아나운서 김해나입니다.
                  </TextDecoration>
                  <TextDecoration>오늘은 남녀노소 불문하고</TextDecoration>
                  <TextDecoration>
                    꾸준한 사랑을 받는 소설 분야 베스트셀러
                    <Quote>&nbsp;”</Quote>
                  </TextDecoration>
                </Paragraph>
              </SwiperSlide>
              <SwiperSlide>
                <Paragraph>
                  <TextDecoration>
                    <Quote>“&nbsp;</Quote>
                    <strong>&lt;달러구트 꿈 백화점&gt;</strong>에 대해
                  </TextDecoration>
                  <TextDecoration>
                    재미있는 해설을 펼쳐볼 건데요.
                  </TextDecoration>
                  <TextDecoration>오늘은 색다른 시각으로</TextDecoration>
                  <TextDecoration>
                    소개해 주실 도슨트로 정신과 전문의
                  </TextDecoration>
                  <TextDecoration>
                    양재웅 선생님과 함께합니다<Quote>&nbsp;”</Quote>
                  </TextDecoration>
                  <TextDecoration>&nbsp;</TextDecoration>
                </Paragraph>
              </SwiperSlide>
              <SwiperSlide>
                <Paragraph>
                  <TextDecoration>
                    <Quote>“&nbsp;</Quote>도슨트북은 각각의 파트로
                  </TextDecoration>
                  <TextDecoration>나뉘어 진행됩니다.</TextDecoration>
                  <TextDecoration>파트1 에서는 책의 내용을</TextDecoration>
                  <TextDecoration>
                    흥미롭게 <strong>요약한 스토리</strong>가
                  </TextDecoration>
                  <TextDecoration>파트2 에서는 책에 대한</TextDecoration>
                  <TextDecoration>
                    <strong>색다른 해설</strong>이 진행됩니다.
                    <Quote>&nbsp;”</Quote>
                  </TextDecoration>
                </Paragraph>
              </SwiperSlide>
            </Swiper>
            <Buttons>
              <Button
                type="button"
                onClick={() => swiperRef.current.slideTo(2, 0)}>
                스토리 보기
                <ArrawIcon />
              </Button>
              <Button
                type="button"
                onClick={() => swiperRef.current.slideTo(103, 0)}>
                해설 보기
                <ArrawIcon />
              </Button>
            </Buttons>
          </Inner>
        </Body>
      </Intro>
      <Modal
        backdrop={'/images/opening/doctor.jpg'}
        isVisible={openModal}
        onClose={handleCloseModal}>
        <Modal.Features>
          <img src="/images/opening/doctor.jpg" width="50%" alt="" />
        </Modal.Features>
        <Modal.Details>
          {/* Greeting */}
          {modalContent.current === 'greeting' && (
            <WriterDetails>
              <strong>양재웅웅웅!!!</strong>
              <span>정신과 전문의</span>
              <p>
                정신의학 전문이며 W진병원 대표원장이다.
                <br />
                현재는 방송인을 겸하고 있으며
                <br />
                미스틱스토리에 소속되어있다.
              </p>
            </WriterDetails>
          )}

          {/* Introducing */}
          {modalContent.current === 'introducing' && (
            <WriterDetails>
              <strong>양재웅</strong>
              <span>정신과 전문의</span>
              <p>
                정신의학 전문이며 W진병원 대표원장이다.
                <br />
                현재는 방송인을 겸하고 있으며
                <br />
                미스틱스토리에 소속되어있다.
              </p>
            </WriterDetails>
          )}
        </Modal.Details>
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

const WriterDetails = styled.div`
  height: calc(100% - 20px);
  margin-top: 20px;
  color: #000;
  padding: 24px 0;
  font-size: 14px;
  line-height: 20px;
  ${clamp('font-size', [MIN_VIEWPORT, MAX_VIEWPORT, 14])};
  ${clamp('line-height', [MIN_VIEWPORT, MAX_VIEWPORT, 20])};
  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    left: 0;
    top: 20px;
    right: 0;
    bottom: 0;
    background-color: #fff;
    pointer-events: none;
  }
  strong {
    font-size: 20px;
    line-height: 28px;
    ${clamp('font-size', [MIN_VIEWPORT, MAX_VIEWPORT, 20])};
    ${clamp('line-height', [MIN_VIEWPORT, MAX_VIEWPORT, 28])};
  }
  span {
    display: block;
    padding: 2px 0 12px 0;
    border-bottom: 1px solid #dfdfdf;
    margin-bottom: 12px;
    color: var(--text-03);
  }
`

export default Opening
