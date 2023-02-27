import { ReactNode } from 'react'
import styled from 'styled-components'

type CommentaryProps = {
  children?: ReactNode
}

const Message = ({ children }: CommentaryProps) => {
  return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.div`
  display: inline-block;
  flex-direction: column;
  height: 100vh;
  @media (max-height: 480px) {
    height: auto;
  }
`

const All = styled.div`
  margin: 0 10px;
  overflow-y: scroll;
`

const Background = styled.div`
  height: 900px;
  background-position: top;
  content: '';
  position: relative;
  background-image: url('/images/part2/C1_0.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  pointer-events: none;
`

const BackgroundH = styled.div`
  background-position: top;
  content: '';
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  pointer-events: none;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(18px);
    pointer-events: none;
    min-height: 100vh;
  }
`

const NameL = styled.div`
  display: inline-block;
  margin-left: 5px;
  margin-bottom: 3px;
  width: 150px;
  flex-direction: column;
  gap: 5px;
  color: white;
`

const NameR = styled.div`
  display: inline-block;
  margin-right: 5px;
  margin-bottom: 3px;
  width: 200px;
  text-align: right;
  flex-direction: column;
  gap: 5px;
  color: white;
`
const blockL = styled.div`
  display: inline-block;
  width: 40px;
  height: 50px;
`

const ChatWrapper = styled.div`
  display: inline-block;
  margin-bottom: 5px;
  align-items: flex-end;
  gap: 5px;
  padding: 13px 15px;
  border-radius: 20px;
  background-color: white;
  font-family: 'Spoqa Han Sans Neo';
  font-weight: 500;
`
const ChatWrapperF = styled.div`
  display: inline-block;
  margin-bottom: 5px;
  align-items: flex-end;
  gap: 5px;
  padding: 0px 15px 10px 15px;
  border-radius: 20px;
  background-color: white;
  font-family: 'Spoqa Han Sans Neo';
`

const ChatWrapperRF = styled.div`
  display: inline-block;
  margin-bottom: 5px;
  align-items: flex-end;
  gap: 5px;
  padding: 0px 15px 10px 15px;
  border-radius: 20px;
  background-color: #ffeb60;
  font-family: 'Spoqa Han Sans Neo';
`
const ChatWrapperR = styled.div`
  display: inline-block;
  margin-bottom: 5px;
  margin-right: 40px;
  align-items: flex-end;
  gap: 5px;
  padding: 10px 15px;
  border-radius: 20px;
  background-color: #ffeb60;
  font-family: 'Spoqa Han Sans Neo';
`

const ProfileImageL = styled.img`
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 15px;
  object-fit: cover;
  opacity: ${({ selected }: { selected?: boolean }) =>
    selected ? '50%' : '100%'};
`

const ProfileImageR = styled.img`
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 30px;
  object-fit: cover;
  opacity: ${({ selected }: { selected?: boolean }) =>
    selected ? '50%' : '100%'};
`

const ImageL = styled.img`
  display: block;
  float: left;
  width: 160px;
  height: 160px;
  margin-bottom: 5px;
  margin-left: 40px;
  border-radius: 30px;
  object-fit: cover;
  opacity: ${({ selected }: { selected?: boolean }) =>
    selected ? '50%' : '100%'};
`

const ImageR = styled.img`
  display: block;
  float: Right;
  width: 160px;
  height: 160px;
  margin-bottom: 5px;
  margin-left: 50px;
  margin-right: 40px;
  border-radius: 30px;
  object-fit: cover;
  opacity: ${({ selected }: { selected?: boolean }) =>
    selected ? '50%' : '100%'};
`

const Next = styled.div`
  display: inline-block;
  width: 500px;
  height: 5px;
  margin: 5px 0px;
`

const Head = styled.div`
  display: inline-block;
  width: 500px;
  height: 40px;
  margin: 5px 0px;
`

const BoxC = styled.div`
  display: block;
  margin: 0 auto;
  text-align: center;
`

const Box = styled.div`
  display: inline-block;
  border-radius: 20px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.28);
  color: white;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 15px;
  width: auto;
  padding: 10px 20px;
  line-height: 150%;
`

const MarkL = styled.div`
  display: block;
  position: relative;
  margin: 0;
  top: 0px;
  left: -15px;
  height: 13px;
  width: 10px;
  background-color: white;
  border-radius: 0px 15px 0px 0px;
  transform: skewX(15deg);
  z-index: 5;
`

const MarkR = styled.div`
  display: block;
  position: relative;
  margin: 0;
  top: -1px;
  right: -101%;
  height: 13px;
  width: 10px;
  background-color: #ffeb60;
  border-radius: 15px 0px 0px 0px;
  transform: skewX(-15deg);
  z-index: 5;
`

Message.ProfileImageL = ProfileImageL
Message.NameL = NameL
Message.BlockL = blockL
Message.CWrapperF = ChatWrapperF
Message.CWrapper = ChatWrapper
Message.MarkL = MarkL

Message.ProfileImageR = ProfileImageR
Message.NameR = NameR
Message.CWrapperRF = ChatWrapperRF
Message.CWrapperR = ChatWrapperR
Message.MarkR = MarkR

Message.ImageL = ImageL
Message.ImageR = ImageR

Message.BoxC = BoxC
Message.Box = Box
Message.Next = Next
Message.Head = Head
Message.Background = Background
Message.BackgroundH = BackgroundH
Message.All = All

export default Message
