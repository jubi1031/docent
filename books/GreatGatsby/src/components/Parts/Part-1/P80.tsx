import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import Modal from '@/components/Modal'
import { motion } from 'framer-motion'
import { ConfigContext } from '@/components/ConfigContext'
import Icons from '../../Icons'

import FixedButton from '@/components/Modal/FixedButton'

type P80Props = {
  isCurrentPage: boolean
}

const P80 = ({
  isCurrentPage
}: P80Props) => {
  const { openModal, setOpenModal } = useContext(ConfigContext)
  const [modalConfirm, setModalConfirm] = useState(false)

  return (
    <Wrapper>
      <img src="/images/part1/P80.jpg" alt="" />
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
      <Modal
        backdrop={'/images/part1/P80_features.jpg'}
        isVisible={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Features>
          <img src="/images/part1/P80_features.jpg" width="87%" alt="" />
        </Modal.Features>
        <Modal.Details>
          <Paragraph>
            그날 오후 뉴욕으로 향할 때, 그들은 차를 바꿔탔다.<br /> 푸른색 톰의 차에 개츠비와 데이지가, 노란색 개츠비의 차에 톰, 조던, 닉이 탑승했다. 마침 들른 정비소에서 머틀은 톰이 노란색 차에 타고 있는 것을 보았고, 남편과의 말싸움 뒤에 뉴욕에서 다시 돌아오는 노란 차를 보고 톰이 탄 것으로 착각하여 뛰어든 것으로 보인다. 그러나 차에는 원래 주인인 개츠비와 데이지가 타고 있었다.
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
  img {
    display: block;
    margin: 0 auto;
    max-height: 100vh;
   @media (max-height: 480px) {
     max-height: unset;
   }
  }  
`

const Button = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  position: absolute;
  left: 68.8%;
  top: 45.68%;
  border: 2px solid #0073CB;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.16), 4px 8px 28px rgba(0, 0, 0, 0.08);
  border-radius: 50%;
`

const Paragraph = styled.p`
  padding-bottom: 56px;
`

export default P80