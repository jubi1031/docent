import { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import Icons from '../../Icons'

type P29Props = {
  isCurrentPage: boolean
}

const P29 = ({
  isCurrentPage
}: P29Props) => {
  const [step, setStep] = useState(0)
  const isShow = isCurrentPage && step < 1

  return (
    <Wrapper className={step > 0 ? 'cracked' : ''}>
      <Images
        variants={{
          fadeOut: { opacity: 0, scale: 1.2 }
        }}
        transition={{ type: 'spring', duration: .6, delay: .4 }}
        animate={step > 0 ? 'fadeOut' : ''}
      >
        <Img src="/images/part1/P75_1.jpg" alt="" />
        <Img src="/images/part1/P75_1.jpg" alt="" />
        <Img src="/images/part1/P75_1.jpg" alt="" />
        {isShow && (
          <Button
            initial={{ opacity: 0, scale: 0.6, x: `-50%` }}
            transition={{ type: 'spring', duration: .36, delay: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={() => setStep(step + 1)}
          >
            <Icons.Bulb />
          </Button>
        )}
        <SizeImg src="/images/part1/P75_1.jpg" />
      </Images>
      <Img
        src="/images/part1/P75_2.jpg" alt=""
        initial={{ opacity: 0, x: '-50%' }}
        variants={{
          fadeIn: { opacity: 1, x: '-50%' }
        }}
        transition={{ type: 'spring', duration: 1.2, delay: .4 }}
        animate={step > 0 ? 'fadeIn' : ''}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  overflow: hidden;
  @media (max-height: 480px) {
    overflow: auto;
  }
  img {
    display: block;
    margin: 0 auto;
    max-height: 100vh;
    @media (max-height: 480px) {
      max-height: unset;
    }
  }  
`

const Images = styled(motion.div)`
  position: relative;
  img {
    transition-duration: .6s;
    transition-delay: 0s;
    transition: transform .24s;
  }
`

const Img = styled(motion.img)`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, 0);
  pointer-events: none;
  transition: none;
  max-height: 100vh;
  @media (max-height: 480px) {
    max-height: unset;
  }

  .cracked ${Images} & {
    &:nth-child(1) {
      clip-path: polygon(19% 28%, 0 25%, 0 64%, 17% 66%);
      transform: translate(-52%, -1%) rotateZ(-4deg);
    }
    &:nth-child(2) {
      clip-path: polygon(21% 28%, 64% 25%, 47% 64%, 19% 63%);
      transform: translate(-45%, -1%) rotateZ(4deg);
    }
    &:nth-child(3) {
      clip-path: polygon(100% 28%, 64% 25%, 47% 64%, 100% 61%);
      transform: translate(-45%, -1%) rotateZ(6deg);
    }
  }
`

const SizeImg = styled.img`
  pointer-events: none;
  opacity: 0;
`

const Button = styled(motion.button)`
  position: absolute;
  z-index: 4;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  left: 50%;
  top: 64%;
  transform: translate(-50%, 0);
  border: 2px solid #EB683F;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.16), 4px 8px 28px rgba(0, 0, 0, 0.08);
  border-radius: 50%;
`

export default P29