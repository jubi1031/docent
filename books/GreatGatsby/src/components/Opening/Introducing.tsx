import Modal from '@/components/Modal'
import WriterDetails from './WriterDetails'
import { useState } from 'react'
import styled, { keyframes } from 'styled-components'

const Introducing = (): any => {
  const [name, setName] = useState('yang')
  const handleClick = () => {
    setName(name === 'yang' ? 'kim' : 'yang')
  }
  return (
    <>
      <Modal.Features>
        <ButtonWrapper onClick={handleClick}>
          <Button></Button>
          {name === 'yang' ? (
            <Image src="/images/opening/doctor.jpg" width="50%" alt="" />
          ) : (
            <Image src="/images/opening/announcer.jpg" width="50%" alt="" />
          )}
          <Button></Button>
        </ButtonWrapper>
        <DotWrapper>
          <Dot selected={name === 'yang'} />
          <Dot selected={name === 'kim'} />
        </DotWrapper>
      </Modal.Features>

      <Modal.Details>
        <WriterDetails>
          {name === 'yang' ? (
            <>
              <strong>양재웅</strong>
              <span>정신과 전문의</span>
              <p>
                정신의학 전문이며 W진병원 대표원장이다.
                <br />
                현재는 방송인을 겸하고 있으며
                <br />
                미스틱스토리에 소속되어있다.
              </p>
            </>
          ) : (
            <>
              <strong>김해나</strong>
              <span>아나운서</span>
              <p>
                2015년 인터넷스포츠방송으로 데뷔했고
                <br />
                2016년 TV에서 본격적으로 활동하기 시작했다.
                <br />
                유튜브 채널에서 &lt;라운드원&gt; 랭킹쇼 단독 MC를 맡기도 했다.
              </p>
            </>
          )}
        </WriterDetails>
      </Modal.Details>
    </>
  )
}

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const Image = styled.img`
  animation: ${fade} 1.5s;
  pointer-events: none;
`

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Button = styled.div`
  cursor: pointer;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  user-select: none;
  background-color: unset;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`

const DotWrapper = styled.div`
  width: 100%;
  height: 0;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`

const Dot = styled.div<{ selected: boolean }>`
  height: 6.5px;
  width: 6.5px;
  margin: 4px;
  margin-top: 22px;
  background-color: ${(props) => (props.selected ? '#111' : '#bbb')};
  border-radius: 50%;
`

export default Introducing
