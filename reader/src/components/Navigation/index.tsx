import styled from 'styled-components'
import Sheet, { SheetRef } from 'react-modal-sheet'
import { iframeMessage } from '@shared/utils'
import { useState, useRef, useEffect } from 'react'

type Chapter = {
  title: string
  page: number
  depth: number
}

type Chapters = Chapter[]

type NavigationProps = {
  isOpen: boolean
  chapters: Chapters
  coverPath: string
  currentPage: number
  onClose: () => void
  onChange: (title: string) => void
}

const Navigation = ({
  isOpen,
  chapters,
  coverPath,
  currentPage,
  onClose,
  onChange
}: NavigationProps) => {
  const sheetRef = useRef<SheetRef>()
  const [currentChapter, setCurrentChapter] = useState<Chapter>(null)
  const isAOS = useRef(/Android/i.test(navigator.userAgent))

  useEffect(() => {
    setCurrentChapter(
      chapters.filter(chapter => (chapter.page - 1) <= currentPage).pop()
    )
  }, [currentPage])

  useEffect(() => {
    if (currentChapter) {
      onChange(currentChapter.title)
    }
  }, [currentChapter])

  return (
    <Wrapper className={isAOS.current ? 'aos' : ''}>
      <StyledSheet
        ref={sheetRef}
        isOpen={isOpen}
        onClose={onClose}
        rootId={isAOS.current ? '' : 'root'}
        prefersReducedMotion={isAOS.current}
        className={isAOS.current ? 'aos' : ''}
      >
        <StyledSheet.Container>
          <StyledSheet.Content>
            <Content>
              <Sticky>
                <TOC type="button" className={'is-active'}>목차</TOC>
                <Close onClick={onClose}>
                  {isAOS.current ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12 19L5 12L12 5" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <line x1="6" y1="12" x2="19" y2="12" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </svg>
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M18 6L6 18" stroke="#444444" strokeWidth="2" strokeLinecap="round"/> <path d="M18 18L6 6" stroke="#444444" strokeWidth="2" strokeLinecap="round"/> </svg>
                  )}
                </Close>
              </Sticky>
              <NavList>
                {chapters.map(chapter => (
                  <NavLink
                    href="#"
                    key={chapter.title}
                    onClick={(event) => {
                      event.preventDefault()
                      iframeMessage.post('currentPage', chapter.page - 1)
                      setTimeout(() => onClose(), 25)
                    }}
                    className={chapter === currentChapter ? 'is-active' : ''}
                  >
                    <Page>{chapter.page}</Page>
                    {chapter.depth > 1 && <Depth>ㄴ</Depth>}
                    <Title>{chapter.title}</Title>
                  </NavLink>
                ))}
              </NavList>
              <Backdrop coverPath={coverPath} />
            </Content>
          </StyledSheet.Content>
        </StyledSheet.Container>
        <StyledSheet.Backdrop />
      </StyledSheet>
    </Wrapper>
  )
}

const Wrapper = styled.div``

const StyledSheet = styled(Sheet)`
  &.aos {
    .react-modal-sheet-container {
      height: 100% !important;
      border-radius: 0 !important;
    }
    .react-modal-sheet-backdrop  {
      display: none;
    }
  }
`

const Content = styled.div`
  position: relative;
  height: 100%;
`

const Sticky = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;  
  padding: 48px 16px 24px 16px;
  margin-bottom: 48px;
  .aos & {
    padding: 152px 16px 14px 64px;
    margin-bottom: 0;
  }
`

const TOC = styled.button`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
`

const Close = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  .aos & {
    position: absolute;
    left: 12px;
    top: 12px;
  }
`

const NavList = styled.nav`
  border-top: 1px solid rgba(176, 179, 188, 0.3);
`

const NavLink = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  line-height: 20px;
  color: #666;
  padding: 12px 24px 12px 24px;
  border-bottom: 1px solid rgba(176, 179, 188, 0.1);
  &.is-active {
    background: rgba(162, 162, 162, 0.22);
  }
`

const Page = styled.span`
  min-width: 24px;
`

const Depth = styled.span`
  font-size: 15px;
  line-height: 20px;
  color: #000;
`

const Title = styled.em`
  font-style: normal;
  .is-active & {
    color: #242424;
    font-weight: 700;
  }
`

const Backdrop = styled.div<{ coverPath: string }>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  max-height: 568px;
  opacity: 0.2;
  filter: blur(2px);
  pointer-events: none;
  background-image: url(${({ coverPath }) => coverPath});
  background-position: 0 0;
  background-size: 100%;
  background-repeat: no-repeat;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 26.93%,rgba(255,255,255,1) 100%);
  }
`

export default Navigation