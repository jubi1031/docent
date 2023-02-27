import styled from 'styled-components'
import Commentary from '../../Commentary'
import { iframeMessage, nativeMessage } from '@shared/utils'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { clamp } from '@shared/utils'
import Paragraph from '../../Paragraph'
import {
  MIN_VIEWPORT,
  MAX_VIEWPORT,
} from '@/constants'

type P4Props = {
  isCurrentPage: boolean
}

const P4 = ({
  isCurrentPage
}: P4Props) => {
  return (
    <Wrapper>
      <Commentary>
        <Commentary.Header>
          <Commentary.Features src={'/images/part2/announcer.png'} />
        </Commentary.Header>
        <Commentary.Body>
          <Body>
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <Paragraph>
                  <Commentary.TextDecoration><Commentary.Quote>“&nbsp;</Commentary.Quote>정신의학적 시선으로 해설을 더한</Commentary.TextDecoration>
                  <Commentary.TextDecoration>&lt;달러구트 꿈 백화점&gt; 오디오 도슨트</Commentary.TextDecoration>
                  <Commentary.TextDecoration>재미있게 들으셨나요?</Commentary.TextDecoration>
                  <Commentary.TextDecoration>아래 버튼을 누르시면&lt;달러구트 꿈 백화점&gt;의</Commentary.TextDecoration>
                  <Commentary.TextDecoration>전자책을 읽으실 수 있습니다.<Commentary.Quote>&nbsp;”</Commentary.Quote></Commentary.TextDecoration>
                </Paragraph>
              </SwiperSlide>
              <SwiperSlide>
                <Paragraph>
                  <Commentary.TextDecoration><Commentary.Quote>“&nbsp;</Commentary.Quote>여러분도 책을 읽으며</Commentary.TextDecoration>
                  <Commentary.TextDecoration>다양한 상상을 펼처보길 바랍니다.</Commentary.TextDecoration>
                  <Commentary.TextDecoration>또한 도슨트가 재미있으셨다면</Commentary.TextDecoration>
                  <Commentary.TextDecoration>한 줄 리뷰도 꼭 남겨주세요.</Commentary.TextDecoration>
                  <Commentary.TextDecoration>감사합니다.<Commentary.Quote>&nbsp;”</Commentary.Quote></Commentary.TextDecoration>
                </Paragraph>
              </SwiperSlide>
            </Swiper>
            <Center>
              <GoBook onClick={(event) => {
                event.stopPropagation()

                iframeMessage.post('nativeMessage', {
                  channel: 'openWebview',
                  message: {
                    url: 'https://millie.page.link/j6pCF'
                  }
                })
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fillRule="evenodd" clipRule="evenodd" d="M3.5 5.5C3.5 4.67157 4.17157 4 5 4H9.36667C9.45896 4 9.54945 4.02554 9.62811 4.0738L12 5.5288L14.3719 4.0738C14.4506 4.02554 14.541 4 14.6333 4H19C19.8284 4 20.5 4.67157 20.5 5.5V17.5C20.5 17.7761 20.2761 18 20 18H14.8017L12.3024 19.8982C12.1237 20.0339 11.8763 20.0339 11.6976 19.8982L9.19832 18H4C3.72386 18 3.5 17.7761 3.5 17.5V5.5ZM11.5 6.39525L9.22553 5H5C4.72386 5 4.5 5.22386 4.5 5.5V17H9.36667C9.47589 17 9.5821 17.0358 9.66908 17.1018L11.5 18.4924V6.39525ZM12.5 18.4924L14.3309 17.1018C14.4179 17.0358 14.5241 17 14.6333 17H19.5V5.5C19.5 5.22386 19.2761 5 19 5H14.7745L12.5 6.39525V18.4924Z" fill="#333333" /> </svg>
                전자책 보러 가기
              </GoBook>
            </Center>
          </Body>
        </Commentary.Body>
      </Commentary>
    </Wrapper>
  )
}

const Wrapper = styled.div``

const Center = styled.div`
  text-align: center;
  margin-top: 32px;
`

const GoBook = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  font-size: 16px;
  border: 1px solid #333333;
  border-radius: 100px;
  svg {
    margin-right: 2px;
  }
`

const Body = styled.div`
  .swiper {
  margin: 0 auto;
  overflow: hidden;
}
  .swiper - wrapper {
  display: flex;
}
  .swiper - slide {
  flex - shrink: 0;
}
  .swiper - pagination {
  display: flex;
  justify - content: center;
  gap: 6px;
  margin - top: 4px;
}
  .swiper - pagination - bullet {
  display: block;
  width: 5px;
  height: 5px;
    ${clamp('width', [MIN_VIEWPORT, MAX_VIEWPORT, 5])};
    ${clamp('height', [MIN_VIEWPORT, MAX_VIEWPORT, 5])};
  background - color: #DFDFDF;
  border - radius: 50 %;
}
  .swiper - pagination - bullet - active {
  background - color: #242424;
}
`

export default P4