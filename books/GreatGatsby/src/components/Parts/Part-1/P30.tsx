import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import Modal from '@/components/Modal'
import { motion } from 'framer-motion'
import { ConfigContext } from '@/components/ConfigContext'
import Icons from '../../Icons'

import FixedButton from '@/components/Modal/FixedButton'

type P30Props = {
  isCurrentPage: boolean
}

const P30 = ({
  isCurrentPage
}: P30Props) => {
  const { openModal, setOpenModal } = useContext(ConfigContext)
  const [modalConfirm, setModalConfirm] = useState(false)

  return (
    <Wrapper>
      <Imgs>
        <img src="/images/part1/P30.jpg" alt="" />
        {isCurrentPage && (
          <Button
            type="button"
            onClick={() => setOpenModal(true)}
            initial={{ opacity: 0, scale: 0.6 }}
            transition={{ type: 'spring', duration: .36, delay: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            {modalConfirm ? <Icons.ReviewCheck /> : <Icons.Review />}
          </Button>
        )}
      </Imgs>
      <Modal
        backdrop={'/images/part1/P30_features.jpg'}
        isVisible={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Features>
          <img src="/images/part1/P30_features.jpg" width="87%" alt="" />
        </Modal.Features>
        <Modal.Details>
          <Paragraph>
          미국에서는 1920년대 초반부터 1933년까지 금주법이 시행되었다. 이 법에 따라 종교적 목적으로 사용되는 일부를 제외하고는 술을 제조하거나 유통하는 모든 행위가 강력하게 금지되었다.<br />
          금주법이 만들어진 배경에는 제1차 세계대전으로 부족해진 식량(곡물)의 전용을 방지하고, 음주로 인한 사회적 폐해를 예방하며, 당시 양조업으로 경제적 부를 쌓던 독일 이민자 층을 견제하려는 목적 등이 있었다.<br />
          그러자 사람들은 다른 방식으로 술을 구하기 시작했다. 술을 마시러 교회를 다니거나, 건포도에 물을 타 홈메이드 와인을 만드는 일도 생겼다. 불법 밀주업자와 밀수업자들이 크게 늘어남과 동시에 심지어 병원과 약국에서 ‘의료용 알코올’이라는 이름 아래 술을 팔기도 했다.<br />
          불법으로 생산된 술을 마시고 눈이 멀어버리거나 심장마비로 죽는 사람들이 생기기도 했고, ‘알 카포네’로 대표되는 마피아 세력이 이 시기 밀주, 밀수업을 통해 큰 부를 축적했다. 또한 간판이 없고, 은밀하게 출입할 수 있는 ‘스피크이지 바(Speakeasy Bar)’가 생겨난 것도 바로 이 시기이다.
          </Paragraph>
        </Modal.Details>
        <FixedButton
          disabled={false}
          onClick={(event) => {
            event.stopPropagation()
            setOpenModal(false)
            setModalConfirm(true)
          }}
        />
      </Modal>      
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  text-align: center;
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

const Button = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  position: absolute;
  left: 57.06%;
  top: 19.58%;
  border: 2px solid #0073CB;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.16), 4px 8px 28px rgba(0, 0, 0, 0.08);
  border-radius: 50%;
`

const Paragraph = styled.p`
  padding-bottom: 56px;
`

export default P30