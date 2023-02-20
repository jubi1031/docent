import { ReactNode } from 'react'
import styled from 'styled-components'
import { clamp } from '@shared/utils'
import {
  MIN_VIEWPORT,
  MAX_VIEWPORT
} from '@/constants'

type ParagraphProps = {
  children: ReactNode
}

const Paragraph = ({
  children
}: ParagraphProps) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.p`
  font-family: 'KoPubWorldBatangLight';
  ${clamp('font-size', [MIN_VIEWPORT, MAX_VIEWPORT, 17])};
  ${clamp('line-height', [MIN_VIEWPORT, MAX_VIEWPORT, 29.5])};
  padding: 0 16px;
  margin: 44px 0;
`

const Liner = styled.span`
  background: rgba(255, 132, 125, 0.5);
`

Paragraph.Liner = Liner

export default Paragraph