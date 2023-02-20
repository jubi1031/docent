import { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { clamp } from '@shared/utils'
import {
  MIN_VIEWPORT,
  MAX_VIEWPORT
} from '@/constants'
import Icons from '../../Icons'

import Typewriter from 'typewriter-effect'

type P95Props = {
  isCurrentPage: boolean
}

const P95 = ({
  isCurrentPage
}: P95Props) => {
  const [step, setStep] = useState(0)
  const isButtonShow = isCurrentPage && step < 1

  return (
    <Wrapper>
      <Img src="/images/part1/cloud_bg.jpg" />
      {isButtonShow && (
        <Button
          onClick={() => setStep(step + 1)}
          initial={{ opacity: 0, scale: 0.6, x: '-50%', y: '-50%' }}
          transition={{ type: 'spring', duration: .36, delay: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Icons.Bulb />
        </Button>
      )}
      {step >= 1 && (
        <Typeing1
          initial={{ opacity: 0 }}
          transition={{ duration: .36, delay: 1.6 }}
          animate={{ opacity: 1 }}
        >
          톰의 무자비한 악의에 의해<br />
          길고 은밀했던 사랑이 끝난 뒤,
        </Typeing1>
      )}
      {step >= 1 && (
        <Typeing2
          initial={{ opacity: 0 }}
          transition={{ duration: .36, delay: 2.8 }}
          animate={{ opacity: 1 }}        
        >
          개츠비는 닉에게 자신이<br />
          전력을 다해 쫓던<br />
          데이지의 이야기를 했다.
        </Typeing2>
      )}
      {step > 0 && (
        <>
          <Star />
          <Star />
          <Star />
        </>
      )}

    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: auto!important;
  img {
    display: block;
    margin: 0 auto;
    max-height: 100vh;
   @media (max-height: 480px) {
     max-height: unset;
   }    
  }
`

const Img = styled.img`

`

const Star = styled.span`
  @keyframes animate {
    0% {
      transform: rotate(315deg) translateX(0);
      opacity: 0.8;
    }
    70% {
      opacity: 1;
    }
    100%{
      transform: rotate(315deg) translateX(-1500px);
      opacity: 0;
    }
  }
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4px;
  height: 4px;
  background: #fff;
  border-radius: 50%;
  opacity: 0;
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1), 0 0 0 8px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 1);
  animation: animate 2s ease-out; 
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 300px;
    height: 1px;
    background: linear-gradient(90deg, #fff, transparent);    
  }
  &:nth-of-type(1){
    top: 0;
    right: 0;
    left:initial;
    animation-delay: .2;
    animation-duration: 3s;
  }
  &:nth-of-type(2){
    top: 0;
    right: 80px;
    left:initial;
    animation-delay: 0.4s;
    animation-duration: 2s;
  }
  &:nth-of-type(3){
    top: 300px;
    right: 0px;
    left:initial;
    animation-delay: 0.8s ;
    animation-duration: 1.4s;
  }
`

const Button = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid #EB683F;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.16), 4px 8px 28px rgba(0, 0, 0, 0.08);
  border-radius: 50%;
`

const Typeing = styled(motion.div)`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  font-family: 'NanumMyeongjoBold', serif;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  ${clamp('font-size', [MIN_VIEWPORT, MAX_VIEWPORT, 20])};
  .Typewriter__cursor {
    position: absolute;
  }
`

const Typeing1 = styled(Typeing)`
  top: 38.91%;
`

const Typeing2 = styled(Typeing)`
  top: 52.33%;
`

export default P95