import React, { ReactNode, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
type CheckListProps = {
  children: ReactNode
}

type CheckItemProps = {
  children: ReactNode
  onChange?: (checked: boolean) => void
}

type CheckedProps = {
  checked: boolean
}

const Checked = ({ checked = false }: CheckedProps) => {
  return (
    <Checkbox>
      <input type="checkbox" checked={checked} onChange={() => {}} />
    </Checkbox>
  )
}

const CheckItem = ({ children, onChange = () => {} }: CheckItemProps) => {
  const textRef = useRef(null)
  const [lineCount, setLineCount] = useState(0)
  const [lineWidth, setLineWidth] = useState(0)
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    const offsetWidth = textRef.current.offsetWidth
    const offsetHeight = textRef.current.offsetHeight
    const lineHeight = 20
    const lines = Math.ceil(offsetHeight / lineHeight)

    setLineCount(lines)
    setLineWidth(offsetWidth)
  }, [])

  useEffect(() => {
    onChange(checked)
  }, [checked])

  return (
    <Item
      whileTap={{ scale: 0.97 }}
      className={checked ? 'is-checked' : ''}
      onClick={(event) => {
        event.stopPropagation()
        setChecked(!checked)
      }}>
      <Checked checked={checked} />
      {!checked &&
        new Array(lineCount).fill(null).map((_, i) => (
          <Skeleton
            key={i}
            style={{
              width: `${lineWidth / (i + 1)}px`,
              top: `${18 + 18 * i}px`
            }}
          />
        ))}
      <Text ref={textRef}>{children}</Text>
    </Item>
  )
}

const CheckList = ({ children }: CheckListProps) => {
  return (
    <Wrapper>
      <Paragraph>버튼을 눌러 인물의 특징을 살펴보세요.</Paragraph>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding-bottom: 76px;
`

const Text = styled.span`
  opacity: 0;
  pointer-events: none;
  word-break: keep-all;
`

const Skeleton = styled.span`
  position: absolute;
  top: 18px;
  left: 42px;
  right: 14px;
  display: block;
  height: 11px;
  background: rgb(239, 239, 239);
  min-width: 58%;
`

const Item = styled(motion.div)`
  position: relative;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1), 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  background-color: #fff;
  padding: 14px 14px 14px 42px;
  color: #242424;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 12px;
  &.is-checked {
    ${Text} {
      opacity: 1;
      transition: 0.36s;
      pointer-events: auto;
    }
  }
`

const Checkbox = styled.label`
  position: absolute;
  left: 17px;
  top: 15px;
  input {
    display: none;
  }
  &::before {
    content: '';
    display: block;
    width: 18px;
    height: 18px;
    border: 2px solid #ffeb60;
    border-radius: 2px;
  }
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 12px;
    height: 10px;
    transform: translate(-50%, -50%);
    opacity: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='12' height='10' viewBox='0 0 12 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.6667 1.66668L4.00007 8.33334L1.33342 5.66668' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
  }

  .is-checked & {
    &::before {
      background-color: #ffeb60;
    }
    &::after {
      opacity: 1;
    }
  }
`

const Paragraph = styled.p`
  text-align: center;
  margin-bottom: 20px;
`

CheckList.Item = CheckItem

export default CheckList
