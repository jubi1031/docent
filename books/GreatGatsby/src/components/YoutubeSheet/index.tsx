import { iframeMessage } from '@shared/utils'
import { useState, useEffect, useRef } from 'react'
import Sheet, { SheetRef } from 'react-modal-sheet'
import styled from 'styled-components'

type YoutubeSheetProps = {
  currentPage: number
}

const YoutubeSheet = ({
  currentPage
}: YoutubeSheetProps) => {
  const sheetRef = useRef<SheetRef>();
  const [isOpen, setIsOpen] = useState(false)
  const [snapIndex, setSnapIndex] = useState(0)
  const [iframeSrc, setIframeSrc] = useState('')
  const [iframeTitle, setIframeTitle] = useState('')

  const getIframeSrc = (
    page: number
  ) => {
    if (page >= 116 && page <= 120) {
      return 'https://www.youtube.com/embed/wPEtnyg6sn0'
    }

    if (page >= 122 && page <= 123) {
      return 'https://www.youtube.com/embed/cH2PH0auTUU'
    }

    if (page >= 125 && page <= 127) {
      return 'https://www.youtube.com/embed/5Bo3f_9hLkQ'
    }

    if (page >= 129 && page <= 129) {
      return 'https://www.youtube.com/embed/SFrD-7wR9bc'
    }
    
    return ''
  }

  const getIframeTitle = (
    page: number
  ) => {
    if (page >= 116 && page <= 120) {
      return 'Al Jolson – Swanee'
    }

    if (page >= 122 && page <= 123) {
      return 'George Gershwin - Rhapsody in Blue'
    }

    if (page >= 125 && page <= 127) {
      return 'Bessie Smith - St.Louis Blues'
    }

    if (page >= 129 && page <= 129) {
      return 'Vaughn De Leath - Banana Oil'
    }

    return ''
  }  

  useEffect(() => {
    const isOpen = !!getIframeSrc(currentPage)
    setIsOpen(isOpen)
  }, [currentPage])

  useEffect(() => {
    if (!isOpen) {
      setIframeSrc('')
    }
  }, [isOpen])

  return (
    <Wrapper onClick={(event) => {
      event.stopPropagation()

      if (snapIndex === 1) {
        sheetRef.current.snapTo(0)
      }
      
      iframeMessage.post('closeAppbar')
    }}>
      <StyledSheet
        ref={sheetRef}
        isOpen={isOpen && window.navigator.onLine}
        onClose={() => sheetRef.current.snapTo(1)}
        snapPoints={[0.34, 0.12]}
        onSnap={(snapIndex) => setSnapIndex(snapIndex)}
        onOpenEnd={() => {
          const src = getIframeSrc(currentPage)
          setIframeSrc(src)

          const title = getIframeTitle(currentPage)
          setIframeTitle(title)
        }}
      >
        <StyledSheet.Container>
          <StyledSheet.Header />
          <StyledSheet.Content>
            {iframeSrc && (
              <Video snapIndex={snapIndex}>
                {snapIndex === 1 && <Title>{iframeTitle}</Title>}
                <Iframe width="560" height="315" src={`${iframeSrc}?loop=1&playsinline=1`} frameBorder="0" />
              </Video>
            )}
          </StyledSheet.Content>
        </StyledSheet.Container>    
      </StyledSheet>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  
`

const StyledSheet = styled(Sheet)`
  width: 100%;
  max-width: 500px;
  left: 50%!important;
  transform: translate(-50%, 0)!important;
  .react-modal-sheet-container {
    will-change: transform;
    border-radius: 40px 40px 0 0 !important;
    box-shadow: none !important;
    background: rgba(68, 68, 68, 0.9) !important;
  }
`

const Video = styled.div<{ snapIndex: number }>`
  position: relative;
  padding: 10px 24px 24px;
  height: 100%;
  overflow: ${({ snapIndex }) => snapIndex > 0 ? 'hidden' : 'auto'};
`

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  min-height: 192px;
  background: rgba(68, 68, 68, 0.9);
  &[src=""] {
    display: none;
  }
`

const Title = styled.em`
  display: block;
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  color: #DFDFDF;
  font-style: normal;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  & + ${Iframe} {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }
`

export default YoutubeSheet