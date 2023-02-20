import styled from 'styled-components'
import Commentary from '../../Commentary'
import Paragraph from '../../Paragraph'
import Character from '../../Character'

const P2_0 = () => (
  <Wrapper>
    <img src="/images/part2/P2s.jpg" alt="" />
  </Wrapper>
)

const P2_1 = () => {
  return (
    <Commentary>
      <Commentary.Header>
        <Commentary.Features src={'/images/opening/author.jpeg'} />
      </Commentary.Header>
      <Commentary.Body>
        <p>
          <Commentary.TextDecoration><Commentary.Quote>“&nbsp;</Commentary.Quote>소설 『위대한 개츠비』속 주요 인물들을</Commentary.TextDecoration>
          <Commentary.TextDecoration>심층 분석하려고 합니다. 각 인물에 대한 글마다</Commentary.TextDecoration>
          <Commentary.TextDecoration>실제 1920년대 미국에서 유행했던</Commentary.TextDecoration>
          <Commentary.TextDecoration>재즈 곡들을 소개하고 있습니다.</Commentary.TextDecoration>
          <Commentary.TextDecoration>이 음악들을 들으며 1920년대의 뉴욕에서 활동하는</Commentary.TextDecoration>
          <Commentary.TextDecoration>주인공들을 상상해보는 것도 좋겠습니다.<Commentary.Quote>&nbsp;”</Commentary.Quote></Commentary.TextDecoration>
        </p>
      </Commentary.Body>
    </Commentary>
  )
}

const P2_2 = () => (
  <Character>
    <Character.Thumb src="/images/part2/gatsby.jpg" />
    <Character.Name>개츠비</Character.Name>
    <Character.Text>그는 왜 그토록 데이지에 집착했을까?</Character.Text>
  </Character>
)

const P2_3 = () => (
  <Paragraph>
    소설의 주인공이다. 서부 노스다코타의 가난한 농부의 아들로 태어났고, 교육도 제대로 받지 못했다. 하지만 호화로운 요트를 소유한 어느 부자의 환심을 사서 그와 함께 5년을 지내면서, 개츠비는 부자들의 매너와 품위를 배우면서 부자 코스프레를 하기 시작했다.
  </Paragraph>
)

const P2_4 = () => (
  <Paragraph>
    1차 세계대전 참전 후 귀국해서 그는 조직폭력배의 대부와 손을 잡고 밀주 매매와 채권의 불법 거래 등 부당한 방법을 통해서 벼락부자가 되었다. 성공과 출세에 대한 야망과 열정만 있다면 그 꿈을 거머쥘 수 있는 ‘아메리칸드림’의 산 증인이 된 것이다. 
  </Paragraph>
)

const P2_5 = () => (
  <Paragraph>
    흥미로운 것은 그가 성공하고자 몸부림쳤던 가장 큰 동인은 사랑한 여인, 데이지 때문이었다. 백만장자가 된 이후 개츠비는 온통 데이지를 다시 차지하는 생각뿐이었다. 그가 주말마다 그의 롱아일랜드 대저택에서 화려한 파티를 열었던 것도 사랑하는 데이지가 파티에 와주기를 간절히 바랐기 때문이다. 
  </Paragraph>
)

const P2_6 = () => (
  <Paragraph>
    왜 개츠비는 그렇게 데이지에 집착했을까? 데이지는 개츠비가 아메리칸드림을 완성하기 위해선 꼭 필요한 존재였다. 그가 경제적으론 성공했을지 몰라도, 그의 출신과 배경을 감출 수 있을지는 몰라도, 누가 보아도 ‘아메리칸드림’의 아이돌로 포장할 수 있을지 몰라도, 개츠비는 자신의 출신과 배경에 대한 콤플렉스를 떨칠 수 없었다.
  </Paragraph>
)

const P2_7 = () => (
  <Paragraph>
    그것을 극복하고 진정한 ‘아메리칸드림’을 이루기 위해서는 데이지를 차지해야 했다. 그것이 그의 삶의 목표와 이상이었고, 바로 그러한 이상이 그를 비극의 주인공으로 몰아가고 말았다. 
  </Paragraph>
)

const P2_8 = () => (
  <Character>
    <Character.Thumb src="/images/part2/daisy.jpg" />
    <Character.Name>데이지</Character.Name>
    <Character.Text>‘아메리칸 드림’의 모호함과 허상</Character.Text>
  </Character>
)

const P2_9 = () => (
  <Paragraph>
    개츠비가 1차 세계대전 참전으로 놓쳐버린 데이지는 상류층 부잣집 딸이다. 그녀는 개츠비와 사랑에 빠졌지만, 개츠비와 결혼하지 않는다. 그녀는 전형적인 ‘플래퍼’이다. 그녀에겐 파티와 의상, 세인들의 이목이 중요했다. 이러한 그녀의 삶을 위해서 그녀가 원하는 배우자 조건은 물질적 풍요와 근사한 출신배경이었다. 그래서 그녀는 출신배경이 모호한 개츠비를 버리고, 명문 집안과 명문 대학을 나온 톰 뷰캐넌을 남편으로 선택한다. 
  </Paragraph>
)

const P2_10 = () => (
  <Paragraph>
    개츠비가 성공해서 다시 나타나자 데이지는 잠시 옛사랑의 달콤함에 흔들리지만, 개츠비가 어떻게 부를 거머쥐게 되었는가를 알게 되면서 다시 한번 개츠비를 포기하고 남편에게 돌아간다. 개츠비와 데이지의 운명은 사실 돈보다는 넘을 수 없는 출신배경이었다. 성공만능주의와 ‘아메리칸드림’의 설명할 수 없는 모호함과 허상이 데이지를 통해서 조명된다. 데이지의 모습과 태도에서 미국 사회에 깊게 뿌리박혀 있는 계급의 존재와 ‘아메리칸드림’의 엄연한 차이를 볼 수 있다. 
  </Paragraph>
)

const P2_11 = () => (
  <Character>
    <Character.Thumb src="/images/part2/tom.jpg" />
    <Character.Name>톰</Character.Name>
    <Character.Text>‘제대로’된 미국 상류계층의 젊은이</Character.Text>
  </Character>
)

const P2_12 = () => (
  <Paragraph>
    데이지의 남편이 된 뷰캐넌은 막대한 재산을 물려받은 부자에다 예일대 출신이었다. 그는 개츠비와는 달리 제대로 된 상류계층의 젊은이이다. 예일대 풋볼 선수 출신으로서 지·덕·체를 겸비한 뷰캐넌은 데이지의 남편으로서 손색이 없다. 그는 결혼선물로 데이지에게 35만 달러 상당의 진주목걸이를 선물한다. 그것은 오늘날 가치로 5백만 달러가 넘는 초호화 선물이다. 
  </Paragraph>
)

const P2_13 = () => (
  <Paragraph>
    하지만 그는 성실한 남편이 아니었다. 자동차 수리공 부인과 불륜관계를 맺고 있었다. 뷰캐넌과 데이지는 서로 사랑하는 사이가 아니었지만 사랑은 두 사람에게 그다지 중요하지 않았다. ‘흥청망청한 20년대’를 살아가는 그들에게 중요한 것은 상류계층이 줄 수 있는 단단한 안정감과 찬란한 엠블렘이었다.
  </Paragraph>
)

const P2_14 = () => (
  <Paragraph>
    그들에게 사랑의 순수함이나 계층의 품격은 그다지 문제가 되지 않는다. 뷰캐넌은 자동차 수리공을 꼬드겨 개츠비를 죽이게 한다. 신분이 높고 머리는 좋을지 모르지만, 그는 자신의 이익을 위해서는 한없이 야비하고 비열할 수 있는 상류계층의 인물이다.
  </Paragraph>
)

const P2_15 = () => (
  <Character>
    <Character.Thumb src="/images/part2/nick.jpg" />
    <Character.Name>닉</Character.Name>
    <Character.Text>이야기를 풀어가는 목격자</Character.Text>
  </Character>
)

const P2_16 = () => (
  <Paragraph>
    『위대한 개츠비』에서 일인칭 관찰자의 시점으로 이야기를 풀어내는 사람으로서 소설의 내용과 방향, 등장인물에 대한 분석 등을 제시한 소설에서 가장 중요한 인물이다. 캐러웨이는 데이지의 먼 친척이자 뷰캐넌의 대학 동창으로 글을 쓰면서 주식과 채권업에 종사한다. 캐러웨이의 시선을 빌려서 저자인 F. 스콧 피츠제랄드는 그 자신의 경험담에다 그가 목격한 주위 사람들의 이야기를 뒤섞어서 1920년대 시대상을 마치 실제 인물의 자전적 소설처럼 풀어나간다.
  </Paragraph>
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
  P2_0,
  P2_1,
  P2_2,
  P2_3,
  P2_4,
  P2_5,
  P2_6,
  P2_7,
  P2_8,
  P2_9,
  P2_10,
  P2_11,
  P2_12,
  P2_13,
  P2_14,
  P2_15,
  P2_16
]