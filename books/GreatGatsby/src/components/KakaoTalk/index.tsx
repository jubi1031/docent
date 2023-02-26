import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import { iframeMessage } from '@shared/utils'

export interface Messages {
  user: 'kim' | 'yang'
  messages: string[]
}

interface KakaoTalkProps {
  messages: Messages[]
}

const KakaoTalk = (props: KakaoTalkProps) => {
  const $contents = useRef<HTMLDivElement>(null)
  const index = useRef(0)
  const [count, setCount] = useState(0)
  const [appbar, setAppbar] = useState(false)

  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation()
    setCount((prev) => prev + 1)
  }

  const scrollToBottom = () => {
    if ($contents.current === null) return
    $contents.current.scrollTo({
      top: $contents.current.scrollHeight,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    iframeMessage.receive((channel = '', payload: any) => {
      if (channel !== 'toggleAppbar') return
      setAppbar(payload)
    })
  }, [])

  return (
    <Wrapper>
      <Contents ref={$contents}>
        {props.messages.map(({ user, messages }, i) => {
          const own = user === 'yang'
          const avatar = own ? 'Message2.jpg' : 'Message1.png'

          if (i === 0) index.current = 0
          if (index.current > count) return null

          return (
            <Messages key={i} className={classNames({ '--own': own })}>
              <Avatar src={`/images/part2/${avatar}`} />
              <div>
                <Name>{own ? '양재웅' : '김해나'}</Name>
                <ul>
                  {messages.map((message, j) => {
                    if (index.current > count) return null
                    if (index.current === count) scrollToBottom()

                    index.current += 1
                    return (
                      <Message key={j}>
                        {message.split('\n').map((str, k) => {
                          if (k === 0) {
                            return <span key={k}>{str}</span>
                          }

                          return (
                            <span key={k}>
                              <br />
                              {str}
                            </span>
                          )
                        })}
                      </Message>
                    )
                  })}
                </ul>
              </div>
            </Messages>
          )
        })}
      </Contents>
      {!appbar && <ClickArea onClick={handleClick} />}
    </Wrapper>
  )
}

export default KakaoTalk

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow-y: auto;

  &::before {
    width: 100%;
    height: 100%;

    display: block;
    content: '';

    background-image: url('/images/part2/C1_0.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

const ClickArea = styled.div`
  position: absolute;
  inset: 64px 40px;
`

const Contents = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 8px 0;
  padding: 69px 24px;

  position: absolute;
  top: 0;

  overflow-y: auto;
  pointer-events: none;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

const Messages = styled.div`
  display: flex;
  gap: 0 6px;

  &.--own {
    flex-direction: row-reverse;

    > div > ul {
      align-items: flex-end;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 4px 0;

    > ul {
      display: flex;
      flex-direction: column;
      gap: 8px 0;
    }
  }

  @keyframes appear {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  animation: appear 0.4s ease-in-out;
`

const Avatar = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  user-select: none;
`

const Name = styled.p`
  color: white;
  font-size: 12px;
  line-height: 18px;
  user-select: none;

  .--own & {
    text-align: right;
  }
`

const Message = styled.li`
  width: fit-content;
  max-width: 240px;

  padding: 14px 20px;
  border-radius: 20px;
  background-color: white;

  user-select: none;

  .--own & {
    background-color: #ffeb33;
  }

  @keyframes appear {
    from {
      transform: translateY(8px);
      opacity: 0;
    }

    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  animation: appear 0.4s ease-in-out;
`
