import { useState } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { clamp } from '@shared/utils'
import {
  MIN_VIEWPORT,
  MAX_VIEWPORT
} from '@/constants'
import Icons from '../../Icons'

import Typewriter from 'typewriter-effect'

type P29Props = {
  isCurrentPage: boolean
}

const P29 = ({
  isCurrentPage
}: P29Props) => {
  const [step, setStep] = useState(0)

  const isButtonShow = isCurrentPage && step < 1

  return (
    <Wrapper>
      <Img src="/images/part1/P29_1.jpg" />
      {isButtonShow && (
        <Button
          onClick={() => setStep(step + 1)}
          initial={{ opacity: 0, scale: 0.6 }}
          transition={{ type: 'spring', duration: .36, delay: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Icons.Bulb />
        </Button>
      )}
      {step >= 1 && (
        <Typeing>
          <Typewriter
            options={{
              delay: 50
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(`201번 손님께서 `)
                .typeString(`<br/>`)
                .pauseFor(40)
                .typeString(`요금을 지불했습니다.`)
                .typeString(`<br/>`)
                .typeString("'좋아하는 사람이 나오는 꿈`의")
                .typeString(`<br/>`)
                .typeString("값으로 '설렘'이 소량")
                .typeString(`<br/>`)
                .typeString("도착했습니다.")
                .callFunction(function (state) {
                  state.elements.cursor.style.display = 'none'
                })
                .start()
            }}
          />
        </Typeing>
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

const Img = styled.img``

const Button = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 42%;
  left: 50%;
  border: 2px solid #EB683F;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.16), 4px 8px 28px rgba(0, 0, 0, 0.08);
  border-radius: 50%;
  margin-left: -20px;
  margin-top: -20px;
`

const Typeing = styled.div`
  position: absolute;
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'HSBombaram3.0_Regular', serif;
  background: linear-gradient(to right top, #502441, #cf8aa7);
  color: transparent;
  -webkit-background-clip: text;
  text-align: center;
  white-space: nowrap;
  display: flex;
  align-items: center;
  height: 140px;
  ${clamp('font-size', [MIN_VIEWPORT, MAX_VIEWPORT, 10])};
  .Typewriter__cursor {
    position: absolute;
  }
`

export default P29