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

type P53Props = {
    isCurrentPage: boolean
}

const checkItems = [
    '취업 준비생이자 주인공',
    '주위 분위기 잘 파악, 눈치가 빠름',
    '청산유수와도 같은 말솜씨'
]

const P53 = ({ isCurrentPage }: P53Props) => {
    const { openModal, setOpenModal } = useContext(ConfigContext)
    const [tutorial, setTutorial] = useState(false)
    const [fixedButtonDisabled, setFixedButtonDisabled] = useState(0)

    const [paused, setPaused] = useState(false)
    const [_, secondHalfSound] = useSound({
        src: 'sounds/P1-53.mp3',
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
                <img src="/images/part1/P53.jpg" alt="" />
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
                backdrop={'/images/part1/P53.jpg'}
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
      messages: ["등장인물 '나림'이처럼\n연애를 오랫동안 안 한 사람들이\n스스로 연애 감정이 메말랐다라는\n얘기를 많이 하잖아요.\n실제로 그 연애감정,\n메마를 수 있는 겁니까?",
    ]
    },
    {
      user: 'yang',
      messages: ["그럴 수 있습니다.\n연애를 한다라는 건,\n사랑에 빠진다라는 것은\n뇌과학적으로 보면 '도파민'이\n나오기 시작을 하는 거고요.",
    "'도파민'이라는 것은 우리가\n기분 좋은 활동이나 재미있는\n경험이나 이런 걸 할 때 뇌에서\n나오는 신경 전달 물질인데,\n안 나오기 시작을 하면,\n그쪽 회로를 안 건들기 시작을\하면 잘 안 나옵니다.",
"이렇게 어떤 특정한 누군가와\n사랑에 빠지는, 그렇기 때문에\n'도파민'이 나오게 되는. 그래서\n기분이 좋아지는 경험을 많이\n하신는 분들은 계속해서 연애를\n반복해서 하시는 게 그렇게\n때문이라고 볼 수가 있는데,",
"물론 이게 지나치면 중독으로\n가게 되는 것이고 그래서\n'관계 중독이다'\n이런 말도 있는 겁니다.\n어쨌든 간에 연애를 계속\n안 하시는 분들은 그 회로 자체가 \n어느 정도 작동을 안 하고 있다."
'공장으로 치면 이제 \n가동이 안 되고 있다.\n이렇게 생각을 하시면\n될 것 같아서\n이런 분들 같은 경우에는\n어쨌든 연애를 좀 \n하실 필요가 있겠죠.]

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
  left: 25%;
  top: 39%;
  border: 2px solid #EF56CE;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.16), 4px 8px 28px rgba(0, 0, 0, 0.08);
  border-radius: 50%;
`

export default P53
