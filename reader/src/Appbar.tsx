import { ReactNode } from 'react'
import styled from 'styled-components'

type AppbarProps = {
  isOpen: boolean,
  leading?: ReactNode,
  title?: ReactNode,
  actions?: ReactNode
}

const Appbar = ({
  isOpen,
  leading,
  title,
  actions
}: AppbarProps) => {
  return (
    <Wrapper className={ isOpen ? 'is-open' : '' }>
      <Leading>{leading}</Leading>
      <Title>{title}</Title>
      <Actions>{actions}</Actions>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 48px;
  padding: 0 14px;
  background: rgba(255, 255, 255, 0.9);
  transform: translate3d(0, -100%, 0);
  transition: transform .28s, background-color .24s;  
  &.is-open {
    transform: translate3d(0, 0, 0);
  }
`

const Leading = styled.div`
  position: relative;
  z-index: 2;
`

const Title = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
`

const Actions = styled.div`
  position: relative;
  z-index: 2;
`

export default Appbar