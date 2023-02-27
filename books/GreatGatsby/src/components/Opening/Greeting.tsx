import Modal from '@/components/Modal'
import WriterDetails from './WriterDetails'
// import { Messages } from '../KakaoTalk'

const Greeting = (): any => {
  // const messages: Messages[] = [
  //   {
  //     user: 'kim',
  //     messages: [
  //       '작품의 주요 스토리는 물론\n책에 대한 신선한 해설을\n들려드리는 밀리의 서재\n도슨트북.',
  //       '안녕하세요.\n아나운서 김해나입니다.\n오늘은 남녀노소 불문하고\n꾸준한 사랑을 받는\n소설 분야 베스트셀러\n<달러구트 꿈 백화점>에 대해\n재미있는 해설을 펼쳐볼 건데요.',
  //       '오늘 색다른 시각으로 책을\n소개해 주실 도슨트로\n정신과 전문의 양재웅 선생님과\n함께합니다.'
  //     ]
  //   },
  //   {
  //     user: 'yang',
  //     messages: [
  //       '안녕하세요.\n정신과 전무의 양재웅입니다.\n저도 <달러구트 꿈 백화점>을\n너무 재밌게 읽었어요.',
  //       '이 의뢰를 받았을 때 내가\n할 수 있는 마링 뭐가 있을까?\n고민이 좀 많이 됐거든요ㅕ.\n왜냐하면 제가 갖고 있는\n정신과적인 지식으로\n접근을 하게 되면 너무\n딱딱하거나 차갑게 분석을 \n할 수 밖에 없는 부분도\n생길 것 같아서 우려가 됐는데요.',
  //       '이 <달러구트 꿈 백화점>\n내용 구절 하나하나에서 제가 \n공감할 수 있는 부분들이\n많이 있었기 때문에 오늘\n이 자리에 참여를 하게 됐습니다.'
  //     ]
  //   },

  //   {
  //     user: 'kim',
  //     messages: [
  //       '오늘 정신의학적으로\n책을 해석을 해볼 건데요.\n원래 선생님은 책을 보실 때\n분석을 좀 하면서\n보시는 편이실까요?'
  //     ]
  //   },

  //   {
  //     user: 'yang',
  //     messages: [
  //       '제가 보는 보통 책들이 \n심리학적인 거나 아니면\n정신분석학적인 책들을 많이\n보기 때문에 그런 것들을 볼 때는 \n그냥 배우는 느낌으로 보고요.',
  //       '다만 스토리가 있는 소설이나\n아니면 영화 같은 거를 볼 때\n뭔가 개연성이라든지\n캐릭터의 어떤 연관성.\n그러니까 저런 배경에서 왜 \n저런 애가 나왔는지에 대해서\n제가 납득이 안 되면 몰입이 \n안 되는 경우들이 많이 있어요.',
  //       '근데 그런 차원에서 봤을 때\n<달러구트 꿈 백화점>은 \n상당히 공감이 많이 됐던\n작품인 것 같습니다.'
  //     ]
  //   },
  //   {
  //     user: 'kim',
  //     messages: [
  //       '도슨트북은 각각의 파트로 \n나뉘어 진행됩니다.',
  //       '파트1 에서는 책의 내용을\n흥미롭게 요약한 스토리가',
  //       '파트 2에서는 책에 대한\n색다른 해설이 진행됩니다.',
  //       '그리고 오직 밀리의 서재에서만\n볼 수 있는 영상 콘텐츠까지\n준비되어 있으니\n꼭 끝까지 함께해 주세요.'
  //     ]
  //   }
  // ]

  return (
    <>
      <Modal.Features>
        <img src="/images/opening/doctor.jpg" width="50%" alt="" />
      </Modal.Features>

      <Modal.Details>
        <WriterDetails>
          <strong>양재웅웅웅!!!</strong>
          <span>정신과 전문의</span>
          <p>
            정신의학 전문이며 W진병원 대표원장이다.
            <br />
            현재는 방송인을 겸하고 있으며
            <br />
            미스틱스토리에 소속되어있다.
          </p>
        </WriterDetails>
      </Modal.Details>
    </>
  )
}

export default Greeting
