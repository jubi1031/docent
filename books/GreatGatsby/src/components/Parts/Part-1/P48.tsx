import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import Modal from '@/components/Modal'
import CheckList from '../../CheckList'
import { motion } from 'framer-motion'
import { ConfigContext } from '@/components/ConfigContext'
import Icons from '../../Icons'

import FixedButton from '@/components/Modal/FixedButton'

type P48Props = {
  isCurrentPage: boolean
}

const checkItems = [
  '조지 윌슨의 아내',
  '생동감 넘치는 분위기의 활발한 성격 ',
  '남편 몰래 톰과 만나고 있으며, 톰의 부인인 데이지를 질투함'
]

const P48 = ({
  isCurrentPage
}: P48Props) => {
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
        <img src="/images/part1/P48.jpg" alt="" />
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
        backdrop={'/images/part1/P48_features.jpg'}
        isVisible={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Features>
          <img src="/images/part1/P48_features.jpg" width="44%" alt="" />
          <strong>머틀 윌슨</strong>
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
  left: 58.66%;
  top: 25.86%;
  border: 2px solid #A451F7;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.16), 4px 8px 28px rgba(0, 0, 0, 0.08);
  border-radius: 50%;
`

export default P48