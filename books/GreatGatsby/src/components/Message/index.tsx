import { ReactNode } from 'react'
import styled from 'styled-components'

type CommentaryProps = {
  children?: ReactNode
}

const Message = ({
  children
}: CommentaryProps) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
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
    height: 700px;
    background-image: url("/images/part2/C1_0.jpg");
    background-size: cover;
    background-position: top;
`


const NameL = styled.div`
    display: inline-block;
    margin-left: 5px;
    width: 150px;
    float: left;
    flex-direction: column;
    gap: 5px;
    color: white;
`

const NameR = styled.div`
    display: inline-block;
    margin-right: 5px;
    width: 200px;
    float: right;
    text-align: right;
    flex-direction: column;
    gap: 5px;
    color: white;
`
const blockL = styled.div`
    display: inline-block;
    float: left;
    width: 40px;
    height: 50px;
`

const ChatWrapper = styled.div`
  display: inline-block;
  margin-bottom: 5px;
  align-items: flex-end;
  gap: 5px;
  padding: 10px 15px;
  border: 1px solid black;
  border-radius: 20px;
  background-color: white;
`

const ChatWrapperRF = styled.div`
  display: inline-block;
  float: right;
  margin-bottom: 5px;
  align-items: flex-end;
  gap: 5px;
  padding: 10px 15px;
  border: 1px solid Yellow;
  border-radius: 20px;
  background-color: Yellow;
`
const ChatWrapperR = styled.div`
  display: inline-block;
  float: right;
  margin-bottom: 5px;
  margin-right: 40px;
  align-items: flex-end;
  gap: 5px;
  padding: 10px 15px;
  border: 1px solid Yellow;
  border-radius: 20px;
  background-color: Yellow;
`

const ProfileImageL = styled.img`
  display: inline-block;
  float: left;
  width: 40px;
  height: 40px;
  border-radius: 15px;
  object-fit: cover;
  opacity: ${({ selected }: { selected?: boolean }) =>
    selected ? "50%" : "100%"};
`

const ProfileImageR = styled.img`
  display: inline-block;
  float: Right;
  width: 40px;
  height: 40px;
  border-radius: 30px;
  object-fit: cover;
  opacity: ${({ selected }: { selected?: boolean }) =>
    selected ? "50%" : "100%"};
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
    selected ? "50%" : "100%"};
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
    selected ? "50%" : "100%"};
`

const Next = styled.div`
  display: inline-block;
  width: 500px;
  height: 5px;
  margin: 5px 0px;
`



Message.ProfileImageL = ProfileImageL
Message.NameL = NameL
Message.BlockL = blockL
Message.Wrapper = ChatWrapper

Message.ProfileImageR = ProfileImageR
Message.NameR = NameR
Message.WrapperRF = ChatWrapperRF
Message.WrapperR = ChatWrapperR

Message.ImageL = ImageL
Message.ImageR = ImageR
Message.Next = Next
Message.Background = Background
Message.All = All


export default Message