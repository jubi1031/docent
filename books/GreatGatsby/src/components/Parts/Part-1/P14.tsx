import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import Modal from '@/components/Modal'
import { motion } from 'framer-motion'
import { ConfigContext } from '@/components/ConfigContext'
import Icons from '../../Icons'

import FixedButton from '@/components/Modal/FixedButton'

type P14Props = {
  isCurrentPage: boolean
}

const P14 = ({
  isCurrentPage
}: P14Props) => {
  const { openModal, setOpenModal } = useContext(ConfigContext)
  const [modalConfirm, setModalConfirm] = useState(false)

  return (
    <Wrapper>
      <Imgs>
        <img src="/images/part1/P14.jpg" alt="" />
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
        backdrop={'/images/part1/P14_features.jpg'}
        isVisible={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Features>
          <img src="/images/part1/P14_features.jpg" width="87%" alt="" />
        </Modal.Features>
        <Modal.Details>
          <Paragraph>
            합쳐서 거대한 달걀 모양을 연상시키는 두 지역은 뉴욕시에서 30킬로미터 정도 떨어진 곳에, 아주 작은 만을 사이에 두고 위치해 있다. <br />
            지형뿐만 아니라 거대하고 화려한 저택들이 줄지어 있다는 점에서 두 지역은 닮았지만, 이스트에그 지역이 가문 대대로 부유한 부자들이 사는 반면, 웨스트에그 지역에는 당시의 경제 상황에 힘입어 부유해진 신흥 부자들이 주로 살고 있었다는 차이점이 있다. <br />
            닉은 웨스트에그 지역에 대해 ‘두 지역 중에서 상류 사회 다운 면이 덜한 곳’ 이라고 말하는데, 이러한 배경에서 나온거리감이 두 지역 사람들에게 있었던 것으로 보인다.            
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
  left: 32.26%;
  top: 26.35%;
  border: 2px solid #0073CB;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.16), 4px 8px 28px rgba(0, 0, 0, 0.08);
  border-radius: 50%;
`

const Paragraph = styled.p`
  padding-bottom: 56px;
`

export default P14