import ParagraphM from '../../ParagraphM'
import Message from '../../Message'
import styled from 'styled-components'
import { iframeMessage } from '@shared/utils'
import { MIN_VIEWPORT, MAX_VIEWPORT } from '@/constants'
import { clamp } from '@shared/utils'
import KakaoTalk, { Messages } from '@/components/KakaoTalk'
import { useSound } from '@shared/hooks'

const P1_0 = () => {
  const messages: Messages[] = [
    {
      user: 'kim',
      messages: [
        '꿈을 만드는 사람.\n꿈을 파는 사람.\n 꿈을 사는 사람들의 비밀스러운\n에피소드들로 구성된\n<달러구트 꿈 백화점> 이야기\n재밌게 보셨나요?',
        '저 같은 경우에는 사실 꿈을\n그렇게 자주 꾸는 편은 아닌데,\n 가끔은 또 엄청\n생뚱맞은 꿈을 꾸기도 하고,\n또 어떤 떄는 제 고민이나\n관심사 이런 것들이 꿈에 나오면\n확실히 나의 내면과\n연결이 돼 있다 라는 생각도 들고.',
        '선생님은 어떻게 보셨나요?'
      ]
    },
    {
      user: 'yang',
      messages: [
        "저도 되게 재밌게 봤어요.\n동화나 이런 판타지물을 제가 좋아하는 건 아닌데,\n디즈니의 '인사이드 아웃'이나\n'유미의 세포들'이라는\n웹툰도 좀 생각이 났고요.",
        '인사이드',
        '유미',
        '기본적으로 인간의 어떤 \n심리를 다루는, \n그래서 그거에 대해서 공감대를 \n끌어낼 수 있는 작품이었기 \n때문에 저도 몰입을 해서 볼 수 \n있었던 것 같고 공감되는 부분도 많았고 \n감명 깊었던 부분도 \n있었던 것 같습니다.'
      ]
    }
  ]

  return <KakaoTalk messages={messages} />
}

const P1_1 = () => {
  const messages: Messages[] = [
    {
      user: 'kim',
      messages: [
        "이야기를 끌어가는 주요 소재는 \n'꿈'인데요.",
        "책에 따르면 시간의 신이 사람들에게 깨달음을 주기 위해\n사람들이 잠들어 있는 동안\n그림자가 대신 깨어있게 하고,\n그 그림자가 밤새 생각하고 \n느끼고 경험한 모든 것들에\n이름을 붙여\n'꿈'이라고 했다고 하거든요.",
        "선생님 정신의학적인 면으로\n 봤을 때'꿈'은 뭘까요.\n우리가 왜\n'꿈'을 꾸게 되는 걸까요?"
      ]
    },
    {
      user: 'yang',
      messages: [
        "'프로이트'의 꿈의 해석을 보면\n꿈이라는 거는 현재 내가 \n의식적으로 소화하기 어려운,\n그래서 무의식으로\n밀어놨던 것들이\n발현되는 거라고 얘기를 해요.",
        '프로이드 사진',
        "'지그문트 프로이트' 오스트리아의 생리학자, 정신병리학자, 정신분석의 창시자.",
        '의식적으로 소화하기 어렵다\n라는 건 뭐냐면,',
        "우리 인간이 이제'초자아'가 있고,\n'이드'라고 하는 본능이 있는데,'초자아'나'자아'같은 경우가\n현실에서 상식적으로 \n타인과 관계를 맺고 일을 할 수 있게 해주는,\n나의 어떤 정체성을 유지시켜주는 장치거든요.",
        '얘네들 때문에 저질러서는\n안 되는 생각 이라든지\n이런 것들이 되게 많단 말이에요.',
        '그런데 그런 것들이 꿈에서\n발현되는 것들이 많죠.\n그래서 무의식적인 어떤\n나의 욕구가 나온다던지\n아니면 결핍과 관련된 것들이\n나온다던지.\n그렇게 이제 꿈의 해석을\n과거에는 많이 했었던 것 같고요.',
        '현대의학에서는 그거에\n큰 비중을 두지 않고 있고,\n꿈은 이제 수면 중에서 \n뇌의 일부가 깨어있는 상태에서\n기억이나 혹은 정보의 이미지가\n무작위로 조합이 돼서\n그냥 재생이 되는 거다.\n라는 식으로 해석을 하는 경우가\n많은 것 같습니다.'
      ]
    }
  ]

  return <KakaoTalk messages={messages} />
  /*
    <ParagraphM>
      <Message.Background>
        <Message.BackgroundH>
          <Message.All>
          
            <Message.ImageR src="/images/part2/Freud.jpg" />
  
            <Message.Next></Message.Next>
            <Message.BoxC>
              <Message.Box>
                <p>
                  ‘지그문트 프로이트’
                  <br />
                  오스트리아의 생리학자, 정신병리학자,
                  <br />
                  정신분석의 창시자.
                </p>
              </Message.Box>
            </Message.BoxC>
            <Message.Next></Message.Next>
  
            <Message.CWrapperR>
              <p>
                의식적으로 소화하기 어렵다
                <br />
                라는 건 뭐냐면,
              </p>
            </Message.CWrapperR>
            <Message.CWrapperR>
              <p>
                우리 인간이 이제 '초자아'가 있고,
                <br />
                '자아'가 있고,
                <br />
                '이드'라고 하는 본능이 있는데,
                <br />
                '초자아'나 '자아'같은 경우가
                <br />
                현실에서 상식적으로
                <br />
                타인과 관계를 맺고
                <br />
                일을 할 수 있게 해주는,
                <br />
                나의 어떤 정체성을
                <br />
                유지시켜주는 장치거든요.
              </p>
            </Message.CWrapperR>
            <Message.CWrapperR>
              <p>
                얘네들 때문에 저질러서는
                <br />
                안 되는 생각 이라든지
                <br />
                이런 것들이 되게 많단 말이에요.
              </p>
            </Message.CWrapperR>
            <Message.CWrapperR>
              <p>
                그런데 그런 것들이 꿈에서
                <br />
                발현되는 것들이 많죠. <br />
                그래서 무의식적인 어떤
                <br />
                나의 욕구가 나온다던지
                <br />
                아니면 결핍과 관련된 것들이
                <br />
                나온다던지. <br />
                그렇게 이제 꿈의 해석을
                <br />
                과거에는 많이 했었던 것 같고요.
              </p>
            </Message.CWrapperR>
            <Message.CWrapperR>
              <p>
                현대의학에서는 그거에
                <br />
                큰 비중을 두지 않고 있고,
                <br />
                꿈은 이제 수면 중에서
                <br />
                뇌의 일부가 깨어있는 상태에서
                <br />
                기억이나 혹은 정보의 이미지가
                <br />
                무작위로 조합이 돼서
                <br />
                그냥 재생이 되는 거다.
                <br />
                라는 식으로 해석을 하는 경우가
                <br />
                많은 것 같습니다.
              </p>
            </Message.CWrapperR>
  
            <Message.Next></Message.Next>
  
            <NextTalk
              onClick={(event) => {
                event.stopPropagation()
                iframeMessage.post('nativeMessage', {
                  channel: 'openWebview',
                  message: {
                    url: 'https://millie.page.link/j6pCF'
                  }
                })
              }}>
              다음 대화로 넘어가기 &nbsp;&gt;
            </NextTalk>
          </Message.All>
        </Message.BackgroundH>
      </Message.Background>
    </ParagraphM>*/
}

const P1_2 = () => {
  const messages: Messages[] = [
    {
      user: 'kim',
      messages: [
        '이 책에서도 보면\n범고래가 되는 꿈이라든지,\n다른 사람이 되는 꿈 등\n한 번도 보지 못한 풍경이나\n말도 안 되는 다양한 꿈들이\n나오거든요.',
        '그럼 그게 다 그냥\n각각의 기억일 뿐이다.\n무작위로 조합된 기억일 뿐이다.\n이렇게 해석을 할 수 있다는 거죠?'
      ]
    },
    {
      user: 'yang',
      messages: [
        "네 맞습니다.\n'우리 마음속에는 검열관이 있다'\n라고 이제'프로이트'가 얘기를\n했는데 아까 말씀드린 것처럼\n'초자아'나 '자아'의 역할이거든요.",
        '그래서 윤리적이지 못한\n기억이나 정보 생각들이\n우리가 의식화하기가\n굉장히 어려워요.',
        '그걸 의식화 했다가는\n뭔가 내 세계관이\n무너지는 것 같거든요.',
        '그래서 이제 그런 것들이\n은유적으로 어떤 상징적으로\n표현이 되는 것들이 있을 수\n있는 거라고 볼 수 있겠죠.'
      ]
    },
    {
      user: 'kim',
      messages: [
        '그런데 아직도 사람들은\n꿈에서 의미를 찾으려고\n노력을 많이 하거든요.',
        '돼지나 연예인이 나오는 꿈을\n길몽으로 생각을 한다거나\n뭐 이런 것들이 있잖아요.',
        '길몽,흉몽. 이거 정말 전혀 의미가 없는 걸까요?'
      ]
    },
    {
      user: 'yang',
      messages: [
        '큰 의미가 없다고\n보시면 될 것 같고요.',
        '본인이 뭔가 지금 \n불편한 상황이 있는데,\n그거를 막상 직면하기에는 \n좀 상황적으로나 아니면 \n자기의 어떤 상태적으로나\n좀 두려운 분들이 그걸 꿈에서 \n나타내는 분들이 있거든요.',
        '그게 반복해서 계속 계속\n비슷한 내용의 꿈을 꾸고 있다면\n그거를 한 번쯤은 의식 수준으로\n끌어 올려서',
        "'내가 왜 이런 꿈을 꾸고 있는가?'\n에 대해서 한 번쯤 생각해보고,\n그래서 현재의 갈등과\n결핍이 뭔지에 대해서\n파악해볼 필요는 있겠죠.",
        '하지만 그렇다고 해서\n뭔가 꿈에 너무 많은 의미를 \n 부여한다는 것은\n그 자체가 하나의 또 다른 \n갈등을 만들어내는 소재가 \n될 수 있을 것 같아요'
      ]
    },
    {
      user: 'kim',
      messages: [
        '저만 해도 무슨 꿈을 꿨을 때 뭔가 \n임팩트 있는 꿈을 꾸면 \n혹시 이게 뭔가 대단한\n길몽이나 흉몽이 아닐까?\n생각해서 검색을 하고 \n그렇게 되는데.',
        '그럼 꿈 해몽 같은 거는\n어떻게 나오게 된 거예요?'
      ]
    },
    {
      user: 'yang',
      messages: [
        '동양철학에서 사주하고\n비슷한 것 같습니다.\n그러니까 사주 같은 경우도\n우리가 몇날 몇 시에 \n태어난 사람들의 어떤 삶을 \n보니까 이러이러 하더라.\n그런 몇몇 사람들을 가지고\n통계를 만든 거잖아요.',
        '꿈이라는 것도 마찬가지로\n현재 내가 이런 일이 일어났을 때',
        "'과거에 뭘 했지?'\n내가 봤더니\n'어떤 꿈을 꿨네?'",
        '이런 꿈과 현재 일어난 사건과 이거를 계속 매칭시키는 \n 그런 것들이 통계적으로 \n좀 쌓이다 보니까 그게 하나의 \n정설처럼 우리한테 \n내려오고 있는 것 같고요.',
        "근데 또 모르죠.\n나중에 정말로 뇌 과학이라는게\n아직까지도 많이\n미지수에 있기 때문에 좀 더\n구체화되고, 조금 더 과학적으로\n근거들이 많이 만들어지고 나서\n실제로 그게 \n'전혀 무관하지 않다!'\n이런 이론이 나올 수도 \n있을 것 같다는 생각을 합니다.",
        '지금으로서는 사실은 \n동양에 사는 우리 입장에서\n우리가 그냥 많이 겪고 들었던\n속설같은 정도로 해석을 하는게 \n맞지 않을까 싶어요.'
      ]
    }
  ]

  return <KakaoTalk messages={messages} />
}
/*<ParagraphM>
  <Message.Background>
    <Message.BackgroundH>
      <Message.All>
        <Message.Head></Message.Head>
        <Message.ProfileImageL src="/images/part2/Message1.png" />

        <Message.NameL>김해나</Message.NameL>

        <Message.CWrapperF>
          <Message.MarkL></Message.MarkL>
          <p>
            이 책에서도 보면
            <br />
            범고래가 되는 꿈이라든지,
            <br />
            다른 사람이 되는 꿈 등<br />
            한 번도 보지 못한 풍경이나
            <br />
            말도 안 되는 다양한 꿈들이
            <br />
            나오거든요.
          </p>
        </Message.CWrapperF>

        <Message.CWrapper>
          <p>
            그럼 그게 다 그냥
            <br />
            각각의 기억일 뿐이다. <br />
            무작위로 조합된 기억일 뿐이다. <br />
            이렇게 해석을 할 수 있다는 거죠?
          </p>
        </Message.CWrapper>

        <Message.BlockL> </Message.BlockL>

        <Message.Next></Message.Next>

        <Message.ProfileImageR src="/images/part2/Message2.jpg" />

        <Message.NameR>양재웅</Message.NameR>

        <Message.CWrapperRF>
          <Message.MarkR></Message.MarkR>
          <p>
            네 맞습니다. <br />
            '우리 마음속에는 검열관이 있다'
            <br />
            라고 이제 '프로이트'가 얘기를
            <br />
            했는데 아까 말씀드린 것처럼
            <br />
            '초자아'나 '자아'의 역할이거든요.
          </p>
        </Message.CWrapperRF>
        <Message.CWrapperR>
          <p>
            그래서 윤리적이지 못한
            <br />
            기억이나 정보 생각들이
            <br />
            우리가 의식화하기가
            <br />
            굉장히 어려워요.
          </p>
        </Message.CWrapperR>
        <Message.CWrapperR>
          <p>
            그걸 의식화 했다가는
            <br />
            뭔가 내 세계관이
            <br />
            무너지는 것 같거든요.
          </p>
        </Message.CWrapperR>
        <Message.CWrapperR>
          <p>
            그래서 이제 그런 것들이
            <br />
            은유적으로 어떤 상징적으로
            <br />
            표현이 되는 것들이 있을 수<br />
            있는 거라고 볼 수 있겠죠.
          </p>
        </Message.CWrapperR>

        <Message.Next></Message.Next>

        <Message.ProfileImageL src="/images/part2/Message1.png" />

        <Message.NameL>김해나</Message.NameL>

        <Message.CWrapperF>
          <Message.MarkL></Message.MarkL>
          <p>
            그런데 아직도 사람들은
            <br />
            꿈에서 의미를 찾으려고
            <br />
            노력을 많이 하거든요.
          </p>
        </Message.CWrapperF>

        <Message.CWrapper>
          <p>
            돼지나 연예인이 나오는 꿈을
            <br />
            길몽으로 생각을 한다거나
            <br />뭐 이런 것들이 있잖아요.
          </p>
        </Message.CWrapper>
        <Message.BlockL> </Message.BlockL>

        <Message.CWrapper>
          <p>
            길몽, 흉몽. 이거 정말 전혀
            <br />
            의미가 없는 걸까요 ?
          </p>
        </Message.CWrapper>
        <Message.BlockL> </Message.BlockL>

        <Message.Next></Message.Next>

        <Message.ProfileImageR src="/images/part2/Message2.jpg" />

        <Message.NameR>양재웅</Message.NameR>

        <Message.CWrapperRF>
          <Message.MarkR></Message.MarkR>
          <p>
            큰 의미가 없다고
            <br />
            보시면 될 것 같고요.
          </p>
        </Message.CWrapperRF>
        <Message.CWrapperR>
          <p>
            본인이 뭔가 지금
            <br />
            불편한 상황이 있는데,
            <br />
            그거를 막상 직면하기에는
            <br />
            좀 상황적으로나 아니면
            <br />
            자기의 어떤 상태적으로나
            <br />
            좀 두려운 분들이 그걸 꿈에서
            <br />
            나타내는 분들이 있거든요.
          </p>
        </Message.CWrapperR>
        <Message.CWrapperR>
          <p>
            그게 반복해서 계속 계속
            <br />
            비슷한 내용의 꿈을 꾸고 있다면
            <br />
            그거를 한 번쯤은 의식 수준으로
            <br />
            끌어 올려서
          </p>
        </Message.CWrapperR>
        <Message.CWrapperR>
          <p>
            '내가 왜 이런 꿈을 꾸고 있는가?'
            <br />
            에 대해서 한 번쯤 생각해보고,
            <br />
            그래서 현재의 갈등과
            <br />
            결핍이 뭔지에 대해서 <br />
            파악해볼 필요는 있겠죠.
          </p>
        </Message.CWrapperR>
        <Message.CWrapperR>
          <p>
            하지만 그렇다고 해서
            <br />
            뭔가 꿈에 너무 많은 의미를
            <br />
            부여한다는 것은
            <br />
            그 자체가 하나의 또 다른
            <br />
            갈등을 만들어내는 소재가
            <br />될 수 있을 것 같아요
          </p>
        </Message.CWrapperR>

        <Message.Next></Message.Next>

        <Message.ProfileImageL src="/images/part2/Message1.png" />

        <Message.NameL>김해나</Message.NameL>

        <Message.CWrapperF>
          <Message.MarkL></Message.MarkL>
          <p>
            저만 해도 무슨 꿈을 꿨을 때 뭔가 <br />
            임팩트 있는 꿈을 꾸면
            <br />
            혹시 이게 뭔가 대단한
            <br />
            길몽이나 흉몽이 아닐까?
            <br />
            생각해서 검색을 하고
            <br />
            그렇게 되는데.
          </p>
        </Message.CWrapperF>

        <Message.CWrapper>
          <p>
            그럼 꿈 해몽 같은 거는
            <br />
            어떻게 나오게 된 거예요 ?
          </p>
        </Message.CWrapper>
        <Message.BlockL> </Message.BlockL>

        <Message.Next></Message.Next>

        <Message.ProfileImageR src="/images/part2/Message2.jpg" />

        <Message.NameR>양재웅</Message.NameR>

        <Message.CWrapperRF>
          <Message.MarkR></Message.MarkR>
          <p>
            동양철학에서 사주하고
            <br />
            비슷한 것 같습니다. <br />
            그러니까 사주 같은 경우도
            <br />
            우리가 몇날 몇 시에
            <br />
            태어난 사람들의 어떤 삶을
            <br />
            보니까 이러이러 하더라. <br />
            그런 몇몇 사람들을 가지고
            <br />
            통계를 만든 거잖아요 .
          </p>
        </Message.CWrapperRF>
        <Message.CWrapperR>
          <p>
            꿈이라는 것도 마찬가지로
            <br />
            현재 내가 이런 일이 일어났을 때
          </p>
        </Message.CWrapperR>
        <Message.CWrapperR>
          <p>
            '과거에 뭘 했지?'
            <br />
            내가 봤더니
            <br />
            '어떤 꿈을 꿨네?'
          </p>
        </Message.CWrapperR>
        <Message.CWrapperR>
          <p>
            이런 꿈과 현재 일어난 사건과
            <br />
            이거를 계속 매칭시키는
            <br />
            그런 것들이 통계적으로
            <br />
            좀 쌓이다 보니까 그게 하나의
            <br />
            정설처럼 우리한테
            <br />
            내려오고 있는 것 같고요.
          </p>
        </Message.CWrapperR>
        <Message.CWrapperR>
          <p>
            근데 또 모르죠.
            <br />
            나중에 정말로 뇌 과학이라는게
            <br />
            아직까지도 많이
            <br />
            미지수에 있기 때문에 좀 더<br />
            구체화되고, 조금 더 과학적으로
            <br />
            근거들이 많이 만들어지고 나서
            <br />
            실제로 그게 <br />
            '전혀 무관하지 않다!' <br />
            이런 이론이 나올 수도
            <br />
            있을 것 같다는 생각을 합니다.
          </p>
        </Message.CWrapperR>
        <Message.CWrapperR>
          <p>
            지금으로서는 사실은
            <br />
            동양에 사는 우리 입장에서
            <br />
            우리가 그냥 많이 겪고 들었던
            <br />
            속설 같은 정도로 해석을 하는게
            <br />
            맞지 않을까 싶어요.
          </p>
        </Message.CWrapperR>
        <Message.Next></Message.Next>

        <NextTalk
          onClick={(event) => {
            event.stopPropagation()
            iframeMessage.post('nativeMessage', {
              channel: 'openWebview',
              message: {
                url: 'https://millie.page.link/j6pCF'
              }
            })
          }}>
          다음 대화로 넘어가기 &nbsp;&gt;
        </NextTalk>
      </Message.All>
    </Message.BackgroundH>
  </Message.Background>
</ParagraphM>*/

const P1_3 = () => {
  const messages: Messages[] = [
    {
      user: 'kim',
      messages: [
        '<달러구트 꿈 백화점>에 나오는\n에피소드와 관련해서\n이야기를 나눠볼까요?',
        '저는 선생님이 나오신다는\n얘기를 듣고 꼭 묻고 싶은\n부분이 있었어요.',
        "책의 한 에피소드로\n'트라우마'에 대한 이야기가\n나오거든요.",
        '트라우마 사진 글',
        '군대를 다녀온 사람이\n 군대를 다시 가는 꿈이라든가,\n시험에 대한 압박감이 심했던 \n사람이 학생으로 다시\n돌아가는 꿈 같은\n악몽을 꾼다는 내용인데요.',
        '실제로도 이런 악몽을 꾸는 분들\n많지 않나요?'
      ]
    },
    {
      user: 'yang',
      messages: [
        "네. 많습니다.\n'트라우마'를 입으면\n'외상후 스트레스 장애'라는게\n생기는 분들이 있으시거든요.",
        "근데 '외상후 스트레스 장애'의\n세 가지 주 증상을 보면,\n첫 번째가 '과각성'이에요.\n그래서 평소에 작은 자극에도\n굉장히 민감하게 반응을\n하게 되는 거죠.",
        '예를 들어서 평소에 그냥\n늘상 들었던 전화 벨소리라든지\n아니면 뭔가 사물이 움직이는 \n이런 소리에도 굉장히 사람이\n민감하게 반응을 해요.\n그러니까 늘 불안해 있는 \n상태라고 이해를 하시면 \n될 것 같고요.',
        "두 번째가 '재경험'입니다.\n'재경험'이 꿈에서 나타나는\n경우가 굉장히 많아요.\n내가 트라우마를 입었던\n어떤 환경이나 상황이 꿈에서\n재현되는 거죠.",
        '간단한 트라우마로는 남들\n앞에서 ppt 발표를 했는데\n애들이 그냥 비웃고 있고, \n선생님이 지적질을 크게 했고,\n그래서 뭔가 되게 창피함을\n느꼈고, 이런 것 때문에 다시는\n남들 앞에서 발표를 못하시는 \n분들도 계시거든요.',
        '이런 분들은 꿈에서\n자기가 발표하다가 뭔가\n놀림거리가 되는 그런 상황이\n재현되는 분들이 많이 계시죠.',
        "세 번째가 '회피'인데\n방금 말씀드렸떤 것처럼\n남들 앞에서 발표를 하고\n창피를 당했다.\n그러면 다시는 발표를 안 하겠다.\n이런 식으로 그 비슷한 상황을\n계속해서 피하려고 하는게\n증상으로 나타날 수가 있습니다.",
        "어쨌든간에 '재경험'이\n많이들 보이시는 증상이라서, \n꿈에서 재현되는 분들이\n많은게 사실이고 그게\n<달러구트 꿈 백화점>에 \n나왔던 것 같아요."
      ]
    }
  ]
  return <KakaoTalk messages={messages} />
}
/*
<ParagraphM>
  <Message.Background>
    <Message.BackgroundH>
      <Message.All>
        <Message.Head></Message.Head>
        <Message.ProfileImageL src="/images/part2/Message1.png" />
        <Message.NameL>김해나</Message.NameL>
        <Message.CWrapperF>
          <Message.MarkL></Message.MarkL>
          <p>
            &lt; 달러구트 꿈 백화점 &gt;에 나오는
            <br />
            에피소드와 관련해서
            <br />
            이야기를 나눠볼까요?
          </p>
        </Message.CWrapperF>
        <Message.CWrapper>
          <p>
            저는 선생님이 나오신다는
            <br />
            얘기를 듣고 꼭 묻고 싶은
            <br />
            부분이 있었어요.
          </p>
        </Message.CWrapper>
        <Message.BlockL> </Message.BlockL>
        <Message.CWrapper>
          <p>
            책의 한 에피소드로
            <br />
            '트라우마'에 대한 이야기가
            <br />
            나오거든요.
          </p>
        </Message.CWrapper>
        <Message.BlockL> </Message.BlockL>
        <Message.ImageL src="/images/part2/trauma.jpg" />

        <Message.Next></Message.Next>
        <Message.BoxC>
          <Message.Box>
            <p>
              일반적인 의학용어로 ‘외상(physical trauma)’을
              <br />
              뜻하지만, 심리학적으로
              <br />
              '정신적 외상(psychological trauma)'을 말한다.
              <br />
              여러가지 정신적인 장애의 원인이 될 수 있다.
            </p>
          </Message.Box>
        </Message.BoxC>
        <Message.Next></Message.Next>

        <Message.CWrapper>
          <p>
            군대를 다녀온 사람이
            <br />
            군대를 다시 가는 꿈이라든가,
            <br />
            시험에 대한 압박감이 심했던
            <br />
            사람이 학생으로 다시
            <br />
            돌아가는 꿈 같은
            <br />
            악몽을 꾼다는내용인데요.
          </p>
        </Message.CWrapper>
        <Message.BlockL> </Message.BlockL>
        <Message.CWrapper>
          <p>
            실제로도 이런 악몽을 꾸는 분들
            <br />
            많지 않나요 ?
          </p>
        </Message.CWrapper>
        <Message.BlockL> </Message.BlockL>

        <Message.Next></Message.Next>

        <Message.ProfileImageR src="/images/part2/Message2.jpg" />
        <Message.NameR>양재웅</Message.NameR>
        <Message.CWrapperRF>
          <Message.MarkR></Message.MarkR>
          <p>
            네. 많습니다. <br />
            '트라우마'를 입으면
            <br />
            '외상후 스트레스 장애'라는게
            <br />
            생기는 분들이 있으시거든요.
          </p>
        </Message.CWrapperRF>
        <Message.CWrapperR>
          <p>
            근데 '외상후 스트레스 장애'의
            <br />
            세 가지 주 증상을 보면,
            <br />
            첫 번째가 '과각성 '이에요. <br />
            그래서 평소에 작은 자극에도
            <br />
            굉장히 민감하게 반응을
            <br />
            하게 되는 거죠.
          </p>
        </Message.CWrapperR>
        <Message.CWrapperR>
          <p>
            예를 들어서 평소에 그냥
            <br />
            늘상 들었던 전화 벨소리라든지
            <br />
            아니면 벨소리라든지
            <br />
            아니면 뭔가 사물이 움직이는
            <br />
            이런 소리에도 굉장히 사람이
            <br />
            민감하게 반응을 해요. <br />
            그러니까 늘 불안해 있는
            <br />
            상태라고 이해를 하시면
            <br />될 것 같고요.
          </p>
        </Message.CWrapperR>
        <Message.CWrapperR>
          <p>
            두 번째가 '재경험 '입니다. <br />
            '재경험'이 꿈에서 나타나는
            <br />
            경우가 굉장히 많아요. <br />
            내가 트라우마를 입었던
            <br />
            어떤 환경이나 상황이 꿈에서
            <br />
            재현되는 거죠.
          </p>
        </Message.CWrapperR>
        <Message.CWrapperR>
          <p>
            간단한 트라우마로는 남들
            <br />
            앞에서 ppt 발표를 했는데
            <br />
            애들이 그냥 비웃고 있고,
            <br />
            선생님이 지적질을 크게 했고,
            <br />
            그래서 뭔가 되게 창피함을
            <br />
            느꼈고, 이런 것 때문에 다시는
            <br />
            남들 앞에서 발표를 못하시는
            <br />
            분들도 계시거든요.
          </p>
        </Message.CWrapperR>
        <Message.CWrapperR>
          <p>
            이런 분들은 꿈에서
            <br />
            자기가 발표하다가 뭔가
            <br />
            놀림거리가 되는 그런 상황이 <br />
            재현되는 분들이 많이 계시죠.
          </p>
        </Message.CWrapperR>
        <Message.CWrapperR>
          <p>
            세 번째가 '회피'인데
            <br />
            방금 말씀드렸던 것처럼
            <br />
            남들 앞에서 발표를 하고
            <br />
            창피를 당했다. <br />
            그러면 다시는 발표를 안 하겠다. <br />
            이런 식으로 그 비슷한 상황을
            <br />
            계속해서 피하려고 하는게
            <br />
            증상으로 나타날 수가 있습니다.
          </p>
        </Message.CWrapperR>
        <Message.CWrapperR>
          <p>
            어쨌든간에 '재경험'이
            <br />
            많이들 보이시는 증상이라서,
            <br />
            꿈에서 재현되는 분들이
            <br />
            많은게 사실이고 그게
            <br />
            &lt; 달러구트 꿈 백화점 &gt;에
            <br />
            나왔던 것 같아요.
          </p>
        </Message.CWrapperR>
        <Message.Next></Message.Next>

        <NextTalk
          onClick={(event) => {
            event.stopPropagation()
            iframeMessage.post('nativeMessage', {
              channel: 'openWebview',
              message: {
                url: 'https://millie.page.link/j6pCF'
              }
            })
          }}>
          다음 대화로 넘어가기 &nbsp;&gt;
        </NextTalk>
      </Message.All>
    </Message.BackgroundH>
  </Message.Background>
</ParagraphM>*/

const P1_4 = () => {
  const messages: Messages[] = [
    {
      user: 'kim',
      messages: [
        '또 많은 이들을 울컥하게 한\n에피소드도 있는데요.\n죽음을 앞두신 분이 사랑하는\n사람들에게 꿈을 보내기 위해서\n의뢰하는 내용이 있었거든요.',
        '가까운 사람을 잃어서\n상실감이 큰 분들께\n고인을 되돌아보게 하는\n행동은 도움이 되는 걸까요?'
      ]
    },
    {
      user: 'yang',
      messages: [
        '실제로 도움이 많이 됩니다.\n가족 구성원 중에 한 분을 상실한 그런 경험이 있는\n나머지 가족 구성원들 같은\n경우가 대부분 고인에 대한\n얘기를 못 꺼내요. 서로.',
        '왜냐하면 나도 너무\n감당이 안 되고, 얘기를 꺼냈는데 저 사람한테도 너무\n힘들 것 같으니까\n쉬쉬하게 되거든요.',
        '근데 그러면 각자\n병이 깊어지는 경우가 \n많은 것 같아요.',
        '그 고인에 대해서 우리가\n아무렇지 않게 드러낼 수\n있어야 되고,\n그 추억을 같이 갖고 있는\n사람들하고 공유할 수 있을 때\n우리는 그 상실감에서\n벗어날 수가 있게 돼요.',
        '근데 그거를 꾹꾹 눌러놓고\n열면 안되는 어떤 상자라고\n생각을 하면서 자꾸 자꾸\n치워놓기 시작을 하면,\n오히려 관련된 우울감이\n더 커질 수 밖에 없는 것 같아서\n그거를 회상하는 것도 좋고,',
        '특히나 중요한 것은\n 그 추억을 같이 공유할 수 있는 사람들하고 충분히 얘기하실 수 있는\n그런 환경ㅇ르 갖추는게\n제일 필요할 것 같습니다.'
      ]
    }
  ]

  return <KakaoTalk messages={messages} />
}
/*<ParagraphM>
  <Message.Background>
    <Message.BackgroundH>
      <Message.All>
        <Message.Head></Message.Head>
      
       
        
      
        <Message.Next></Message.Next>

        <NextTalk
          onClick={(event) => {
            event.stopPropagation()
            iframeMessage.post('nativeMessage', {
              channel: 'openWebview',
              message: {
                url: 'https://millie.page.link/j6pCF'
              }
            })
          }}>
          다음 대화로 넘어가기 &nbsp;&gt;
        </NextTalk>
      </Message.All>
    </Message.BackgroundH>
  </Message.Background>
</ParagraphM>*/

const P1_5 = () => {
  const messages: Messages[] = [
    {
      user: 'kim',
      messages: [
        '선생님은 책을 보시면서 또\n그 이외에 흥미롭게 보신\n에피소드가 있었나요?'
      ]
    },
    {
      user: 'yang',
      messages: [
        '타인의 삶이라는\n꿈에 대한 이야기였는데요.',
        '그 주인공은 이제\n자기의 삶에 대해서 \n나쁘진 않은데,\nTV속에 나오는 뭔가 화려하게\n사는 사람들을 보면',
        '뭔가 잚소 살고 있는 것 같고,\n뭐라도 더 해야 될 것 같고,\n뭔가 불안하고...\n이렇게 비교하고 있는 그런\n주인공이었죠.',
        '그러다가 8년째\n무명생활을 겪고 있는\n아티스트의 삶을 사는\n꿈을 꾸게 돼요.',
        '그리고 그 8년이라는\n무명 세월 동안\n얼마나 힘든지에 대해서\n하룻밤의 꿈으로 느끼고,\n실제로 TV에 나오는 사람들이\n정말 많이 힘들었을 수 있겠구나\n라는 것을 공감할 수 있게 되고,',
        '다음 날 출귾하는 길에 자기가\n얼마나 행복한 삶을\n영위하고 있는가에 대해서\n다시한번 확인하는 그런\n에피소드 였던거 같습니다.',
        "'알랭드 보통'이\n'불안'이라는 책에서 그런 말을 했었거든요.",
        '불안 책 사진',
        '예젼에 계급 사회일 때는 우리는\n훨씬 덜 불안했다.\n왜냐하면 내가 타고난\n계급을 가지고 주어진 대로\n살면 됐기 떄문에.',
        '우리는 뭔가를 해야 된다라는\n압박과 강박 속에서 살지 않아도\n괜찮았다 라는 얘기를 합니다.',
        '우리가 지금 살고 있는\n세상은 끊임없이 나를\n불안하게 하잖아요.\n너무 많은 비교가 결국에\n내 행복을 갉아 먹는다\n라는 것을 여러분들이\n많이 인지하셨으면 좋겠어요.',
        '정말로 중요한 것은\n남들과의 비교에서 자유로워질 수 있는,',
        '그래서 나의 속도를 찾는것.\n내 방향을 찾는 것이라고 \n생각을 합니다.'
      ]
    }
  ]

  return <KakaoTalk messages={messages} />
}
const P1_6 = () => {
  const messages: Messages[] = [
    {
      user: 'kim',
      messages: [
        '이런 본인의 삶을\n부정적으로 여기는 분들께는\n어떤 처방이 필요할까요?'
      ]
    },
    {
      user: 'yang',
      messages: [
        '이런 분들이 공통점이\n비교를 많이 하는 게 있고,\n또 하나가 일하고 자기 자신을\n동일시해요.',
        '그러니까 일적으로 성취를\n뭔가 막 하고 있을 때\n자긴느 굉장히 괜찮은 사람이라고\n생각을 하고요.',
        '마찬가지죠 사회적인 평판, 명망,\n이런 것들이 올라가면 자기는\n 괜찮다라고 생각을 하는 거죠.',
        '근데 참 슬픈 얘기예요.\n내가 일을 잘하지 못해도 뭔가\n남들이 나를 인정하지 않아도\n내가 나를 존중할 수 있어야 되고,\n내가 나를 사랑할 수\n있어야 되잖아요.\n근데 항상 명분이 필요한 거죠.',
        '바꿔 말하면 자기가 자기 자신한테 너무\n인색한 거죠.',
        '그래서 이런 분들 같은 경우에는\n어떠한 특별한 조건이 없어도\n자기 자신에 대해서\n귀하게 생각할 수 있게끔,\n그런 방향으로 인생을\n살 수 있게끔 많이 가이드를\n하는 것 같고,',
        '제가 만힝 지시적인\n어떤 접근을 했을 떄는\n대화를 많이 하게 합니다.\n자기 자신하고.',
        "'너 정말 하고 싶은 게 뭐야?'\n'너 10년 뒤에 20년 뒤에\n30년 뒤에 어떻게 살고 싶어?'\n에 대해서 보통 물어보면요,\n대답을 잘 못하세요.",
        '어떤 삶을 사록 싶은지에 대해서\n이제 생각을 하다 보면,\n지금의 내가 어떤 방향으로\n가야 될지에 대해서도\n가닥이 잡히는 것 같더라고요.\n그런 거를 생각만 하게\n하는 것보다는 글로 정리를\n하게끔 많이 말씀을 드리고,',
        "혹시\n이 오디오를 들으시는 분 중에서\n'내가 뭔가 남보다 부족하다.'거나\n'뭔가 더 열심히 \n살아야 될 것 같다.' 라고 스스로\n채찍질하고 불안해하고 계시는\n분들이 많이 있으시다면,",
        '남들이 뭐낙 바라는 혹은 남들이\n기대하는 삶이 아니라\n그리고 남들이 뭔가 평가하는\n그런 차원의 세상이 아나라,',
        '우리가 언제 죽을지 모르는 \n세상에 살고 있는 거라고 \n생각을 하시면서\n어떤 삶으로 이 생을 마치고\n싶은지에 대해서 글로 한번\n정리를 해보시면,',
        '그게 여러분한테 좀 방향을\n설정하는 데 있어서 도움이\n될 것 같습니다.'
      ]
    }
  ]

  return <KakaoTalk messages={messages} />
}

const P1_7 = () => {
  const messages: Messages[] = [
    {
      user: 'kim',
      messages: [
        '저는 이 책을 그냥\n어른들의 동화같다\n라는 생각으로만 읽었는데,\n이렇게 정신과 전문의 선생님의\n시선으로 책의 해석을\n듣다보니까 다른 버전의\n<달러구트 꿈 백화점>을\n읽은 느낌이 납니다.',
        '오늘 선생님께 마지막으로 \n드리고 싶은 질문이 있는데요.',
        '정신과 전문의가 아닌\n인간 양재웅으로서\n오늘 선생님이\n꾸시고 싶은 꿈이 있다면\n어떤 걸까요?'
      ]
    },
    {
      user: 'yang',
      messages: [
        "달러구트 꿈 백화점에서\n'막심'이라는 캐릭터가 저는 \n상당히 안쓰럽기도 하고 동시에\n좀 공감도 가는 부분도 있었어요.",
        "그래서 그 악몽을 만드는\n'막심'이라는 인물이 돼서\n죄책감을 못 느끼는\n어떤 양심의 결핍, 혹은\n부재를 갖고 살아가는\n사람들의 꿈에 좀\n나타나 보고 싶다는\n생각이 들었습니다."
      ]
    }
  ]

  return <KakaoTalk messages={messages} />
}

const P1_8 = () => {
  const messages: Messages[] = [
    {
      user: 'kim',
      messages: [
        '어떤 인물이 읽고\n어떤 시선으로 보고\n어떻게 상상하느냐에 따라\n내용과 해석이 달라질 수 \n있는 것이 바로 책인데요.',
        '화면 아래 동영상을 클릭하시면\n<달러구트 꿈 백화점>을 읽은\n스타들이 만들어낸 특별한 상상 콘텐츠를 보실 수 있습니다.',
        '동영상',
        '수많은 상상력을 불러일으키는\n<달러구트 꿈 백화점>의\n또 다른 버전이 궁금하시다면\n클릭해 주세요.',
        '<달러구트 꿈 백화점>\n도슨트로 참여해 주신\n정신과 전문의 양재웅 선생님.\n오늘 너무 즐거운\n시간이었습니다.'
      ]
    },
    {
      user: 'yang',
      messages: [
        '저도 오랜만에 정말 덕분에\n재밌는 어른용 동화를\n읽었던 것 같고,\n이래서 이 책이 정말 인기가\n많았꾸나라고 생각을 하면서 \n봤던 것 같고요.',
        '다음에 또 기회가 되면\n다른 책을 가지고\n얘기를 하면 좋겠다.\n이런 생각도 들었습니다.\n감사합니다.'
      ]
    }
  ]

  return <KakaoTalk messages={messages} />
}

const NextTalk = styled.button`
  display: block;
  align-items: center;
  justify-content: center;
  padding: 5px 20px;
  font-size: 14px;
  line-height: 18px;
  border: 1px solid #333333;
  ${clamp('font-size', [MIN_VIEWPORT, MAX_VIEWPORT, 14])};
  ${clamp('line-height', [MIN_VIEWPORT, MAX_VIEWPORT, 18])};
  ${clamp('padding', [MIN_VIEWPORT, MAX_VIEWPORT, 5, 20])};
  border-radius: 100px;
  background-color: white;
  margin: 0 auto;
  margin-bottom: 100px;
  font-family: 'Spoqa Han Sans Neo';
  font-weight: 500;
`
const img = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 4%;
  user-select: none;
`

export default [P1_0, P1_1, P1_2, P1_3, P1_4, P1_5, P1_6, P1_7, P1_8]
