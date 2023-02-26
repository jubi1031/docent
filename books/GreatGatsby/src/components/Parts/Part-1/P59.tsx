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

type P59Props = {
    isCurrentPage: boolean
}

const checkItems = [
    '취업 준비생이자 주인공',
    '주위 분위기 잘 파악, 눈치가 빠름',
    '청산유수와도 같은 말솜씨'
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
  border: 2px solid #EF56CE;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.16), 4px 8px 28px rgba(0, 0, 0, 0.08);
  border-radius: 50%;
`

export default P59
