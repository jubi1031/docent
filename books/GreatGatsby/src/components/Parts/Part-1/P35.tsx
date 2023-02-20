import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import Modal from '@/components/Modal'
import { motion } from 'framer-motion'
import { ConfigContext } from '@/components/ConfigContext'
import Icons from '../../Icons'

type P35Props = {
  isCurrentPage: boolean
}

const P35 = ({
  isCurrentPage
}: P35Props) => {
  const [step, setStep] = useState(0)
  const isShow = isCurrentPage && step < 1

  return (
    <Wrapper>
      <Imgs>
        <Img src="/images/part1/P35_1.jpg" style={{ opacity: step >= 0 ? 1 : 0 }} alt="" />
        <Img src="/images/part1/P35_2.jpg" style={{ opacity: step >= 1 ? 1 : 0 }} alt="" />

        <SizeImg src="/images/part1/P35_2.jpg" />
        {isShow && (
          <Button
            initial={{ opacity: 0, scale: 0.6, x: `${-50}%` }}
            transition={{ type: 'spring', duration: .36, delay: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={() => setStep(step + 1)}
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  position: absolute;
  left: 26.93%;
  top: 23.399%;
  border: 2px solid #EB683F;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.16), 4px 8px 28px rgba(0, 0, 0, 0.08);
  border-radius: 50%;
`

export default P35