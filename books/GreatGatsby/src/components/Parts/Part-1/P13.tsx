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

type P13Props = {
  isCurrentPage: boolean
}

const P13 = ({
  isCurrentPage
}: P13Props) => {
  const [step, setStep] = useState(0)

  const isButtonShow = isCurrentPage && step < 2

  return (
    <Wrapper>
      <Img src="/images/part1/cloud_bg.jpg" />
      {isButtonShow && (
        <Button
          onClick={() => setStep(step + 1)}
          initial={{ opacity: 0, scale: 0.6, top: step === 0 ? '29.31%' : '54.18%' }}
          transition={{ type: 'spring', duration: .36, delay: step === 0 ? 0.2 : 0 }}
          animate={{ opacity: 1, scale: 1, top: step === 0 ? '29.31%' : '54.18%' }}
        >
          <Icons.Bulb />
        </Button>
      )}      
      {step >= 1 && (
        <Typeing1>
          <Typewriter
            options={{
              delay: 50
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(`대학 졸업 후`)
                .pauseFor(400)
                .typeString(`<br/>`)
                .typeString(`고향으로 돌아와서도`)
                .typeString(`<br/>`)
                .typeString(`마음의 안정을`)
                .typeString(`<br/>`)
                .typeString(`찾을 수 없던 닉은`)
                .callFunction(function(state) {
                  state.elements.cursor.style.display = 'none'
                })
                .start()
            }}
          />
        </Typeing1>        
      )}
      {step >= 2 && (
        <Typeing2>
          <Typewriter
            options={{
              delay: 50
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(`초라한 변두리 같은`)
                .typeString(`<br/>`)
                .typeString(`중서부 지방을 떠나 동부로 왔다.`)
                .callFunction(function(state) {
                  state.elements.cursor.style.display = 'none'
                })
                .start()
            }}
          />        
        </Typeing2>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
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

const Button = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  position: absolute;
  left: 50%;
  border: 2px solid #EB683F;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.16), 4px 8px 28px rgba(0, 0, 0, 0.08);
  border-radius: 50%;
  margin-left: -20px;
`

const Typeing = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  .Typewriter {
    font-family: 'NanumMyeongjoBold', serif;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    ${clamp('font-size', [MIN_VIEWPORT, MAX_VIEWPORT, 20])};
  }
  .Typewriter__cursor {
    position: absolute;
  }
`

const Typeing1 = styled(Typeing)`
  top: 26.60%;
`

const Typeing2 = styled(Typeing)`
  top: 53.57%;
`

export default P13