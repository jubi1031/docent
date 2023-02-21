import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import Modal from '@/components/Modal'
import TextList from '../../TextList'
import { motion } from 'framer-motion'
import { ConfigContext } from '@/components/ConfigContext'
import Icons from '../../Icons'

import FixedButton from '@/components/Modal/FixedButton'

type P11Props = {
    isCurrentPage: boolean
}

const textItems = [
    '신입 한 달 차에 은행 심부름을 갔다가 화폐의 일종인 감정이 담긴 병을 도둑맞음'
]

const P11 = ({
    isCurrentPage
}: P11Props) => {
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
                <img src="/images/part1/P11.jpg" alt="" />
                {isCurrentPage && (
                    <Button
                        type="button"
                        onClick={() => setOpenModal(true)}
                        initial={{ opacity: 0, scale: 0.6 }}
                        transition={{ type: 'spring', duration: .36, delay: 0.2 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        {modalConfirm ? <Icons.ReviewCheck /> : <Icons.Review />}
                    </Button>
                )}
            </Imgs>
            <Modal
                backdrop={'/images/part1/P11_features.jpg'}
                isVisible={openModal}
                onClose={() => setOpenModal(false)}
            >
                <Modal.Features>
                    <strong>어떤 사고를 쳤을까?</strong>
                    <img src="/images/part1/P11_features.jpg" width="44%" alt="" />
                </Modal.Features>
                <Modal.Details>
                    <TextList label={'버튼을 눌러 페니가 친 사고를 알아보세요.'}>
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
  left: 28.3%;
  top: 36%;
  border: 2px solid #0073CB;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.16), 4px 8px 28px rgba(0, 0, 0, 0.08);
  border-radius: 50%;
`

const Paragraph = styled.p`
  padding-bottom: 56px;
`

export default P11