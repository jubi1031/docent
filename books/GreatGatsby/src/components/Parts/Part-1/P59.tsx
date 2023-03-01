import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import Modal from '@/components/Modal'
import CheckList from '../../CheckList'
import { motion } from 'framer-motion'
import { ConfigContext } from '@/components/ConfigContext'
import AudioButton from '@/components/AudioButton'
import Icons from '../../Icons'
import KakaoTalk, { Messages } from '@/components/KakaoTalk'
import { useSound } from '@shared/hooks'

import FixedButton from '@/components/Modal/FixedButton'

type P59Props = {
  isCurrentPage: boolean
}

const messages: Messages[] = [
  {
    user: 'kim',
    messages: ['예지몽이라는 게\n진짜 있는 거에요?']
  },
  {
    user: 'yang',
    messages: [
      '없다고 보시면 돼요.\n얼마 전에도 저한테\n오셨던 내담자분이',
      "'이빨이 빠지는 꿈을 꿨다.\n그러고 나서 얼마 뒤에\n가족분 중에 누가 돌아가셨다.'",
      '이런 얘기를 하셨었단 말이에요.',
      '근데 그것은 제가 보면\n항상 걱정했던 대상이에요.',
      '그 사람이 의식적으로\n알고 있었고 자기도\n그 사람에 대해서 걱정하고 있고.\n뭔가 어떻게든 액션을 \n취해야 된다라는 마음속에서\n항상 짐처럼 있던,',
      '누군가에 대한 생각이 많았기\n때문에 그게 이빨 빠지는 꿈으로\n나타난 것이지 그 꿈을 꾸는 게\n현실로 실현화되고 이런 것은\n아니라고 생각을 합니다.',
      "그래서 '나 예지몽 꿨어!\n그때 그런 꿈 꾸고 \n그런 게 일어났잖아.'",
      '이렇게 얘기 하시는 분들은\n사실은 그 사건이 일어나기 전에\n자기가 계속해서 걱정을 하고 \n있었따거나 혹은 계속해서\n염원하고 있었다거나\n이런 것들이 있었기 때문에\n이제 그게 일어난 것이지\n그 꿈하고는 직접적인 관련은\n없다고 보시는게 맞겠죠.'
    ]
  }
]

const P59 = ({ isCurrentPage }: P59Props) => {
  const { openModal, setOpenModal } = useContext(ConfigContext)
  const [tutorial, setTutorial] = useState(false)
  const [fixedButtonDisabled, setFixedButtonDisabled] = useState(0)

  const [paused, setPaused] = useState(false)
  const [_, secondHalfSound] = useSound({
    src: 'sounds/P1-59.mp3',
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
        <img src="/images/part1/P59.jpg" alt="" />
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
        backdrop={'/images/part1/P59.jpg'}
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
  left: 41%;
  top: 22%;
  border: 2px solid #ef56ce;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.16), 4px 8px 28px rgba(0, 0, 0, 0.08);
  border-radius: 50%;
`

export default P59
