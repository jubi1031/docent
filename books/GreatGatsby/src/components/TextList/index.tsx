import React, { ReactNode, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

type CheckListProps = {
  label?: string,
  children: ReactNode
}

type CheckItemProps = {
  children: ReactNode,
  onChange?: (checked: boolean) => void
}

type CheckedProps = {
  checked: boolean
}

const Checked = ({
  checked = false
}: CheckedProps) => {
  return (
    <Checkbox>
      <input type="checkbox" checked={checked} onChange={() => { }} />
    </Checkbox>
  )
}

const CheckItem = ({
  children,
  onChange = () => { }
}: CheckItemProps) => {
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
      }}
    >
      <Checked checked={checked} />
      <Text ref={textRef}><span>{children}</span></Text>
    </Item>
  )
}

const CheckList = ({
  label,
  children
}: CheckListProps) => {
  return (
    <Wrapper>
      <Paragraph>{label || '버튼을 눌러 인물의 특징을 살펴보세요.'}</Paragraph>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding-bottom: 76px;
`

const Text = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    display: block;
    opacity: 0;
    pointer-events: none;
    word-break: keep-all;
    font-size: 14px;
    line-height: 20px;
    color: #242424;
    text-align: center;
    background-image: url("data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg opacity='0.4'%3E%3Cpath d='M6.67857 11.3865C6.67857 11.1189 6.72222 10.8068 6.80952 10.45C6.89683 10.0486 7.09325 9.6027 7.39881 9.11216C7.74801 8.57703 8.0754 8.15338 8.38095 7.84121C8.68651 7.48446 9.10119 7.1054 9.625 6.70405C9.7996 6.57027 9.93055 6.43649 10.0179 6.3027C10.1488 6.12432 10.1488 5.94595 10.0179 5.76756L9.95238 5.70067C9.77778 5.56689 9.58135 5.5 9.36309 5.5C9.14484 5.5 8.97024 5.54459 8.83928 5.63378C8.62103 5.76756 8.38095 5.92365 8.11905 6.10203C7.85714 6.23581 7.59524 6.41419 7.33333 6.63716C7.02778 6.86013 6.72222 7.1277 6.41667 7.43986C6.15476 7.70743 5.91468 8.01959 5.69643 8.37635C5.17262 9.17905 4.77976 10.0041 4.51786 10.8514C4.25595 11.6986 4.125 12.5236 4.125 13.3263C4.125 14.5304 4.43056 15.6007 5.04167 16.5372C5.69643 17.429 6.65675 17.875 7.92262 17.875C8.70833 17.875 9.40674 17.5851 10.0179 17.0054C10.6726 16.4257 11 15.6899 11 14.798C11 13.9953 10.7163 13.2595 10.1488 12.5905C9.58135 11.877 8.90476 11.5203 8.11905 11.5203C8.0754 11.5203 7.92262 11.5649 7.66071 11.6541C7.44246 11.6986 7.26786 11.7209 7.1369 11.7209C6.91865 11.7655 6.7877 11.7655 6.74405 11.7209C6.7004 11.6318 6.67857 11.5203 6.67857 11.3865Z' fill='%236F6F6F'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.8736 16.4704C12.2077 15.9926 12.3748 15.4351 12.3748 14.798C12.3748 13.9953 12.0911 13.2595 11.5236 12.5905C11.3865 12.4182 11.2431 12.2666 11.0933 12.1359C11.1587 11.7136 11.2585 11.2854 11.3927 10.8514C11.6546 10.0041 12.0474 9.17905 12.5712 8.37635C12.7895 8.01959 13.0296 7.70743 13.2915 7.43986C13.597 7.1277 13.9026 6.86013 14.2081 6.63716C14.47 6.41419 14.7319 6.23581 14.9939 6.10203C15.2558 5.92365 15.4958 5.76756 15.7141 5.63378C15.845 5.54459 16.0196 5.5 16.2379 5.5C16.4562 5.5 16.6526 5.56689 16.8272 5.70067L16.8927 5.76756C17.0236 5.94595 17.0236 6.12432 16.8927 6.3027C16.8054 6.43649 16.6744 6.57027 16.4998 6.70405C15.976 7.1054 15.5613 7.48446 15.2558 7.84121C14.9502 8.15338 14.6228 8.57703 14.2736 9.11216C13.9681 9.6027 13.7716 10.0486 13.6843 10.45C13.597 10.8068 13.5534 11.1189 13.5534 11.3865C13.5534 11.5203 13.5752 11.6318 13.6189 11.7209C13.6625 11.7655 13.7935 11.7655 14.0117 11.7209C14.1427 11.7209 14.3173 11.6986 14.5355 11.6541C14.7974 11.5649 14.9502 11.5203 14.9939 11.5203C15.7796 11.5203 16.4562 11.877 17.0236 12.5905C17.5911 13.2595 17.8748 13.9953 17.8748 14.798C17.8748 15.6899 17.5474 16.4257 16.8927 17.0054C16.2815 17.5851 15.5831 17.875 14.7974 17.875C13.5315 17.875 12.5712 17.429 11.9165 16.5372C11.902 16.515 11.8877 16.4928 11.8736 16.4704Z' fill='%236F6F6F'/%3E%3C/g%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: 14px 10px;
    padding: 14px 42px;
  }

  &::before {
    content: "첫 번째 소문";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: opacity 0.36;
    font-size: 14px;
    line-height: 20px;
    color: #8B8B8B;
    background-image: url("data:image/svg+xml,%3Csvg width='17' height='16' viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='path-1-outside-1_286_9423' maskUnits='userSpaceOnUse' x='1.5' y='1.66675' width='14' height='13' fill='black'%3E%3Crect fill='white' x='1.5' y='1.66675' width='14' height='13'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M6.7695 2.66675C4.41152 2.66675 2.5 4.57827 2.5 6.93625C2.5 8.54489 3.38965 9.94575 4.70378 10.6736V12.8477C4.70378 13.0787 4.97748 13.2005 5.14902 13.0458L7.18945 11.2057H9.56383C11.9218 11.2057 13.8333 9.29423 13.8333 6.93625C13.8333 4.57827 11.9218 2.66675 9.56384 2.66675H6.7695Z'/%3E%3C/mask%3E%3Cpath d='M4.70378 10.6736H5.70378V10.0844L5.18831 9.79887L4.70378 10.6736ZM5.14902 13.0458L5.81872 13.7884L5.14902 13.0458ZM7.18945 11.2057V10.2057H6.80515L6.51975 10.4631L7.18945 11.2057ZM3.5 6.93625C3.5 5.13055 4.9638 3.66675 6.7695 3.66675V1.66675C3.85924 1.66675 1.5 4.02598 1.5 6.93625H3.5ZM5.18831 9.79887C4.1794 9.24003 3.5 8.16679 3.5 6.93625H1.5C1.5 8.923 2.5999 10.6515 4.21924 11.5484L5.18831 9.79887ZM5.70378 12.8477V10.6736H3.70378V12.8477H5.70378ZM4.47932 12.3031C4.95107 11.8777 5.70378 12.2125 5.70378 12.8477H3.70378C3.70378 13.945 5.00388 14.5232 5.81872 13.7884L4.47932 12.3031ZM6.51975 10.4631L4.47932 12.3031L5.81872 13.7884L7.85914 11.9484L6.51975 10.4631ZM9.56383 10.2057H7.18945V12.2057H9.56383V10.2057ZM12.8333 6.93625C12.8333 8.74194 11.3695 10.2057 9.56383 10.2057V12.2057C12.4741 12.2057 14.8333 9.84651 14.8333 6.93625H12.8333ZM9.56384 3.66675C11.3695 3.66675 12.8333 5.13055 12.8333 6.93625H14.8333C14.8333 4.02598 12.4741 1.66675 9.56384 1.66675V3.66675ZM6.7695 3.66675H9.56384V1.66675H6.7695V3.66675Z' fill='%238B8B8B' mask='url(%23path-1-outside-1_286_9423)'/%3E%3Cmask id='path-3-inside-2_286_9423' fill='white'%3E%3Cpath d='M6.5 7.00002C6.5 7.55232 6.05228 8.00004 5.5 8.00004C4.94772 8.00004 4.5 7.55232 4.5 7.00002C4.5 6.44772 4.94772 6 5.5 6C6.05228 6 6.5 6.44772 6.5 7.00002Z'/%3E%3C/mask%3E%3Cpath d='M6.5 7.00002C6.5 7.55232 6.05228 8.00004 5.5 8.00004C4.94772 8.00004 4.5 7.55232 4.5 7.00002C4.5 6.44772 4.94772 6 5.5 6C6.05228 6 6.5 6.44772 6.5 7.00002Z' fill='%238B8B8B'/%3E%3Cpath d='M4.5 7.00002C4.5 6.44779 4.94768 6.00004 5.5 6.00004V10C7.15689 10 8.5 8.65685 8.5 7.00002H4.5ZM5.5 6.00004C6.05232 6.00004 6.5 6.44779 6.5 7.00002H2.5C2.5 8.65685 3.84311 10 5.5 10V6.00004ZM6.5 7.00002C6.5 7.55226 6.05232 8 5.5 8V4C3.84311 4 2.5 5.34319 2.5 7.00002H6.5ZM5.5 8C4.94768 8 4.5 7.55226 4.5 7.00002H8.5C8.5 5.34319 7.15689 4 5.5 4V8Z' fill='%238B8B8B' mask='url(%23path-3-inside-2_286_9423)'/%3E%3Cpath d='M9.16675 7.00002C9.16675 7.55232 8.71903 8.00004 8.16675 8.00004C7.61446 8.00004 7.16675 7.55232 7.16675 7.00002C7.16675 6.44772 7.61446 6 8.16675 6C8.71903 6 9.16675 6.44772 9.16675 7.00002Z' fill='%238B8B8B'/%3E%3Cpath d='M11.8333 7.00002C11.8333 7.55232 11.3855 8.00004 10.8333 8.00004C10.281 8.00004 9.83325 7.55232 9.83325 7.00002C9.83325 6.44772 10.281 6 10.8333 6C11.3855 6 11.8333 6.44772 11.8333 7.00002Z' fill='%238B8B8B'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: 0 50%;
    padding-left: 20px;
  }
`

const Item = styled(motion.div)`
  position: relative;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1), 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  background-color: #fff;  
  color: #242424;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 12px;
  &.is-checked {
    ${Text} {
      span {
        opacity: 1;
        transition: .36s;
        pointer-events: auto;
      }
      &::before {
        opacity: 0;
      }
    }
  }

  &:nth-of-type(1) {
    ${Text} {
      &::before {
        content: "첫 번째 소문";
      }
    }
  }

  &:nth-of-type(2) {
    ${Text} {
      &::before {
        content: "두 번째 소문";
      }
    }
  }
  
  &:nth-of-type(3) {
    ${Text} {
      &::before {
        content: "세 번째 소문";
      }
    }
  }  
`

const Checkbox = styled.label`
  input {
    display: none;
  }
`

const Paragraph = styled.p`
  text-align: center;
  margin-bottom: 20px;
`

CheckList.Item = CheckItem

export default CheckList