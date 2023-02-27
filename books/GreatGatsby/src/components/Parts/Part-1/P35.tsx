import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import Modal from '@/components/Modal'
import CheckList from '../../CheckList'
import { motion } from 'framer-motion'
import { ConfigContext } from '@/components/ConfigContext'
import AudioButton from '@/components/AudioButton'
import Icons from '../../Icons'
import { useSound } from '@shared/hooks'

import FixedButton from '@/components/Modal/FixedButton'

type P35Props = {
  isCurrentPage: boolean
}

const checkItems = [
  '취업 준비생이자 주인공',
  '주위 분위기 잘 파악, 눈치가 빠름',
  '청산유수와도 같은 말솜씨'
]

const P35 = ({ isCurrentPage }: P35Props) => {
  const { openModal, setOpenModal } = useContext(ConfigContext)
  const [tutorial, setTutorial] = useState(false)
  const [fixedButtonDisabled, setFixedButtonDisabled] = useState(0)

  const [paused, setPaused] = useState(false)
  const [_, secondHalfSound] = useSound({
    src: 'sounds/P1-35.mp3',
    volume: 0.5,
    loop: false
  })

  const handleOpenModal = () => {
    setOpenModal(true)
    setPaused(false)
    secondHalfSound.play()
  }

  const handleCloseModal = () => {
    setOpenModal(false)
    secondHalfSound.stop()
  }

  const handleToggleAudio = () => {
    setPaused((prev) => {
      if (prev) secondHalfSound.play()
      else secondHalfSound.pause()
      return !prev
    })
  }

  useEffect(() => {
    if (!openModal) {
      setFixedButtonDisabled(0)
    }
  }, [openModal])

  useEffect(() => {
    secondHalfSound.stop()
  }, [])

  return (
    <Wrapper>
      <Imgs>
        <img src="/images/part1/P35.jpg" alt="" />
        {isCurrentPage && (
          <Button
            type="button"
            onClick={handleOpenModal}
            initial={{ opacity: 0, scale: 0.6 }}
            transition={{ type: 'spring', duration: 0.36, delay: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}>
            {tutorial ? <Icons.SpeakCheck /> : <Icons.Speak />}
          </Button>
        )}
      </Imgs>
      <Modal
        backdrop={'/images/part1/P35.jpg'}
        isVisible={openModal}
        onClose={handleCloseModal}>
        <Modal.Features>
          <img src="/images/part1/P5_features.jpg" width="44%" alt="" />
          <strong>페니</strong>
        </Modal.Features>
        <Modal.Details>
          <CheckList>
            {checkItems.map((text, i) => {
              return (
                <CheckList.Item
                  key={i}
                  onChange={(checked) => {
                    const value = Math.max(
                      checked
                        ? fixedButtonDisabled + 1
                        : fixedButtonDisabled - 1,
                      0
                    )
                    setFixedButtonDisabled(value)
                  }}>
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
        {openModal && (
          <AudioButton paused={paused} onToggle={handleToggleAudio} />
        )}
      </Modal>
    </Wrapper>
  )
}

/*
const messages: Messages[] = [
    {
      user: 'kim',
      messages: ["거래처 직원이 나오는 꿈을\n반복적으로 꾸고 난 후,\n'내가 그 사람을\n짝사랑하고 있나?'\n고민하는 '미영'이 있었는데요."]
    },
    {
      user: 'yang',
      messages: ["우리가 '자이가르닉 효과'\n라고 해서 내가 이루지 못한\n미완결의 것을 뇌는 \n각인을 시켜놔요.\n그래서 첫사랑을 잊지\n못한다는게 그래서 \n나오는 것이거든요.",
    '해결되지 않은\n숙제가 있는 경우에 뇌는 \n이제 그것을 언젠가는\n해야 된느 무언가라고\n강박적으로 기억을 하는\n부분이 있습니다.',
  '내가 의식적으로 그 사람을\n정말 좋아하는 부분에 대해서\n대부분 이제 짝사랑을 하면\n알게 되잖아요?',
'그런데 그것을 차마\n인지하기도 전에 혹은\n인지하지 못한 상태에서\n뭔가 자꾸 거슬린다거나,\n뭔가 눈에 밝힌다거나,\n이런 것들이 있을 때,'
"자기 감정을 잘 인지하지\n못하시는 분들은\n'자이가르닉 효과'처럼\n해결되지 않은 숙제처럼\n남겨져 있어서 그게 꿈에서\n재현될 가능성은 있다라고\n생각을 합니다."]

    },

*/

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
  left: 69.8%;
  top: 35%;
  border: 2px solid #EF56CE;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.16), 4px 8px 28px rgba(0, 0, 0, 0.08);
  border-radius: 50%;
`

export default P35
