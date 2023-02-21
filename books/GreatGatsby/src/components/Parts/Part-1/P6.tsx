import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import Modal from '@/components/Modal'
import CheckList from '../../CheckList'
import { motion } from 'framer-motion'
import { ConfigContext } from '@/components/ConfigContext'
import Icons from '../../Icons'

import FixedButton from '@/components/Modal/FixedButton'

type P6Props = {
  isCurrentPage: boolean
}

const checkItems = [
  '시간의 신의 세 번째 제자 후손',
  '엄청 고귀한 혈통',
  '손님을 직접 응대하는 솔선수법 상사',
  '백화점 다락방에서 살고 있음',
  '은근히 워커홀릭'
]

const P6 = ({
  isCurrentPage
}: P6Props) => {
  const { openModal, setOpenModal } = useContext(ConfigContext)
  const [tutorial, setTutorial] = useState(false)
  const [fixedButtonDisabled, setFixedButtonDisabled] = useState(0)

  useEffect(() => {
    if (!openModal) {
      setFixedButtonDisabled(0)
    }
  }, [openModal])

  return (
    <Wrapper>
      <Imgs>
        <img src="/images/part1/P6.jpg" alt="" />
        {isCurrentPage && (
          <Button
            type="button"
            onClick={() => setOpenModal(true)}
            initial={{ opacity: 0, scale: 0.6 }}
            transition={{ type: 'spring', duration: .36, delay: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            {tutorial ? <Icons.SearchCheck /> : <Icons.Search />}
          </Button>
        )}
      </Imgs>
      <Modal
        backdrop={'/images/part1/P6_features.jpg'}
        isVisible={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Features>
          <img src="/images/part1/P6_features.jpg" width="44%" alt="" />
          <strong>페니</strong>
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
            setTutorial(true)
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
  left: 35.5%;
  top: 23.5%;
  border: 2px solid #A451F7;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.16), 4px 8px 28px rgba(0, 0, 0, 0.08);
  border-radius: 50%;
`

export default P6