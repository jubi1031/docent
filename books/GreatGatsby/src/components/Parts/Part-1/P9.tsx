import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import Modal from '@/components/Modal'
import CheckList from '../../CheckList'
import { motion } from 'framer-motion'
import { ConfigContext } from '@/components/ConfigContext'
import Icons from '../../Icons'
import FixedButton from '@/components/Modal/FixedButton'

type P9Props = {
  isCurrentPage: boolean
}

const checkItems = [
  '높은 수준의 연봉',
  '화려하고 고풍스러운 직장 환경',
  '고가 상품을 무료 제공하는 직원 복지',
  '혈통까지 완벽한 멋진 사장님',
  '마을 랜드마크에서 일한다는 명예'
]

const P9 = ({
  isCurrentPage
}: P9Props) => {
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
        <img src="/images/part1/P9.jpg" alt="" />
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
        backdrop={'/images/part1/P9_features.jpg'}
        isVisible={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Features>
          <img src="/images/part1/P9_features.jpg" width="44%" alt="" />
          <strong>페니가 꼭 직원이 되고 싶었던 이유</strong>
        </Modal.Features>
        <Modal.Details>
          <CheckList>
            {checkItems.map((text, i) => {
              return (
                <CheckList.Item
                  key={i}
                  onChange={(checked) => {
                    const value = Math.max(checked ? fixedButtonDisabled + 1 : fixedButtonDisabled - 1, 0)
                    setFixedButtonDisabled(value)
                  }}
                >
                  {text}
                </CheckList.Item>
              )
            })}
          </CheckList>
        </Modal.Details>
        <FixedButton
          disabled={fixedButtonDisabled < checkItems.length}
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
  top: 60.59%;
  border: 2px solid #A451F7;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.16), 4px 8px 28px rgba(0, 0, 0, 0.08);
  border-radius: 50%;
`

export default P9