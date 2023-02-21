import React, { useContext, useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { InView } from 'react-intersection-observer'
import { MAX_VIEWPORT } from '@/constants'
import { ConfigContext } from '@/components/ConfigContext'
import Cover from '@/components/Cover'
import Opening from '@/components/Opening'
import Part1s from '@/components/Parts/Part-1'
import Part2s from '@/components/Parts/Part-2'
import { iframeMessage } from '@shared/utils'
import BGM from '../BGM'
import YoutubeSheet from '../YoutubeSheet'

const Parts = () => {
  const {
    swiperRef,
    currentPage,
    totalPage,
    setCurrentPage,
    setTotalPage,
    openModal,
    setOpenModal
  } = useContext(ConfigContext)

  const [mounted, setMounted] = useState(false)
  const [openAppbar, setOpenAppbar] = useState(false)

  useEffect(() => {
    // 트리 구조는 귀찮아.. depth로 서브챕터 구분
    iframeMessage.post('chapters', [
      { title: '도슨트북 소개', page: 1, depth: 1 },
      { title: 'Part 1. 스토리 보기', page: 3, depth: 1 },
      { title: 'Part 2. 해설 보기', page: 104, depth: 1 },
      { title: '도슨트의 <달러구트 꿈 백화점> 감상', page: 105, depth: 2 },
      { title: '꿈이란 무엇일까?', page: 114, depth: 2 },
      { title: '꿈에 대한 정신의학적 해석', page: 131, depth: 2 },
      { title: "'트라우마 환불 요청' 에피소드", page: 132, depth: 2 },
      { title: "'익명의 손님께서 당신에게 보낸 꿈' 에피소드", page: 133, depth: 2 },
      { title: "'체험판 출시 : 타인의 삶' 에피소드", page: 134, depth: 2 },
      { title: '본인의 삶 사랑하기', page: 135, depth: 2 },
      { title: '마무리', page: 136, depth: 2 }
    ])

    iframeMessage.post('coverPath', '/images/opening/cover.png')
    iframeMessage.post('totalPage', swiperRef.current.slides.length - 1)
  }, [])

  useEffect(() => {
    if (openModal) {
      setOpenModal(false)
    }

    swiperRef.current.slideTo(currentPage, 0)
  }, [currentPage])

  useEffect(() => {
    const toggleAppbar = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      const tagName = target.tagName
      if (tagName !== 'BUTTON' && tagName !== 'A') {
        iframeMessage.post('toggleAppbar')
      }
    }

    const onClick = (event: MouseEvent) => {
      event.preventDefault()

      const percentage = event.clientX / window.innerWidth
      const isPrevPage = percentage <= 0.2
      const isNextPage = percentage >= 0.8
      if (isNextPage) {
        swiperRef.current.slideNext()
      } else if (isPrevPage) {
        swiperRef.current.slidePrev()
      } else {
        toggleAppbar(event)
      }
    }

    iframeMessage.receive((
      channel = '',
      payload: any
    ) => {
      if (channel === 'currentPage') setCurrentPage(() => payload)
      if (channel === 'totalPage') setTotalPage(() => payload)
      if (channel === 'toggleAppbar') setOpenAppbar(() => payload)

      setTimeout(() => setMounted(true), 250)
    })

    document.addEventListener('click', onClick)
  }, [])

  return (
    <Wrapper className={`${mounted ? 'mounted' : ''} ${openAppbar ? 'is-appbar-open' : ''} ${openModal ? 'is-modal-open' : ''}`}>
      <Swiper
        speed={400}
        onSwiper={(core) => swiperRef.current = core}
        touchEventsTarget={'container'}
        onSlideChange={() => {
          if (swiperRef.current) {
            const activeIndex = swiperRef.current.activeIndex

            iframeMessage.post('currentPage', activeIndex)
          }
        }}
        initialSlide={currentPage}
      >
        <SwiperSlide><Cover /></SwiperSlide>
        <SwiperSlide><Opening /></SwiperSlide>
        {Part1s.map((Page, i) => {
          if (typeof Page === 'function') {
            return (
              <SwiperSlide key={`P${i}`} className={'part1'}>
                <Page isCurrentPage={i + 2 === currentPage} />
              </SwiperSlide>
            )
          } else {
            return (
              <SwiperSlide key={`P${i}`} className={'part1'}>
                {/* <InView>
                  {({ inView, ref, entry }) => (
                    <div ref={ref}>
                      {inView && <Img src={`/images/part1/${Page}.jpg`} alt="" />}
                    </div>
                  )}
                </InView> */}
                <div>
                  <Img src={`/images/part1/${Page}.jpg`} alt="" />
                </div>
              </SwiperSlide>
            )
          }
        })}
        {Part2s.map((Page, i) => {
          return (
            <SwiperSlide key={`P${i}`} className={'part2'}>
              {/* <InView>
                {({ inView, ref, entry }) => (
                  <div ref={ref}>
                    {inView && <Page isCurrentPage={i + 2 === currentPage} />}
                  </div>
                )}
              </InView> */}
              <div>
                <Page isCurrentPage={i + 2 === currentPage} />
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <BGM currentPage={currentPage} />
      <YoutubeSheet currentPage={currentPage}></YoutubeSheet>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  opacity: 0;
  pointer-events: none;
  transition: .24s;
  .swiper {
    position: relative;
    margin: 0 auto;
    overflow: hidden;
    &::before {
      content: "";
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
  .swiper-wrapper {
    display: flex;
    max-width: ${MAX_VIEWPORT}px;
    will-change: transform;
  }
  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    max-height: 100vh;
    overflow: auto;
    overscroll-behavior-y: none;    
    > div {
      width: 100%;
    }
    @media (max-height: 480px) {
      align-items: flex-start;
      justify-content: flex-start;
    }
  }
  &.mounted {
    opacity: 1;
    pointer-events: auto;
  }
`

const Img = styled.img`
  display: block;
  margin: 0 auto;
  max-height: 100vh;
  @media (max-height: 480px) {
    max-height: unset;
  }
`

export default Parts