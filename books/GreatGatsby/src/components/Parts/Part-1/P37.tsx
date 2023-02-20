import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import Modal from '@/components/Modal'
import TextList from '../../TextList'
import { motion } from 'framer-motion'
import { ConfigContext } from '@/components/ConfigContext'
import Icons from '../../Icons'

import FixedButton from '@/components/Modal/FixedButton'

type P30Props = {
  isCurrentPage: boolean
}

const textItems = [
  '그는 무척 친절해요. 지난번 개츠비 씨 파티에 왔을 때 의자에 걸려 옷이 찢어졌는데, 그분이 비싼  새 이브닝드레스 한 벌을 소포로 보내왔어요.',
  '그 사람은 누구와도 말썽이 생기는 걸 원치 않아요. 듣기로는 그가 사람을 죽인 적이 있대요.',
  '나는 독일에서 그와 함께 자란 사람한테 들었어, 그 사람은 전쟁 중에 독일 스파이였다던데?'
]

const P30 = ({
  isCurrentPage
}: P30Props) => {
  const { openModal, setOpenModal } = useContext(ConfigContext)
  const [modalConfirm, setModalConfirm] = useState(false)
  const [fixedButtonDisabled, setFixedButtonDisabled] = useState(0)

  useEffect(() => {
    if (!openModal) {
      setFixedButtonDisabled(0)
    }
  }, [openModal])

  return (
    <Wrapper>
      <Imgs>
        <img src="/images/part1/P37.jpg" alt="" />
        {isCurrentPage && (
          <Button
            type="button"
            onClick={() => setOpenModal(true)}
            initial={{ opacity: 0, scale: 0.6 }}
            transition={{ type: 'spring', duration: .36, delay: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            {modalConfirm ? <Icons.SearchCheck /> : <Icons.Search />}
          </Button>
        )}
      </Imgs>
      <Modal
        backdrop={'/images/part1/P37_features.jpg'}
        isVisible={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Features>
          <strong>개츠비는 어떤 사람일까?</strong>
          <img src="/images/part1/P37_features.jpg" width="44%" alt="" />
        </Modal.Features>
        <Modal.Details>
          <TextList label={'버튼을 눌러 개츠비의 소문을 알아보세요.'}>
            {textItems.map((text, i) => {
              return (
                <TextList.Item
                  key={i}
                  onChange={(checked) => {
                    const value = Math.max(checked ? fixedButtonDisabled + 1 : fixedButtonDisabled - 1, 0)
                    setFixedButtonDisabled(value)
                  }}
                >
                  {text}
                </TextList.Item>
              )
            })}
          </TextList>
        </Modal.Details>
        <FixedButton
          disabled={fixedButtonDisabled < textItems.length}
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
  left: 62.133%;
  top: 42.48%;
  border: 2px solid #A451F7;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.16), 4px 8px 28px rgba(0, 0, 0, 0.08);
  border-radius: 50%;
`

const Paragraph = styled.p`
  padding-bottom: 56px;
`

export default P30