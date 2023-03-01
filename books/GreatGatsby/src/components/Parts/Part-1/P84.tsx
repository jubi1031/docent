import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import Modal from '@/components/Modal'
import CheckList from '../../CheckList'
import { motion } from 'framer-motion'
import { ConfigContext } from '@/components/ConfigContext'
import AudioButton from '@/components/AudioButton'
import Icons from '../../Icons'
import KakaoTalk, { Messages, Comment, ImageBox } from '@/components/KakaoTalk'
import { useSound } from '@shared/hooks'

import FixedButton from '@/components/Modal/FixedButton'

type P84Props = {
  isCurrentPage: boolean
}

const messages: Messages[] = [
  {
    user: 'kim',
    messages: [
      "책에서 예지몽을 다른 말로\n'데자뷔'라고 표현을 하거든요.\n'데자뷔'라는 거는 어떤 현상일까요?"
    ]
  },
  {
    user: 'yang',
    messages: [
      "'데자뷔'하고\n'자메이스뷰'라는 게 있는데요.",
      "'데자뷔'라는 건 뇌에서\n흔하게 일어나는 착각이에요.",
      "여러분 다 아시다시피\n처음 겪었던 일인데\n'내가 이거를 경험한 것 같아!'\n이런 식의 해석을 하는 게\n'데자뷔'잖아요.",
      "'자메이스뷰' 같은 경우는\n반대로 이전에 했떤 건데도\n불구하고 너무 나한테 \n새롭게 느껴지는 이런것을\n'자메이스뷰'라고 \n얘기를 하거든요.",
      '근데 이거는 흔하게 생길 수 있는\n프로그램의 오류죠. 착각이다.\n이렇게 생각을 하시면 될 것 같고,\n역시나 굉장히 큰 의미를\n부여하는 건 좀 무리수가 있다.\n이렇게 생각을 합니다.'
    ]
  }
]

const P84 = ({ isCurrentPage }: P84Props) => {
  const { openModal, setOpenModal } = useContext(ConfigContext)
  const [tutorial, setTutorial] = useState(false)
  const [fixedButtonDisabled, setFixedButtonDisabled] = useState(0)

  const [paused, setPaused] = useState(false)
  const [_, secondHalfSound] = useSound({
    src: 'sounds/P1-84.mp3',
    volume: 0.5,
    loop: false
  })

  const [messageEnd, setMessageEnd] = useState(false)

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
      setMessageEnd(false)
    }
  }, [openModal])

  useEffect(() => {
    secondHalfSound.stop()
  }, [])

  return (
    <Wrapper>
      <Imgs>
        <img src="/images/part1/P84.jpg" alt="" />
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
        backdrop={'/images/part1/P84.jpg'}
        isVisible={openModal}
        onClose={handleCloseModal}
        talkInside>
        {}
        <KakaoTalk messages={messages} setMessageEnd={setMessageEnd} />
        <FixedButton
          disabled={!messageEnd}
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
  left: 60%;
  top: 63%;
  border: 2px solid #ef56ce;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.16), 4px 8px 28px rgba(0, 0, 0, 0.08);
  border-radius: 50%;
`

export default P84
