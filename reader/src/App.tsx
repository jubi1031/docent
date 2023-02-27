import styled from 'styled-components'
import { GlobalStyles } from '@shared/components'
import { iframeMessage, nativeMessage } from '@shared/utils'
import Appbar from './Appbar'
import Seekbar from './components/Seekbar'
import Navigation from './components/Navigation'
import { useEffect, useRef, useState } from 'react'

import { setHistory } from './api/services'

const TitleIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 -1.17422e-07 6 -2.62268e-07C2.68629 -4.07115e-07 -1.17422e-07 2.68629 -2.62268e-07 6C-4.07115e-07 9.31371 2.68629 12 6 12ZM4.31569 4.68431C4.00327 4.37189 3.49673 4.37189 3.18431 4.68431C2.87189 4.99673 2.87189 5.50327 3.18431 5.81568L5.43431 8.06568C5.74673 8.3781 6.25327 8.3781 6.56569 8.06569L8.81569 5.81569C9.1281 5.50327 9.1281 4.99673 8.81569 4.68431C8.50327 4.37189 7.99673 4.37189 7.68431 4.68431L6 6.36863L4.31569 4.68431Z"
      fill="#444444"
    />
  </svg>
)

const BackIcon = () => (
  <svg
    width="9"
    height="14"
    viewBox="0 0 9 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.5 12.8333L1.66667 6.99992L7.5 1.16658"
      stroke="#444444"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const App = ({ host = '', bookSeq = '', mode = '', initialPage = 0 }) => {
  const [toggleAppbar, setToggleAppbar] = useState(false)
  const [currentPage, setCurrentPage] = useState(initialPage)
  const [totalPage, setTotalPage] = useState(0)
  const [navIsOpen, setNavIsOpen] = useState(false)
  const [chapters, setChapters] = useState(null)
  const [coverPath, setCoverPath] = useState('')
  const [chapterTitle, setChapterTitle] = useState('')

  const iframeRef = useRef(null)
  const mountedRef = useRef(false)

  useEffect(() => {
    iframeMessage.receive((channel = '', payload: any) => {
      if (channel === 'openAppbar') setToggleAppbar(true)
      if (channel === 'closeAppbar') setToggleAppbar(false)
      if (channel === 'toggleAppbar') setToggleAppbar((toggle) => !toggle)
      if (channel === 'currentPage') setCurrentPage(payload)
      if (channel === 'totalPage') setTotalPage(payload)
      if (channel === 'chapters') setChapters(payload)
      if (channel === 'coverPath') setCoverPath(payload)
      if (channel === 'nativeMessage') {
        const { channel, message } = payload
        nativeMessage.post(channel, message)
      }
    })
  }, [])

  useEffect(() => {
    iframeMessage.post('currentPage', currentPage)
    iframeMessage.post('totalPage', totalPage)

    const timer = setTimeout(() => {
      if (mountedRef.current) {
        if (mode !== 'dev') {
          // API 페이지 동기화
          setHistory({
            bookSeq,
            // location에 '0' 저장하면 api 에러남;; 해서.. + 1
            location: String(currentPage + 1),
            updated_at: Math.ceil(new Date().getTime() / 1000)
          }).then(() => {
            console.log('페이지 저장', currentPage + 1)
          })

          // 일부 네이티브에서 필요로 하는 데이타 전송
          nativeMessage.post('location', {
            currentPage,
            totalPage,
            viewPercent: Math.floor((currentPage / totalPage) * 100)
          })
        }
      }
    }, 250)

    return () => {
      clearTimeout(timer)
    }
  }, [currentPage, totalPage])

  useEffect(() => {
    if (mountedRef.current) {
      iframeMessage.post('toggleAppbar', toggleAppbar)
    }
  }, [toggleAppbar])

  useEffect(() => {
    mountedRef.current = true
  }, [mountedRef])

  return (
    <Wrapper>
      <GlobalStyles
        styles={`
        body {
          position: fixed;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          overflow-x: hidden;
          overflow-y: hidden;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          touch-action: pan-x pan-y;
          overscroll-behavior-y: contain;
        }
      `}
      />
      <Appbar
        isOpen={toggleAppbar}
        leading={
          <Back onClick={() => nativeMessage.post('closeWebview')}>
            <BackIcon />
            <span className="sr-only">뒤로가기</span>
          </Back>
        }
        title={
          <Title onClick={() => setNavIsOpen(!navIsOpen)}>
            <TOC>
              <span>{chapterTitle}</span>
              <TitleIcon />
            </TOC>
          </Title>
        }
      />
      <Iframe id="iframe" ref={iframeRef} src={host} allow="autoplay" />
      {!!totalPage && (
        <Seekbar
          isOpen={toggleAppbar}
          value={currentPage}
          max={totalPage}
          onChange={(value) => setCurrentPage(value)}
        />
      )}
      {chapters && (
        <Navigation
          isOpen={navIsOpen}
          coverPath={host + coverPath}
          chapters={chapters}
          currentPage={currentPage}
          onClose={() => {
            setNavIsOpen(false)
          }}
          onChange={(title) => {
            setChapterTitle(title)
          }}
        />
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  height: 100%;
  user-select: none;
`

const Iframe = styled.iframe`
  display: block;
  overflow: hidden;
  border: none;
  width: 100%;
  height: 100%;
`

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-family: 'SF Pro Display', -apple-system, system-ui, 'Helvetica Neue',
    'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',
    sans-serif;
  font-size: 14px;
  font-weight: 800;
  color: var(--text-01);
`

const TOC = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 60%;
  height: 100%;
  min-width: 100px;
  color: #333;
  span {
    margin-right: 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  svg {
    min-width: 12px;
    min-height: 12px;
  }
`

const Back = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  margin-left: -8px;
`

export default App
