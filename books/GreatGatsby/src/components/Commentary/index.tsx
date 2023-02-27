import { ReactNode } from 'react'
import styled from 'styled-components'
import { clamp } from '@shared/utils'
import {
  MIN_VIEWPORT,
  MAX_VIEWPORT
} from '@/constants'

type CommentaryProps = {
  children?: ReactNode
}

type CommentaryHeaderProps = {
  children?: ReactNode
}

type CommentaryBodyProps = {
  children?: ReactNode
}

type CommentaryFeaturesProps = {
  src: string,
  isCover?: boolean
}

const CommentaryFeatures = ({
  src,
  isCover
}: CommentaryFeaturesProps) => {
  return (
    <Features className={isCover ? 'cover' : ''}>
      <img src={src} alt="" />
    </Features>
  )
}

const CommentaryHeader = ({
  children
}: CommentaryHeaderProps) => {
  return (
    <Header>
      {children}
    </Header>
  )
}

const CommentaryBody = ({
  children
}: CommentaryBodyProps) => {
  return (
    <Body>
      <Inner>
        {children}
      </Inner>
    </Body>
  )
}

const Commentary = ({
  children
}: CommentaryProps) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  @media (max-height: 480px) {
    height: auto;
  }
`

const Header = styled.div`
  position: relative;
  height: 250px;
  background-image: #478EE1;
  background-image: linear-gradient(180deg, #6ABAE7 0%, #4558BB 100%);
  background-image: url("/images/part2/noise.png"), linear-gradient(180deg, #6ABAE7 0%, #4558BB 100%);
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: 100%;
`

const Features = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 42px);
  width: 158px;
  height: 158px;
  border-radius: 50%;
  overflow: hidden;
  /* filter: drop-shadow(0px 8px 20px rgba(0, 0, 0, 0.1)) drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.1)); */
  box-shadow: 0px 8px 20px rgba(0,0,0,0.1), 0px 2px 8px rgba(0, 0, 0, 0.1);
  &.cover {
    width: 113px;
    height: 158px;
    border-radius: 0px 4px 4px 0px;
    &::before {
      content: "";
      position: absolute;
      z-index: 2;
      left: 0;
      top: 0;
      display: block;
      width: 19.60%;
      height: 100%;
      background: linear-gradient(90deg,rgba(0,0,0,0.05) 0%,rgba(0,0,0,0.05) 0.01%,rgba(0,0,0,0.05) 5.97%,rgba(255,255,255,0.3) 15.89%,rgba(255,255,255,0) 28.19%,rgba(0,0,0,0.05) 28.19%,rgba(0,0,0,0.0277927) 46.96%,rgba(255,255,255,0) 47.51%,rgba(255,255,255,0.1) 54.14%,rgba(255,255,255,0) 100%);      
    }
  }
`

const Body = styled.div`
  flex: 1;
  background-image: url(/images/opening/paper-img.jpg);
  background-position: 0 0;
  background-size: contain;
  padding: 82px 0;
`

const Inner = styled.div`
  width: 78.4%;
  margin: 0 auto;
`

const TextDecoration = styled.span`
  display: block;
  margin-bottom: 14px;
  padding-bottom: 8px;
  font-family: 'SpoqaHanSansNeo';
  font-size: 14px;
  line-height: 20px;
  ${clamp('font-size', [MIN_VIEWPORT, MAX_VIEWPORT, 14])};
  ${clamp('line-height', [MIN_VIEWPORT, MAX_VIEWPORT, 20])};
  border-bottom: 1px solid #dfdfdf;
  text-align: center;
  white-space: nowrap;
  color: #000;
`



const Quote = styled.span`
font-family: 'SpoqaHanSansNeo';
  line-height: 1.125;
  font-size: 22px;
  ${clamp('font-size', [MIN_VIEWPORT, MAX_VIEWPORT, 22])};
  opacity: 0.6;
`


Commentary.Header = CommentaryHeader
Commentary.Body = CommentaryBody
Commentary.Features = CommentaryFeatures
Commentary.TextDecoration = TextDecoration
Commentary.Quote = Quote


export default Commentary