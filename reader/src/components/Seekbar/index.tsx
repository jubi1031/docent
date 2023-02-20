import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

type SeekbarProps = {
  isOpen: boolean,
  value: number,
  max: number,
  onChange?: (
    value: number,
    max: number
  ) => void
}

const Seekbar = ({
  isOpen = false,
  value,
  max,
  onChange = () => {}
}: SeekbarProps) => {
  const progressRef = useRef(null)
  const [cursorLeft, setCursorLeft] = useState(0)
  const [filledScale, setFilledScale] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [currentValue, setCurrentValue] = useState(value)
  const [isPercentage, setIsPercentage] = useState(false)

  const handle = (event: React.PointerEvent) => {
    const rect = progressRef.current.getBoundingClientRect()
    const value = Math.floor(
      Math.min(Math.max((event.clientX - rect.left - 24) / (rect.width - 48) * max, 0), max)
    )

    setCurrentValue(value)
  }

  const onPointerDown = (event: React.PointerEvent) => {
    setIsDragging(true)

    progressRef.current.setPointerCapture(event.pointerId)

    handle(event)
  }

  const onPointerMove = (event: React.PointerEvent) => {
    if (!isDragging) {
      return
    }

    handle(event)
  }

  const onPointerUp = (event: React.PointerEvent) => {
    if (!isDragging) {
      return
    }

    progressRef.current.releasePointerCapture(event.pointerId)

    setIsDragging(false)

    onChange(currentValue, max)
  }

  useEffect(() => {
    setCurrentValue(value)
  }, [value])

  useEffect(() => {
    const cursorLeft = (currentValue / max * 100) || 0
    const filledScale = currentValue / max
    setCursorLeft(cursorLeft)
    setFilledScale(filledScale)
  }, [currentValue, max])

  return (
    <Wrapper
      className={ isOpen ? 'is-open' : '' }
      onTouchStart={(event) => event.stopPropagation()}
    >
      <Progress
        ref={progressRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        className={ isDragging ? 'is-dragging' : '' }
      >
        <Track>
          <Filled 
            style={{
              transform: `scaleX(${filledScale})`
            }}
          />
          <Cursor style={{
            left: `calc(${cursorLeft}%)`
          }} />
        </Track>
      </Progress>
      <Status>
        <Pages onClick={() => setIsPercentage(!isPercentage)}>
          {!isPercentage ? (<>
            <CurrentPage>{currentValue + 1}</CurrentPage>
            <Slash>/</Slash>
            <TotalPage>{max + 1}</TotalPage>
          </>) : (
            <Percent>{Math.floor(cursorLeft)}%</Percent>
          )}
        </Pages>
      </Status>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  z-index: 1000;
  left: 0;
  bottom: 0;
  width: 100%;
  padding-bottom: 40px;
  background-color: rgba(255, 255, 255, 0.9);
  transform: translate3d(0, 100%, 0);
  transition: transform .28s, background-color .24s;  
  &.is-open {
    transform: translate3d(0, 0, 0);
  }
`

const Progress = styled.div`
  padding: 18px 24px;
  cursor: pointer;
  touch-action: none;
`

const Track = styled.div`
  position: relative;
  height: 3px;
  background: #B8B8B8;
  border-radius: 8px;
`

const Filled = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transform: scaleX(0);
  transform-origin: 0 0 0;
  background-color: #444;
  border-radius: 8px;
`

const Cursor = styled.div`
  position: absolute;
  left: 0;
  top: -4.5px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #444;
`

const Status = styled.div`
  text-align: center;
  font-family: 'Lato';
  font-size: 14px;
  color: #333333;
`

const Pages = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  padding: 4px 8px;
  background: rgba(153, 153, 153, 0.06);
  border-radius: 40px;
  line-height: 16px;
`

const Percent = styled.span`

`

const CurrentPage = styled.span`
  font-weight: 700;
`

const Slash = styled.span`
  opacity: 0.5;
`

const TotalPage = styled.span`
  opacity: 0.5;
`

export default Seekbar