import { ReactNode } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { clamp } from '@shared/utils'
import {
  MIN_VIEWPORT,
  MAX_VIEWPORT
} from '@/constants'

type FeaturesProps = {
  children: ReactNode
}

const Features = ({
  children
}: FeaturesProps) => {
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
  text-align: center;
  margin: 32px 0;
  img + strong {
    margin-top: 20px;
  }
  strong {
    display: block;
    font-size: 20px;
    line-height: 28px;
    ${clamp('font-size', [MIN_VIEWPORT, MAX_VIEWPORT, 20])};
    ${clamp('line-height', [MIN_VIEWPORT, MAX_VIEWPORT, 28])};
  }
  strong + img {
    margin-top: 20px;
  }
`

export default Features