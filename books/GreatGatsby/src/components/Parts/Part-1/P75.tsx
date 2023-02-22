import { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import Icons from '../../Icons'

type P75Props = {
  isCurrentPage: boolean
}

const P75 = ({
  isCurrentPage
}: P75Props) => {
  const [step, setStep] = useState(0)
  const isShow1 = isCurrentPage && step < 1
  const isShow2 = isCurrentPage && step === 1
  const isShow3 = isCurrentPage && step > 1

  return (
    <Wrapper>
      <Imgs>
        <Img src="/images/part1/P75_1.jpg" style={{ opacity: step >= 0 ? 1 : 0 }} alt="" />
        <Img src="/images/part1/P75_2.jpg" style={{ opacity: step >= 1 ? 1 : 0 }} alt="" />
        <Img src="/images/part1/P75_3.jpg" style={{ opacity: step >= 2 ? 1 : 0 }} alt="" />
        <Img src="/images/part1/P75_4.jpg" style={{ opacity: step >= 3 ? 1 : 0 }} alt="" />
        <SizeImg src="/images/part1/P75_4.jpg" />
        {isShow1 && (
          <Button
            onClick={() => setStep(step + 1)}
            initial={{ opacity: 0, scale: 0.6 }}
            transition={{ type: 'spring', duration: .36, delay: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{
              left: '45%',
              top: '27%'
            }}
          >
            <Icons.Bulb />
          </Button>
        )}
        {isShow2 && (
          <Button
            onClick={() => setStep(step + 1)}
            initial={{ opacity: 0, scale: 0.6 }}
            transition={{ type: 'spring', duration: .36, delay: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{
              left: '65%',
              top: '59%'
            }}
          >
            <Icons.Bulb />
          </Button>
        )}
        {isShow3 && (
          <Button
            initial={{ opacity: 0, scale: 0.6 }}
            transition={{ type: 'spring', duration: .36, delay: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}

            onClick={() => setStep(step + 1)}
            style={{
              left: '45%',
              top: '73%'
            }}
          >
            <Icons.Bulb />
          </Button>
        )}
      </Imgs>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  text-align: center;
  height: 100%;
  img {
    display: block;
    margin: 0 auto;
    max-height: 100vh;
    @media (max-height: 480px) {
      max-height: unset;
    }
  }
`

const Imgs = styled.div`
  position: relative;
  display: inline-flex;
  vertical-align: top;
`

const Img = styled.img`
 position: absolute;
 left: 50%;
 top: 0;
 height: 100%;
 transform: translate(-50%, 0);
 transition-duration: .6s;
 transition-delay: 0s;
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
  width: 10.666%;
  width: 40px;
  height: 40px;
  border: 2px solid #EB683F;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.16), 4px 8px 28px rgba(0, 0, 0, 0.08);
  border-radius: 50%;
`

export default P75