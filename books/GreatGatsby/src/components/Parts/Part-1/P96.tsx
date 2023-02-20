import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import Modal from '@/components/Modal'
import { motion } from 'framer-motion'
import { ConfigContext } from '@/components/ConfigContext'
import Icons from '../../Icons'

import FixedButton from '@/components/Modal/FixedButton'

type P96Props = {
  isCurrentPage: boolean
}

const P96 = ({
  isCurrentPage
}: P96Props) => {
  const { openModal, setOpenModal } = useContext(ConfigContext)
  const [modalConfirm, setModalConfirm] = useState(false)

  return (
    <Wrapper>
      <Imgs>
        <img src="/images/part1/P96.jpg" alt="" />
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
        backdrop={'/images/part1/P96_features.jpg'}
        isVisible={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Features>
          <strong>개츠비의 진짜 이야기</strong>
          <img src="/images/part1/P96_features.jpg" width="45%" alt="" />
        </Modal.Features>
        <Modal.Details>
          <Paragraph>
            개츠비는 서부 노스다코타의 가난한 농부의 아들로 태어났고, 교육도 제대로 받지 못했다. 하지만 호화로운 요트를 소유한 어느 부자를 위기에서 구해준 일을 계기로 그와 함께 5년을 지내면서, 개츠비는 부자들의 말투, 행동, 매너 등을 배울 수 있었다. <br />
            그 뒤 1차 세계대전 참전 중 데이지를 만난 개츠비는 한 눈에 그녀와 사랑에 빠졌지만, 데이지 집안과의 신분 차이를 절감할 수 밖에 없었다. 이후 해외로 파병을 가며 결국 그녀에게 돌아가지 못했고, 데이지가 톰과 결혼했다는 사실을 알고 슬퍼할 뿐이었다.
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
  left: 61.33%;
  top: 78.44%;
  border: 2px solid #0073CB;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.16), 4px 8px 28px rgba(0, 0, 0, 0.08);
  border-radius: 50%;
`

const Paragraph = styled.p`
  padding-bottom: 56px;
`

export default P96