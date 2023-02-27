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

type P21Props = {
  isCurrentPage: boolean
}

const checkItems = [
  '취업 준비생이자 주인공',
  '주위 분위기 잘 파악, 눈치가 빠름',
  '청산유수와도 같은 말솜씨'
]

const P21 = ({ isCurrentPage }: P21Props) => {
  const { openModal, setOpenModal } = useContext(ConfigContext)
  const [tutorial, setTutorial] = useState(false)
  const [fixedButtonDisabled, setFixedButtonDisabled] = useState(0)

  const [paused, setPaused] = useState(false)
  const [_, secondHalfSound] = useSound({
    src: 'sounds/P1-21.mp3',
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
        <img src="/images/part1/P21.jpg" alt="" />
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
        backdrop={'/images/part1/P21.jpg'}
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
      messages: ['실제로도 꿈을\많이 꾼다는 사람과 또\n꿈을 꾸지 않는다는\n사람이 있잖아요.\n이게 어떤 차이일까요?']
    },
    {
      user: 'yang',
      messages: ["꿈이라는 것을 우리가 꾼다는게\n수면 단계에서 봤을 때\n'렘수면'이라는 단계에서\n하는 행위입니다.",
    '렘수면 같은 경우는 얕은\n잠이라고 생각을 하시면 돼요.\n그래서 깊은 숙면을 많이\n취하시는 분들은\n꿈을 안 꾸거나 덜 꾸거나,\n아니면 좀 적게 꾸거나 기억을 못하거나 이렇게 되고요.',
  '수면의 질이 좀 안 좋고\n얕은 분들이 꿈에 대해서\n기억을 많이 하게 되는데,\n나이를 먹을수록 우리가 \n자연스렁누 노화현상으로\n수면의 질 자체가 좀 얕아져요.',
"'나는 왜 꿈을 안 꿀까?'\n그런 걸 걱정하실 필요는 없고\n꿈을 너무 많이 꾸신다는 분들은 \n내가 '수면의질이 좀 괜찮나?'\n한번쯤은 생각을 해보실 필요가\n있을 것 같아요."]

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
  left: 69%;
  top: 47.5%;
  border: 2px solid #ef56ce;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.16), 4px 8px 28px rgba(0, 0, 0, 0.08);
  border-radius: 50%;
`

export default P21
