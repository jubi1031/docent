import styled from 'styled-components'
import { clamp } from '@shared/utils'
import { MIN_VIEWPORT, MAX_VIEWPORT } from '@/constants'

const WriterDetails = styled.div`
  height: calc(100% - 20px);
  margin-top: 20px;
  color: #000;
  padding: 24px 0;
  font-size: 14px;
  line-height: 20px;
  ${clamp('font-size', [MIN_VIEWPORT, MAX_VIEWPORT, 14])};
  ${clamp('line-height', [MIN_VIEWPORT, MAX_VIEWPORT, 20])};
  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    left: 0;
    top: 20px;
    right: 0;
    bottom: 0;
    background-color: #fff;
    pointer-events: none;
  }
  strong {
    font-size: 20px;
    line-height: 28px;
    ${clamp('font-size', [MIN_VIEWPORT, MAX_VIEWPORT, 20])};
    ${clamp('line-height', [MIN_VIEWPORT, MAX_VIEWPORT, 28])};
  }
  span {
    display: block;
    padding: 2px 0 12px 0;
    border-bottom: 1px solid #dfdfdf;
    margin-bottom: 12px;
    color: var(--text-03);
  }
`

export default WriterDetails
