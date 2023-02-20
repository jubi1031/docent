import styled from 'styled-components'
import Commentary from '../../Commentary'
import { iframeMessage, nativeMessage } from '@shared/utils'

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
          <Commentary.Features src={'/images/opening/author.jpeg'} />
        </Commentary.Header>
        <Commentary.Body>
          <p>
            <Commentary.TextDecoration><Commentary.Quote>“&nbsp;</Commentary.Quote>저와 함께 한 『위대한 개츠비』는 여기까지 입니다.</Commentary.TextDecoration>
            <Commentary.TextDecoration>밑에 있는 버튼을 누르시면</Commentary.TextDecoration>
            <Commentary.TextDecoration>『위대한 개츠비』 전자책을 읽을 수 있습니다.</Commentary.TextDecoration>
            <Commentary.TextDecoration>책을 통해 제가 미처 발견하지 못한</Commentary.TextDecoration>
            <Commentary.TextDecoration>『위대한 개츠비』 의 매력을 발견하시길 바랍니다.<Commentary.Quote>&nbsp;”</Commentary.Quote></Commentary.TextDecoration>
          </p>
          <Center>
            <GoBook onClick={(event) => {
              event.stopPropagation()

              iframeMessage.post('nativeMessage', {
                channel: 'openWebview',
                message: {
                  url: 'https://www.millie.co.kr/v3/bookDetail/15834359'
                }
              })
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fillRule="evenodd" clipRule="evenodd" d="M3.5 5.5C3.5 4.67157 4.17157 4 5 4H9.36667C9.45896 4 9.54945 4.02554 9.62811 4.0738L12 5.5288L14.3719 4.0738C14.4506 4.02554 14.541 4 14.6333 4H19C19.8284 4 20.5 4.67157 20.5 5.5V17.5C20.5 17.7761 20.2761 18 20 18H14.8017L12.3024 19.8982C12.1237 20.0339 11.8763 20.0339 11.6976 19.8982L9.19832 18H4C3.72386 18 3.5 17.7761 3.5 17.5V5.5ZM11.5 6.39525L9.22553 5H5C4.72386 5 4.5 5.22386 4.5 5.5V17H9.36667C9.47589 17 9.5821 17.0358 9.66908 17.1018L11.5 18.4924V6.39525ZM12.5 18.4924L14.3309 17.1018C14.4179 17.0358 14.5241 17 14.6333 17H19.5V5.5C19.5 5.22386 19.2761 5 19 5H14.7745L12.5 6.39525V18.4924Z" fill="#333333"/> </svg>
              전자책 보러 가기
            </GoBook>
          </Center>
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

export default P4