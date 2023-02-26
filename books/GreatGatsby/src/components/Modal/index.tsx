/**
 * 아직 콘텐츠가 하나라 모르지만 packages/shared-components로 옮겨질 가능성 농후..
 */
import React, { ReactNode, useEffect, useContext, useState } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence, useScroll } from 'framer-motion'
import { clamp } from '@shared/utils'
import { MIN_VIEWPORT, MAX_VIEWPORT } from '@/constants'
import { iframeMessage } from '@shared/utils'

import Features from './Features'
import Details from './Details'

type ModalProps = {
  children?: ReactNode
  isVisible?: boolean
  onClick?: (event: React.MouseEvent) => void
  onClose?: () => void
  backdrop?: string
}

const CloseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4142 12L18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L12 10.5858L6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L10.5858 12L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L12 13.4142L17.2929 18.7071Z"
      fill="white"
    />
  </svg>
)

const Modal = ({
  children,
  isVisible,
  onClick,
  onClose = () => {},
  backdrop
}: ModalProps) => {
  const [sticky, setSticky] = useState(false)

  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation()
    onClick?.(event)
  }

  useEffect(() => {
    const img = new Image()
    img.onload = () => {}
    img.onerror = () => {}

    img.src = backdrop
  }, [])

  useEffect(() => {
    iframeMessage.post('closeAppbar', null)
  }, [isVisible])

  return (
    <AnimatePresence>
      {isVisible && (
        <Wrapper
          backdrop={backdrop}
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ type: 'spring', duration: 0.36 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="swiper-no-swiping"
          onClick={handleClick}>
          <Header className={sticky ? 'is-sticky' : ''}>
            <Close
              type="button"
              onClick={(event) => {
                event.stopPropagation()
                onClose()
              }}>
              <CloseIcon />
              <span className="sr-only">닫기</span>
            </Close>
          </Header>
          <Body
            onScroll={(event) => {
              const target = event.target as HTMLElement
              setSticky(!!target.scrollTop)
            }}>
            {children}
          </Body>
        </Wrapper>
      )}
    </AnimatePresence>
  )
}

const Wrapper = styled(motion.div)<{ backdrop: string }>`
  position: fixed;
  z-index: 1000;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: left;
  filter: blur(0px); // AudioButton position: fixed 버그 대응

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-image: url(${({ backdrop }) => backdrop});
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
    pointer-events: none;
  }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(18px);
    pointer-events: none;
  }
`

const Header = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 44px;
  transition: 0.24s;
  &.is-sticky {
    background-color: #fff;
  }
`

const Body = styled.div`
  position: relative;
  z-index: 2;
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: 24px;
  ${clamp('font-size', [MIN_VIEWPORT, MAX_VIEWPORT, 14])};
  ${clamp('line-height', [MIN_VIEWPORT, MAX_VIEWPORT, 24])};
  color: #ffff;
  overflow: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

const Close = styled.button`
  position: relative;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  margin-left: auto;
  .is-sticky & {
    path {
      fill: #242424;
    }
  }
`

Modal.Features = Features
Modal.Details = Details

export default Modal
