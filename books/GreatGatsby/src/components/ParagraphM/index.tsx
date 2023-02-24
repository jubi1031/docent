import { ReactNode } from 'react'
import styled from 'styled-components'
import { clamp } from '@shared/utils'
import {
  MIN_VIEWPORT,
  MAX_VIEWPORT
} from '@/constants'

type ParagraphMProps = {
  children: ReactNode
}

const ParagraphM = ({
    children
  }: ParagraphMProps) => {
    return (
      <WrapperM>
        {children}
      </WrapperM>
    )
  }
  
  const WrapperM = styled.p`
    font-family: 'KoPubWorldBatangLight';
    ${clamp('font-size', [MIN_VIEWPORT, MAX_VIEWPORT, 17])};
    ${clamp('line-height', [MIN_VIEWPORT, MAX_VIEWPORT, 29.5])};
    padding: 0;
    margin: 0;
`

export default ParagraphM