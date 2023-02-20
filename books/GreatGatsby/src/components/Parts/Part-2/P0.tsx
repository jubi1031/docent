import styled from 'styled-components'
import Commentary from '../../Commentary'

type P0Props = {
  isCurrentPage: boolean
}

const P0 = ({
  isCurrentPage
}: P0Props) => {
  return (
    <Wrapper>
      <Commentary>
        <Commentary.Header>
          <Commentary.Features src={'/images/opening/author.jpeg'} />
        </Commentary.Header>
        <Commentary.Body>
          <p>
            <Commentary.TextDecoration><Commentary.Quote>“&nbsp;</Commentary.Quote>웹툰으로 풀어낸 『위대한 개츠비』,</Commentary.TextDecoration>
            <Commentary.TextDecoration>재미있게 보셨나요?</Commentary.TextDecoration>
            <Commentary.TextDecoration>지금부터는 세 가지 키워드를 통해</Commentary.TextDecoration>
            <Commentary.TextDecoration>소설 『위대한 개츠비』를 깊이 알아볼 텐데요.</Commentary.TextDecoration>
            <Commentary.TextDecoration>작품을 이해하는 데 도움이 되었으면 합니다.<Commentary.Quote>&nbsp;”</Commentary.Quote></Commentary.TextDecoration>
          </p>
          <TOCGuide>목차를 통해 페이지 바로가기가 가능합니다.</TOCGuide>
        </Commentary.Body>
      </Commentary>
    </Wrapper>
  )
}

const Wrapper = styled.div``

const TOCGuide = styled.span`
  display: block;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: #A7A39A;
  margin: 20px 0;
`

export default P0