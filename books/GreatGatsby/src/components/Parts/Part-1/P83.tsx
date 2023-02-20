import { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Icons from '../../Icons'

type P83Props = {
  isCurrentPage: boolean
}

const P83 = ({
  isCurrentPage
}: P83Props) => {
  const [step, setStep] = useState(0)
  const isShow = isCurrentPage && step < 1

  return (
    <Wrapper>
      <Images>
        <Img src="/images/part1/P83_1.jpg" style={{ opacity: step >= 0 ? 1 : 0 }} alt="" />
        <Img src="/images/part1/P83_2.jpg" style={{ opacity: step >= 1 ? 1 : 0 }} alt="" />
        <HideImg src="/images/part1/P83_1.jpg" alt="" />
        {step > 0 && (<>
          <Text initial={{ opacity: 0, scale: 1.3 }} transition={{ duration: 0.8, delay: 0.2 }} animate={{ opacity: 1, scale: 1 }} size={33} left={'13px'} top={'20.32%'}>제발 그만해요</Text>
          <Text initial={{ opacity: 0, scale: 1.3 }} transition={{ duration: 0.8, delay: 0.6 }} animate={{ opacity: 1, scale: 1 }} size={28} right={'12px'} top={'28.81%'}>그걸로 충분하지 않은가요?</Text>
          <Text initial={{ opacity: 0, scale: 1.3 }} transition={{ duration: 0.6, delay: 0.8 }} animate={{ opacity: 1, scale: 1 }} size={28} left={'4px'} top={'38.17%'}>당신은 너무 많은 것을 원해요!</Text>
          <Text initial={{ opacity: 0, scale: 1.3 }} transition={{ duration: 0.6, delay: 1.1 }} animate={{ opacity: 1, scale: 1 }} size={26} right={'10px'} top={'47.29%'}>저 사람을 한 번쯤은<br />사랑했단 말이에요</Text>
          <Text initial={{ opacity: 0, scale: 1.3 }} transition={{ duration: 0.6, delay: 1.2 }} animate={{ opacity: 1, scale: 1 }} size={20} left={'12px'} top={'57.75%'}>난 지금 당신을 사랑하고 있어요</Text>
          <Text initial={{ opacity: 0, scale: 1.3 }} transition={{ duration: 0.6, delay: 1.3 }} animate={{ opacity: 1, scale: 1 }} size={33} right={'4px'} top={'64.778%'}>이제 더이상 못 참겠어요</Text>
          <Text initial={{ opacity: 0, scale: 1.3 }} transition={{ duration: 0.6, delay: 1.4 }} animate={{ opacity: 1, scale: 1 }} size={25} left={'4px'} top={'72%'}>톰을 사랑한 적이 없었다고는<br />말할 수 없어요</Text>
        </>)}
        {isShow && (
          <Button
            initial={{ opacity: 0, scale: 0.6 }}
            transition={{ type: 'spring', duration: .36, delay: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={() => setStep(step + 1)}
          >
            <Icons.Bulb />
          </Button>
        )}
      </Images>
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

const Images = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: top;
  align-items: center;
  font-size: 0;
  text-align: center;
`

const Img = styled.img`
  position: absolute;
  left: 50%;
  top: 0;
  max-height: 100vh;
  transform: translate(-50%, 0);
  transition-duration: .6s;
  transition-delay: 0s;
`

const HideImg = styled.img`
  pointer-events: none;
  opacity: 0;
  height: 100%;
  overflow: hidden;
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
  left: 44.80%;
  top: 85%;
  border: 2px solid #EB683F;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.16), 4px 8px 28px rgba(0, 0, 0, 0.08);
  border-radius: 50%;
`

const Text = styled(motion.span)<{ size: number, top?: string, left?: string, right?: string }>`
  position: absolute;
  left: ${({ left }) => left};
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  font-family: 'NanumMyeongjoBold', serif;
  font-size: ${({ size }) => size}px;
  white-space: nowrap;
  color: #000;
  text-align: center;
  line-height: 1.2;
  letter-spacing: -0.05em;
`

export default P83