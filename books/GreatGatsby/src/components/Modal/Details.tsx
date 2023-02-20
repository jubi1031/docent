import { ReactNode } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { clamp } from '@shared/utils'
import {
  MIN_VIEWPORT,
  MAX_VIEWPORT
} from '@/constants'

type DetailsProps = {
  children: ReactNode
}

const Details = ({
  children
}: DetailsProps) => {
  return (
    <Wrapper
      initial={{ opacity: 0, y: 20 }}
      transition={{ type: 'spring', duration: .36, delay: 0.35 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {children}
    </Wrapper>
  )
}

const Wrapper = styled(motion.div)`
  position: relative;
  flex: 1;
  padding: 0 24px;
  ${clamp('padding-left', [MIN_VIEWPORT, MAX_VIEWPORT, 24])};
  ${clamp('padding-right', [MIN_VIEWPORT, MAX_VIEWPORT, 24])};  
`

export default Details