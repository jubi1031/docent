
import React, { ReactNode, useContext, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Gauge } from '@shared/components'
import { ConfigContext } from '@/components/ConfigContext'
import { motion, AnimatePresence } from 'framer-motion'

type P87Props = {
  isCurrentPage?: boolean,
  ref?: React.Ref<HTMLDivElement>
}

const P87 = ({
  isCurrentPage,
  ref
}: P87Props) => {
  const { currentPage, gaugeTutorialClearRef } = useContext(ConfigContext)
  const [value, setValue] = useState(0)

  return (
    <Wrapper ref={ref}>
      <Dissolve>
        <img src="/images/part1/P87_1.jpg" alt="" />
        <img src="/images/part1/P87_2.jpg" alt="" style={{ opacity: Math.max((value / 100), 0) }} />
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
              gradient={'90deg, #EE4D2A 0%, #951008 100%'}
            />
          </Gauges>
        )}
      </AnimatePresence>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  text-align: center;
  height: 100%;
  img {
    display: block;
    margin: 0 auto;
    max-height: 100vh;
    @media (max-height: 480px) {
      max-height: unset;
    }
  }
`

const Dissolve = styled.div`
  img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: opacity .1s;
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

export default P87