import { ReactNode } from 'react'
import styled from 'styled-components'

type CharacterProps = {
  children?: ReactNode
}

type NameProps = {
  children?: ReactNode
}

type TextProps = {
  children?: ReactNode
}

const Thumb = ({
  src = ''
}) => (
  <Img src={src} alt="" width="45%" />
)

const Name = ({
  children
}: NameProps) => (
  <Strong>{children}</Strong>
)

const Text = ({
  children
}: TextProps) => (
  <Paragraph>{children}</Paragraph>
)

const Character = ({
  children
}: CharacterProps) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  font-family: 'KoPubWorldBatangLight';
  font-size: 17px;
  line-height: 175%;  
`

const Img = styled.img`
  filter: drop-shadow(0px 8px 20px rgba(0, 0, 0, 0.1)) drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.1));
`

const Strong = styled.strong`
  display: block;
  margin-top: 24px;
  font-weight: 700;
`

const Paragraph = styled.p``

Character.Thumb = Thumb
Character.Name = Name
Character.Text = Text

export default Character