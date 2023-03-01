import { useState, useEffect, useRef, ReactElement } from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import { iframeMessage } from '@shared/utils'
import Icons from '../Icons'
import { useSound } from '@shared/hooks'
import AudioButton from '../AudioButton'

export interface Messages {
  user?: 'kim' | 'yang'
  messages: (string | ReactElement)[]
}
interface KakaoTalkProps {
  messages: Messages[]
  setMessageEnd?: Function
  audioSrc?: string
}
const StyledAudioButton = styled(AudioButton)<{ isShowingAppbar: boolean }>`
  padding: 0;
  margin: 0;
  top: 64px;
  right: 16px;
  top: ${(props) => (props.isShowingAppbar ? '64px' : '32px')};
  position: absolute;
`

const KakaoTalk = (props: KakaoTalkProps) => {
  const $contents = useRef<HTMLDivElement>(null)
  const [scrollTop, setScrollTop] = useState(0)
  const index = useRef(0)
  const [count, setCount] = useState(-1)
  const [appbar, setAppbar] = useState(false)

  const [paused, setPaused] = useState<null | boolean>(null)
  const [_, secondHalfSound] = useSound({
    src: props.audioSrc ?? '',
    volume: 0.5,
    loop: false
  })

  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation()
    setCount((prev) => prev + 1)
    scrollToBottom()
    if (paused === null && props.audioSrc) {
      setPaused(false)
      secondHalfSound.play()
    }
  }

  const handleToggleAudio = () => {
    setPaused((prev) => {
      if (prev) secondHalfSound.play()
      else secondHalfSound.pause()
      return !prev
    })
  }

  let scrolling = false

  const scrollToBottom = () => {
    if ($contents.current === null) return
    setTimeout(() => {
      $contents.current.scrollTo({
        top: $contents.current.scrollHeight + 69,
        behavior: 'smooth'
      })
    }, 0)
  }

  setInterval(() => {
    if (scrolling) {
      scrolling = false
      if (scrollTop > $contents.current.scrollTop) {
        iframeMessage.post('toggleAppbar')
      }
      setScrollTop($contents.current.scrollTop)
    }
  }, 300)

  const handleScroll = () => {
    scrolling = true
  }

  useEffect(() => {
    iframeMessage.receive((channel = '', payload: any) => {
      if (channel !== 'toggleAppbar') return
      setAppbar(payload)
    })
  }, [])

  return (
    <Wrapper bgClean={!!props.setMessageEnd}>
      <Contents
        ref={$contents}
        onClick={!appbar ? handleClick : null}
        onScroll={handleScroll}>
        {props.audioSrc && (
          <AudioButton paused={paused} onToggle={handleToggleAudio} />
        )}
        {!props.messages[props.messages.length - 1].user && (
          <Messages>
            <Comment notice>
              {props.messages[props.messages.length - 1].messages[0]}
            </Comment>
          </Messages>
        )}
        {props.messages.map(({ user, messages }, i) => {
          const own = user === 'yang'
          const avatar = own ? 'Message2.jpg' : 'Message1.png'

          if (!user) return null

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
                    // if (index.current === count) scrollToBottom()
                    index.current += 1
                    if (
                      ((!props.messages[props.messages.length - 1].user &&
                        i === props.messages.length - 2) ||
                        i === props.messages.length - 1) &&
                      j === messages.length - 1 &&
                      props.setMessageEnd
                    )
                      props.setMessageEnd(true)
                    if (typeof message === 'string') {
                      return (
                        <Message key={j}>
                          {j === 0 && <Icons.BalloonTail own={own} />}
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
                    }
                    return <div key={j}>{message}</div>
                  })}
                </ul>
              </div>
            </Messages>
          )
        })}
      </Contents>

      {/* {!appbar && <ClickArea onClick={handleClick} />} */}
    </Wrapper>
  )
}

export default KakaoTalk

const Wrapper = styled.div<{ bgClean?: boolean }>`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow-y: auto;
  ${(props) =>
    props.bgClean
      ? 'background-color: rgba(0,0,0,0.2);'
      : `background-image: url('/images/part2/C1_0.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;`}
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

  top: 0;

  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 12px;
    -webkit-appearance: none;
  }

  ::-webkit-scrollbar:horizontal {
    height: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    border: 2px solid #ffffff;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #ffffff;
  }
`

const Messages = styled.div`
  display: flex;
  gap: 0 6px;

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4px 0;
    padding-right: 40px;

    > ul {
      display: flex;
      flex-direction: column;
      gap: 8px 0;

      > div {
        width: 100%;
        display: flex;

        > * {
          flex: none;
        }
      }
    }
  }

  &.--own {
    flex-direction: row-reverse;

    > div {
      padding-right: 0;
      padding-left: 40px;

      > ul {
        align-items: flex-end;

        > div {
          justify-content: flex-end;
        }
      }
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
  max-width: 245px;

  padding: 14px 20px;

  position: relative;

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

  > svg {
    position: absolute;
    top: 0;
  }
`

export const Comment = styled.div<{ notice?: boolean }>`
  margin: 0 auto;
  padding: 10px 20px;

  border-radius: 10px;
  background: rgba(0, 0, 0, 0.4);

  color: white;
  font-size: 14px;
  text-align: center;
`

export const ImageBox = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 25px;
`
