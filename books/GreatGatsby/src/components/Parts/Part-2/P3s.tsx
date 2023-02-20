import styled from 'styled-components'
import Paragraph from '../../Paragraph'
import Commentary from '../../Commentary'

const P3_0 = () => (
  <Wrapper>
    <img src="/images/part2/P3s.jpg" alt="" />
  </Wrapper>
)

const P3_1 = () => {
  return (
    <Commentary>
      <Commentary.Header>
        <Commentary.Features isCover={true} src={'/images/opening/cover.jpeg'} />
      </Commentary.Header>
      <Commentary.Body>
        <p>
          <Commentary.TextDecoration><Commentary.Quote>“&nbsp;</Commentary.Quote>소설 『위대한 개츠비』가 꾸준히</Commentary.TextDecoration>
          <Commentary.TextDecoration>사랑받는 이유는 무엇일까요?</Commentary.TextDecoration>
          <Commentary.TextDecoration>그리고, 이 소설의 제목은</Commentary.TextDecoration>
          <Commentary.TextDecoration>왜 ‘위대한’ 개츠비일까요?<Commentary.Quote>&nbsp;”</Commentary.Quote></Commentary.TextDecoration>
        </p>
      </Commentary.Body>
    </Commentary>
  )
}

const P3_2 = () => (
  <Paragraph>
    『위대한 개츠비』는 <Paragraph.Liner>가장 미국적인 소설</Paragraph.Liner>이다.
    이 소설은 1920년대라는 미국 문명사의 한 획을 긋는 시대뿐만 아니라 오랫동안 미국인들을 사로잡은 ‘아메리칸드림’의 정신적 영역까지 담고 있다.
    1920년대를 살아가는 등장인물들을 통해서 ‘아메리칸드림’의 빛과 어두움을 함축적이면서 다양한 스펙트럼으로 빚어내며, 심지어는 <Paragraph.Liner>시대의 역사성에 대한 심오한 철학적 논의</Paragraph.Liner>를 제시한다.    
  </Paragraph>
)

const P3_3 = () => (
  <Paragraph>
    『위대한 개츠비』는 단순히 1920년대 미국과 미국인들에 관한 이야기만은 아니다.
    미국 자본주의의 부침이 계속되고, <Paragraph.Liner>‘아메리칸드림’의 이상과 환상</Paragraph.Liner>이 계속되는 한 소설의 이야기와 그 속에 함축된 메시지는 시대와 국경을 초월해서 울림이 클 수밖에 없다.
    자본주의에 노출된 사회는 어디나 물질적 쾌락과 환락을 추구하는 사람들로 들끓을 수밖에 없고, 그 속에서 도덕적 마비와 무책임에 대한 그림자가 드리워진다. 그리고 그 <Paragraph.Liner>욕망과 환락이 어떻게 귀결될지에 대한 두려움</Paragraph.Liner>이 내습한다.
    이는 만유의 현상이다.
  </Paragraph>
)

const P3_4 = () => (
  <>
    <Paragraph>
      이 두려움은 여지없이 현실로 다가왔다.
      소설이 발표된 지 불과 몇 년 후에 미국 <Paragraph.Liner>역사상 최악의 경제 대공황</Paragraph.Liner>이 발발했다.
      이것이 순전히 우연한 결과일 수 있지만, <Paragraph.Liner>흥청망청한 시대의 아이콘이던 개츠비의 비극적인 죽음은 다가오는 불행의 암시</Paragraph.Liner>로 보인다.
      작가 F 스콧 피츠제랄드의 신기(神氣)에 가까운 <Paragraph.Liner>예지력이 이 소설을 시대를 초월한 최고의 미국적 소설로 자리매김</Paragraph.Liner>할 수 있게 만들었다.
    </Paragraph>
    <Paragraph>
      소설이란 허구이며 그 <Paragraph.Liner>허구적인 프로즈(prose)가 얼마나 독자를 매혹</Paragraph.Liner>하는지가 그 소설의 가치를 가늠한다.
      『위대한 개츠비』 역시 개츠비를 중심으로 허구적 캐릭터들의 <Paragraph.Liner>허무맹랑한 인생을 담아내면서 ‘아메리칸드림’의 환상과 환멸</Paragraph.Liner>을 드러낸다. 
    </Paragraph>
  </>
)

const P3_5 = () => (
  <Paragraph>
    개츠비의 데이지에 대한 맹목적이며 순수한 사랑은 분명 허무맹랑하다.
    그렇게 부러울 것이 없이 성공한 재력가가 그런 사랑을 추구한다는 것은 너무 비현실적이다.
    그가 아무리 불온한 방법으로 부를 거머쥐었다 하더라고 한 여자에 대한 순애보 사랑은 물질만능주의 환락의 극치에서 먼 옛날의 순수함에 대한 아련한 회상을 자아낸다.
    그런데 <Paragraph.Liner>개츠비는 그것을 손에 쥐지 못하고 끝내 비운의 주인공이 되면서 독자들의 가슴을 시리게 한다.</Paragraph.Liner>
  </Paragraph>
)

const P3_6 = () => (
  <>
    <Paragraph>
      이런 순수한 문학적 감수성이 없었다면 『위대한 개츠비』는 그냥 1920년대 미국과 미국인의 모습을 담은 역사적 소설로 남을 수밖에 없었을 것이다.
      짙은 시대적 채색의 바탕 위에 여러 등장인물이 빚어내는 다양한 스펙트럼과 가슴 시린 러브스토리, 그리고 <Paragraph.Liner>‘아메리칸드림’의 빛과 어두움이 시대에 따라 서로 다른 해석의 여지를 남기는 윤리적이며 철학적 여운</Paragraph.Liner>이 『위대한 개츠비』를 시대를 초월한 가장 미국적이며 위대한 소설의 반열에 들게 한다. 
    </Paragraph>
    <Paragraph>
      그래서 저자는 <Paragraph.Liner>주인공의 불운과는 상관없이 소설의 제목을 “위대한” 개츠비라고 했을 것이다. </Paragraph.Liner>
    </Paragraph>
  </>
)

const Wrapper = styled.div`
  img {
    display: block;
    margin: 0 auto;
    max-height: 100vh;
   @media (max-height: 480px) {
     max-height: unset;
   }
  }
`

export default [
  P3_0,
  P3_1,
  P3_2,
  P3_3,
  P3_4,
  P3_5,
  P3_6
]