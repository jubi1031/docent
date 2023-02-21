
import React, { ReactNode, useContext, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Gauge } from '@shared/components'
import { useSound } from '@shared/hooks'
import { ConfigContext } from '@/components/ConfigContext'
import { motion, AnimatePresence } from 'framer-motion'

type P5Props = {
  isCurrentPage?: boolean,
  ref?: React.Ref<HTMLDivElement>
}

const P5 = ({
  isCurrentPage,
  ref
}: P5Props) => {
  const { currentPage, gaugeTutorialClearRef } = useContext(ConfigContext)
  const [value, setValue] = useState(0)
  const effects = useRef({
    lighter: false,
    fire: false
  })
  const [, { play: lighterPlay, stop: lighterStop }] = useSound({ src: 'sounds/P5_lighter.mp3', volume: 1 })
  const [, { play: firePlay, stop: fireStop }] = useSound({ src: 'sounds/P5_fire.mp3', volume: 1 })

  useEffect(() => {
    const lighterEffect = (value / 50) > 0.8
    if (lighterEffect) {
      if (!effects.current.lighter) {
        lighterPlay()
      }
    }

    const fireEffect = (value - 50) / 50 > 0.8
    if (fireEffect) {
      if (!effects.current.fire) {
        firePlay()
      }
    } else {
      fireStop()
    }

    effects.current.lighter = lighterEffect
    effects.current.fire = fireEffect
  }, [value])

  useEffect(() => {
    if (!isCurrentPage) {
      lighterStop()
      fireStop()
    }
  }, [currentPage])

  return (
    <Wrapper ref={ref}>
      <Dissolve>
        <img src="/images/part1/P5_1.jpg" alt="" />
        <img src="/images/part1/P5_2.jpg" alt="" style={{ opacity: Math.min((value / 50), 1) }} />
        <img src="/images/part1/P5_3.jpg" alt="" style={{ opacity: Math.max((value - 50) / 50, 0) }} />
      </Dissolve>
      <AnimatePresence>
        {isCurrentPage && (
          <Gauges
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            exit={{ opacity: 0, y: 40 }}
          >
            <Gauge
              value={value}
              tootip={gaugeTutorialClearRef.current}
              max={100}
              onChange={(value: number) => {
                if (value === 100) {
                  gaugeTutorialClearRef.current = true
                }

                setValue(value)
              }}
            />
          </Gauges>
        )}
      </AnimatePresence>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`

const Dissolve = styled.div`
  img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: opacity .1s;
    max-height: 100vh;
    @media (max-height: 480px) {
      max-height: unset;
    }
  }
`

const Gauges = styled(motion.div)`
  position: fixed;
  bottom: 24px;
  width: 100%;
  .is-appbar-open & {
    bottom: 127px;
  }
`

export default P5