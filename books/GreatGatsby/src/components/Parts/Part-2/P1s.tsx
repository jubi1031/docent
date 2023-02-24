import ParagraphM from '../../ParagraphM'
import Message from '../../Message'
import styled from 'styled-components'
import { iframeMessage, nativeMessage } from '@shared/utils'

const P1_0 = () => (
  <ParagraphM>
    <Message.Background>
    <Message.All>
      <Message.ProfileImageL src='/images/part2/Message1.png'/>
      <Message.NameL>김해나</Message.NameL>
      <Message.Wrapper>
        <p>
        꿈을 만드는 사람. <br/>
        꿈을 파는 사람.<br/>
        꿈을 사는 사람들의 비밀스러운<br/>
        에피소드들로 구성된<br/>
        &lt; 달러구트 꿈 백화점 &gt; 이야기<br/>
        재밌게 보셨나요?<br/>
        </p>
      </Message.Wrapper>
      <Message.Wrapper>
        <p>
        저 같은 경우에는 사실 꿈을 <br/>
        그렇게 자주 꾸는 편은 아닌데, <br/>
        가끔은 또 엄청 <br/>
        생뚱맞은 꿈을 꾸기도 하고, <br/>
        또 어떤 때는 제 고민이나<br/>
        관심사 이런 것들이 꿈에 나오면<br/>
        확실히 나의 내면과<br/>
        연결이 돼 있다 라는 생각도 들고.
        </p>
      </Message.Wrapper>
      <Message.BlockL> </Message.BlockL>
      <Message.Wrapper>
        <p>선생님은 어떻게 보셨나요?</p>
      </Message.Wrapper>
      <Message.BlockL> </Message.BlockL>

      <Message.Next></Message.Next>

      <Message.ProfileImageR src='/images/part2/Message2.jpg'/>
      <Message.NameR>양재웅</Message.NameR>
      <Message.WrapperRF>
        <p>
        저도 되게 재밌게 봤어요.<br/>
        동화나 이런 판타지물을<br/>
        제가 좋아하는건 아닌데,<br/>
        디즈니의 '인사이드 아웃'이나<br/>
        '유미의 세포들'이라는<br/>
        웹툰도 좀 생각이 났고요.<br/>
        </p>
      </Message.WrapperRF>
      <Message.ImageR src='/images/part2/inside.png'/>
      <Message.ImageR src='/images/part2/umi.png'/>
      <Message.WrapperR>
        <p>
        기본적으로 인간의 어떤<br/>
        심리를 다루는, <br/>
        그래서 그거에 대해서 공감대를<br/>
        끌어낼 수 있는 작품이었기<br/>
        때문에 저도 몰입을 해서 볼 수<br/>
        있었던 것 같고 공감되는 부분도<br/>
        많았고 감명 깊었던 부분도<br/>
         있었던 것 같습니다.
        </p>
      </Message.WrapperR>

      <Message.Next></Message.Next>

      <NextTalk onClick={(event) => {
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
    </Message.Background>
  </ParagraphM>
)

const P1_1 = () => (
  <ParagraphM>
    <Message.Background>
    <Message.All>
      <Message.ProfileImageL src='/images/part2/Message1.png'/>

      <Message.NameL>김해나</Message.NameL>

      <Message.Wrapper>
        <p>
          이야기를 끌어가는 주요 소재는<br/>
          '꿈'인데요.
        </p>
      </Message.Wrapper>

      <Message.Wrapper>
          <p>
            책에 따르면 시간의 신이<br/>
            사람들에게 깨달음을 주기 위해<br/>
            사람들이 잠들어 있는 동안<br/>
            그림자가 대신 깨어있게 하고,<br/>
            그 그림자가 밤새 생각하고<br/>
            느끼고 경험한 모든 것들에<br/>
            이름을 붙여<br/>
            '꿈'이라고 했다고 하거든요.<br/>
          </p>
      </Message.Wrapper>

      <Message.BlockL> </Message.BlockL>

      <Message.Wrapper>
        <p>
          선생님 정신의학적인면으로<br/>
          봤을 때 '꿈'은 뭘까요. <br/>
          우리가 왜 <br/>
          '꿈'을 꾸게 되는 걸까요?<br/>
        </p>
      </Message.Wrapper>

      <Message.BlockL> </Message.BlockL>

      <Message.Next></Message.Next>

      <Message.ProfileImageR src='/images/part2/Message2.jpg'/>

      <Message.NameR>양재웅</Message.NameR>

      <Message.WrapperRF>
          <p>
            '프로이트'의 꿈의 해석을 보면<br/>
            꿈이라는 거는 현재 내가<br/>
            의식적으로 소화하기 어려운,<br/>
            그래서 무의식으로<br/>
            밀어놨던 것들이<br/>
            발현되는 거라고 얘기를 해요.<br/>
          </p>
      </Message.WrapperRF>
      <Message.ImageR src='/images/part2/Freud.jpg'/>
      <Message.WrapperR>
          <p>
            의식적으로 소화하기 어렵다<br/>
            라는 건 뭐냐면,
          </p>
      </Message.WrapperR>
      <Message.WrapperR>
          <p>
          우리 인간이 이제 '초자아'가 있고,<br/>
          '자아'가 있고,<br/>
          '이드'라고 하는 본능이 있는데,<br/>
          '초자아'나 '자아'같은 경우가<br/>
          현실에서 상식적으로<br/>
          타인과 관계를 맺고<br/>
          일을 할 수 있게 해주는,<br/>
          나의 어떤 정체성을<br/>
          유지시켜주는 장치거든요.
          </p>
      </Message.WrapperR>
      <Message.WrapperR>
          <p>
          얘네들 때문에 저질러서는<br/>
          안 되는 생각 이라든지<br/>
          이런 것들이 되게 많단 말이에요.
          </p>
      </Message.WrapperR>
      <Message.WrapperR>
          <p>
          그런데 그런 것들이 꿈에서<br/>
          발현되는 것들이 많죠. <br/>
          그래서 무의식적인 어떤<br/>
          나의 욕구가 나온다던지<br/>
          아니면 결핍과 관련된 것들이<br/>
          나온다던지. <br/>
          그렇게 이제 꿈의 해석을<br/>
          과거에는 많이 했었던 것 같고요. 
          </p>
      </Message.WrapperR>
      <Message.WrapperR>
          <p>
          현대의학에서는 그거에<br/>
          큰 비중을 두지 않고 있고,<br/>
          꿈은 이제 수면 중에서<br/>
          뇌의 일부가  깨어있는 상태에서<br/>
          기억이나 혹은 정보의 이미지가<br/>
          무작위로 조합이 돼서<br/>  
          그냥  재생이 되는 거다.<br/>
          라는 식으로 해석을 하는 경우가<br/>
          많은 것 같습니다.
          </p>
      </Message.WrapperR>

      <Message.Next></Message.Next>

      <NextTalk onClick={(event) => {
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
    </Message.Background>
  </ParagraphM>
)

const P1_2 = () => (
  <ParagraphM>
    <Message.Background>
    <Message.All>
      <Message.ProfileImageL src='/images/part2/Message1.png'/>

      <Message.NameL>김해나</Message.NameL>

      <Message.Wrapper>
        <p>
          이 책에서도 보면<br/>
          범고래가 되는 꿈이라든지,<br/>
          다른 사람이 되는 꿈 등<br/>
          한 번도 보지 못한 풍경이나<br/>
          말도 안 되는 다양한 꿈들이<br/>
          나오거든요. 
        </p>
      </Message.Wrapper>

      <Message.Wrapper>
          <p>
          그럼 그게 다 그냥<br/>
          각각의 기억일 뿐이다. <br/>
          무작위로 조합된 기억일 뿐이다. <br/>
          이렇게 해석을 할 수 있다는 거죠?
          </p>
      </Message.Wrapper>

      <Message.BlockL> </Message.BlockL>

      <Message.Next></Message.Next>

      <Message.ProfileImageR src='/images/part2/Message2.jpg'/>

      <Message.NameR>양재웅</Message.NameR>

      <Message.WrapperRF>
          <p>
          네 맞습니다. <br/>
          '우리 마음속에는 검열관이 있다'<br/>
          라고 이제 '프로이트'가 얘기를<br/>
          했는데 아까 말씀드린 것처럼<br/>
          '초자아'나 '자아'의 역할이거든요.
          </p>
      </Message.WrapperRF>
      <Message.WrapperR>
          <p>
          그래서 윤리적이지 못한<br/>
          기억이나 정보 생각들이<br/>
          우리가 의식화하기가<br/>
          굉장히 어려워요.
          </p>
      </Message.WrapperR>
      <Message.WrapperR>
          <p>
          그걸 의식화 했다가는<br/>
          뭔가 내 세계관이<br/>
          무너지는 것 같거든요.
          </p>
      </Message.WrapperR>
      <Message.WrapperR>
          <p>
          그래서 이제 그런 것들이<br/>
          은유적으로 어떤 상징적으로<br/>
          표현이 되는 것들이  있을 수<br/>
          있는 거라고 볼 수 있겠죠.
          </p>
      </Message.WrapperR>

      <Message.Next></Message.Next>

      <Message.ProfileImageL src='/images/part2/Message1.png'/>

      <Message.NameL>김해나</Message.NameL>

      <Message.Wrapper>
        <p>
        그런데 아직도 사람들은<br/>
        꿈에서 의미를 찾으려고<br/>
        노력을 많이 하거든요.
        </p>
      </Message.Wrapper>

      <Message.Wrapper>
          <p>
          돼지나 연예인이 나오는 꿈을<br/>
          길몽으로 생각을 한다거나<br/>
          뭐 이런 것들이 있잖아요.
          </p>
      </Message.Wrapper>
      <Message.BlockL> </Message.BlockL>

      <Message.Wrapper>
          <p>
          길몽, 흉몽. 이거 정말 전혀<br/>
          의미가 없는 걸까요 ?
          </p>
      </Message.Wrapper>
      <Message.BlockL> </Message.BlockL>

      <Message.Next></Message.Next>

      <Message.ProfileImageR src='/images/part2/Message2.jpg'/>

      <Message.NameR>양재웅</Message.NameR>

      <Message.WrapperRF>
          <p>
          큰 의미가 없다고<br/>
          보시면 될 것 같고요.
          </p>
      </Message.WrapperRF>
      <Message.WrapperR>
          <p>
          본인이 뭔가 지금<br/>
          불편한 상황이 있는데,<br/>
          그거를 막상 직면하기에는<br/>
          좀 상황적으로나 아니면<br/>
          자기의 어떤 상태적으로나<br/>
          좀 두려운 분들이 그걸 꿈에서<br/>
          나타내는 분들이 있거든요. 
          </p>
      </Message.WrapperR>
      <Message.WrapperR>
          <p>
          그게 반복해서 계속 계속<br/>
          비슷한 내용의 꿈을 꾸고 있다면<br/>
          그거를 한 번쯤은 의식 수준으로<br/>
          끌어 올려서
          </p>
      </Message.WrapperR>
      <Message.WrapperR>
          <p>
          '내가 왜 이런 꿈을 꾸고 있는가?'<br/>
          에 대해서 한 번쯤 생각해보고,<br/>
          그래서 현재의 갈등과<br/>
          결핍이 뭔지에 대해서 <br/>
          파악해볼 필요는 있겠죠. 
          </p>
      </Message.WrapperR>
      <Message.WrapperR>
          <p>
          하지만 그렇다고 해서<br/>
          뭔가 꿈에 너무 많은 의미를<br/>
          부여한다는 것은<br/>
          그 자체가 하나의 또 다른<br/>
          갈등을 만들어내는 소재가<br/>
          될 수 있을 것 같아요
          </p>
      </Message.WrapperR>

      <Message.Next></Message.Next>

      <Message.ProfileImageL src='/images/part2/Message1.png'/>

      <Message.NameL>김해나</Message.NameL>

      <Message.Wrapper>
        <p>
        저만 해도 무슨 꿈을 꿨을 때 뭔가 <br/>
        임팩트 있는 꿈을 꾸면<br/>
        혹시 이게 뭔가 대단한<br/>
        길몽이나 흉몽이 아닐까?<br/>
        생각해서 검색을 하고<br/>
        그렇게 되는데.
        </p>
      </Message.Wrapper>

      <Message.Wrapper>
        <p>
        그럼 꿈 해몽 같은 거는<br/>
        어떻게 나오게 된 거예요 ?
        </p>
      </Message.Wrapper>
      <Message.BlockL> </Message.BlockL>

      <Message.Next></Message.Next>

      <Message.ProfileImageR src='/images/part2/Message2.jpg'/>

      <Message.NameR>양재웅</Message.NameR>

      <Message.WrapperRF>
          <p>
          동양철학에서 사주하고<br/>
          비슷한 것 같습니다. <br/>
          그러니까 사주 같은 경우도<br/>
          우리가 몇날 몇 시에<br/>
          태어난 사람들의 어떤 삶을<br/>
          보니까 이러이러 하더라. <br/>
          그런 몇몇 사람들을 가지고<br/>
          통계를 만든 거잖아요 . 
          </p>
      </Message.WrapperRF>
      <Message.WrapperR>
          <p>
          꿈이라는 것도 마찬가지로<br/>
          현재 내가 이런 일이 일어났을 때
          </p>
      </Message.WrapperR>
      <Message.WrapperR>
          <p>
          '과거에 뭘 했지?'<br/>
          내가 봤더니<br/>
          '어떤 꿈을 꿨네?'
          </p>
      </Message.WrapperR>
      <Message.WrapperR>
          <p>
          이런 꿈과 현재 일어난 사건과<br/>
          이거를 계속 매칭시키는<br/>
          그런 것들이 통계적으로<br/>
          좀 쌓이다 보니까 그게 하나의<br/>
          정설처럼 우리한테<br/>
          내려오고 있는 것 같고요.
          </p>
      </Message.WrapperR>
      <Message.WrapperR>
          <p>
          근데 또 모르죠.<br/>
          나중에 정말로 뇌 과학이라는게<br/>
          아직까지도 많이<br/>
          미지수에 있기 때문에 좀 더<br/>
          구체화되고, 조금 더 과학적으로<br/>
          근거들이 많이 만들어지고 나서<br/>
          실제로 그게 <br/>
          '전혀 무관하지 않다!' <br/>
          이런 이론이 나올 수도<br/>
          있을 것 같다는 생각을 합니다.
          </p>
      </Message.WrapperR>
      <Message.WrapperR>
          <p>
          지금으로서는 사실은<br/>
          동양에 사는 우리 입장에서<br/>
          우리가 그냥 많이 겪고 들었던<br/>
          속설 같은 정도로 해석을 하는게<br/>
          맞지 않을까 싶어요.
          </p>
      </Message.WrapperR>
      <Message.Next></Message.Next>

      <NextTalk onClick={(event) => {
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
    </Message.Background>
  </ParagraphM>
)

const P1_3 = () => (
  <ParagraphM>
    <Message.Background>
    <Message.All>
      <Message.ProfileImageL src='/images/part2/Message1.png'/>
      <Message.NameL>김해나</Message.NameL>
      <Message.Wrapper>
        <p>
        &lt; 달러구트 꿈 백화점 &gt;에 나오는<br/>
        에피소드와 관련해서<br/>
        이야기를 나눠볼까요? 
        </p>
      </Message.Wrapper>
      <Message.Wrapper>
        <p>
        저는 선생님이 나오신다는<br/>
        얘기를 듣고 꼭 묻고 싶은<br/>
        부분이 있었어요.
        </p>
      </Message.Wrapper>
      <Message.BlockL> </Message.BlockL>
      <Message.Wrapper>
        <p>
          책의 한 에피소드로<br/>
          '트라우마'에 대한 이야기가<br/>
          나오거든요.
        </p>
      </Message.Wrapper>
      <Message.BlockL> </Message.BlockL>
      <Message.ImageL src='/images/part2/trauma.jpg'/>
      <Message.Wrapper>
        <p>
        군대를 다녀온 사람이<br/>
        군대를 다시 가는 꿈이라든가,<br/>
        시험에 대한 압박감이 심했던<br/>
        사람이 학생으로 다시<br/>
        돌아가는 꿈 같은<br/>
        악몽을 꾼다는내용인데요. 
        </p>
      </Message.Wrapper>
      <Message.BlockL> </Message.BlockL>
      <Message.Wrapper>
        <p>
        실제로도 이런 악몽을 꾸는 분들<br/>
        많지 않나요 ?
        </p>
      </Message.Wrapper>
      <Message.BlockL> </Message.BlockL>

      <Message.Next></Message.Next>

      <Message.ProfileImageR src='/images/part2/Message2.jpg'/>
      <Message.NameR>양재웅</Message.NameR>
      <Message.WrapperRF>
        <p>
        네. 많습니다. <br/>
        '트라우마'를 입으면<br/>
        '외상후 스트레스 장애'라는게<br/>
        생기는 분들이 있으시거든요. 
        </p>
      </Message.WrapperRF>
      <Message.WrapperR>
        <p>
        근데 '외상후 스트레스 장애'의<br/>
        세 가지 주 증상을 보면,<br/>
        첫 번째가 '과각성 '이에요. <br/>
        그래서 평소에 작은 자극에도<br/>
        굉장히 민감하게 반응을<br/>
        하게 되는 거죠. 
        </p>
      </Message.WrapperR>
      <Message.WrapperR>
        <p>
        예를 들어서 평소에 그냥<br/>
        늘상 들었던 전화 벨소리라든지<br/>
        아니면 벨소리라든지<br/>
        아니면 뭔가 사물이 움직이는<br/>
        이런 소리에도 굉장히 사람이<br/>
        민감하게 반응을 해요. <br/>
        그러니까 늘 불안해 있는<br/>
        상태라고 이해를 하시면<br/>
        될 것 같고요. 
        </p>
      </Message.WrapperR>
      <Message.WrapperR>
        <p>
        두 번째가 '재경험 '입니다. <br/>
        '재경험'이 꿈에서 나타나는<br/>
        경우가 굉장히 많아요. <br/>
        내가 트라우마를 입었던<br/>
        어떤 환경이나 상황이 꿈에서<br/>
        재현되는 거죠. 
        </p>
      </Message.WrapperR>
      <Message.WrapperR>
        <p>
        간단한 트라우마로는 남들<br/>
        앞에서 ppt 발표를 했는데<br/>
        애들이 그냥 비웃고 있고,<br/>
        선생님이 지적질을 크게 했고,<br/>
        그래서 뭔가 되게 창피함을<br/>
        느꼈고, 이런 것 때문에 다시는<br/>
        남들 앞에서 발표를 못하시는<br/>
        분들도 계시거든요.
        </p>
      </Message.WrapperR>
      <Message.WrapperR>
        <p>
        이런 분들은 꿈에서<br/>
        자기가 발표하다가 뭔가<br/>
        놀림거리가 되는 그런 상황이 <br/>
        재현되는 분들이 많이 계시죠.
        </p>
      </Message.WrapperR>
      <Message.WrapperR>
        <p>
        세 번째가 '회피'인데<br/>
        방금 말씀드렸던 것처럼<br/>
        남들 앞에서 발표를 하고<br/>
        창피를 당했다. <br/>
        그러면 다시는 발표를 안 하겠다. <br/>
        이런 식으로 그 비슷한 상황을<br/>
        계속해서  피하려고 하는게<br/>
        증상으로 나타날 수가 있습니다. 
        </p>
      </Message.WrapperR>
      <Message.WrapperR>
        <p>
        어쨌든간에 '재경험'이<br/>
        많이들 보이시는 증상이라서,<br/>
        꿈에서 재현되는 분들이<br/>
        많은게 사실이고 그게<br/>
        &lt; 달러구트 꿈 백화점 &gt;에<br/>
        나왔던 것 같아요.
        </p>
      </Message.WrapperR>
      <Message.Next></Message.Next>

      <NextTalk onClick={(event) => {
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
    </Message.Background>
  </ParagraphM>
)

const P1_4 = () => (
  <ParagraphM>
    <Message.Background>
    <Message.All>
      <Message.ProfileImageL src='/images/part2/Message1.png'/>
      <Message.NameL>김해나</Message.NameL>
      <Message.Wrapper>
        <p>
        또 많은 이들을 울컥하게 한<br/>
        에피소드도 있는데요. <br/>
        죽음을 앞두신 분이 사랑하는<br/>
        사람들에게  꿈을 보내기 위해서<br/>
        의뢰하는 내용이 있었거든요.
        </p>
      </Message.Wrapper>
      <Message.Wrapper>
        <p>
        가까운 사람을 잃어서<br/>
        상실감이 큰 분들께<br/>
        고인을 되돌아보게 하는<br/>
        행동은 도움이 되는 걸까요?
        </p>
      </Message.Wrapper>
      <Message.BlockL> </Message.BlockL>

      <Message.Next></Message.Next>

      <Message.ProfileImageR src='/images/part2/Message2.jpg'/>
      <Message.NameR>양재웅</Message.NameR>
      <Message.WrapperRF>
          <p>
          실제로 도움이 많이 됩니다. <br/>
          가족 구성원 중에 한 분을<br/>
          상실한 그런 경험이 있는<br/>
          나머지 가족 구성원들 같은<br/>
          경우가 대부분 고인에 대한<br/>
          얘기를 못 꺼내요. 서로.
          </p>
      </Message.WrapperRF>
      <Message.WrapperR>
          <p>
          왜냐하면 나도 너무<br/>
          감당이 안 되고, 얘기를<br/>
          꺼냈는데 저 사람한테도 너무<br/>
          힘들 것 같으니까<br/>
          쉬쉬하게 되거든요. 
          </p>
      </Message.WrapperR>
      <Message.WrapperR>
          <p>
          근데 그러면서 각자<br/>
          병이 깊어지는 경우가<br/>
          많은 것 같아요. 
          </p>
      </Message.WrapperR>
      <Message.WrapperR>
          <p>
          그 고인에 대해서 우리가 <br/>
          아무렇지 않게 드러낼 수<br/>
          있어야 되고, <br/>
          그 추억을 같이 갖고 있는 <br/>
          사람들하고 공유할 수 있을 때<br/>
          우리는 그 상실감에서<br/>
          벗어날 수가 있게 돼요.
          </p>
      </Message.WrapperR>
      <Message.WrapperR>
          <p>
          근데 그거를 꾹꾹  눌러놓고<br/>
          열면 안되는 어떤 상자라고<br/>
          생각을 하면서 자꾸 자꾸<br/>
          치워놓기 시작을 하면,<br/>
          오히려 관련된 우울감이<br/>
          더 커질 수 밖에 없는 것 같아서<br/>
          그거를 회상하는 것도 좋고,
          </p>
      </Message.WrapperR>
      <Message.WrapperR>
          <p>
          특히나 중요한 것은<br/>
          그 추억을 같이 공유할 수<br/>
          있는 사람들하고<br/>
          충분히 얘기하실 수 있는<br/>
          그런 환경을 갖추시는게<br/>
          제일 필요할 것 같습니다.
          </p>
      </Message.WrapperR>
      <Message.Next></Message.Next>

      <NextTalk onClick={(event) => {
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
    </Message.Background>
  </ParagraphM>
)

const P1_5 = () => (
  <ParagraphM>
    <Message.Background>
    <Message.All>
      <Message.ProfileImageL src='/images/part2/Message1.png'/>
      <Message.NameL>김해나</Message.NameL>
      <Message.Wrapper>
        <p>
        선생님은 책을 보시면서 또<br/>
        그 이외에 흥미롭게 보신<br/>
        에피소드가 있었나요?
        </p>
      </Message.Wrapper>

      <Message.Next></Message.Next>

      <Message.ProfileImageR src='/images/part2/Message2.jpg'/>
      <Message.NameR>양재웅</Message.NameR>
      <Message.WrapperRF>
          <p>
          타인의 삶이라는<br/>
          꿈에 대한 이야기였는데요.
          </p>
      </Message.WrapperRF>
      <Message.WrapperR>
          <p>
          그 주인공은 이제<br/>
          자기의 삶에 대해서<br/>
          나쁘진 않은데,<br/>
          TV속에 나오는 뭔가 화려하게<br/>
          사는 사람들을 보면 
          </p>
      </Message.WrapperR>
      <Message.WrapperR>
          <p>
          뭔가 잘못 살고 있는 것 같고, <br/>
          뭐라도 더 해야 될 것 같고, <br/>
          뭔가 불안하고...<br/>
          이렇게 비교하고 있는 그런<br/>
          주인공이었죠. 
          </p>
      </Message.WrapperR>
      <Message.WrapperR>
          <p>
          그러다가 8년째<br/>
          무명생활을  겪고 있는 <br/>
          아티스트의 삶을 사는<br/>
          꿈을 꾸게 돼요.
          </p>
      </Message.WrapperR>
      <Message.WrapperR>
          <p>
          그리고 그 8년이라는<br/>
          무명 세월 동안<br/>
          얼마나 힘든지에 대해서<br/>
          하룻밤의 꿈으로 느끼고, <br/>
          실제로 TV에 나오는 사람들이 <br/>
          정말 많이 힘들었을 수 있겠구나<br/>
          라는 것을 공감할 수 있게 되고,  
          </p>
      </Message.WrapperR>
      <Message.WrapperR>
          <p>
          다음 날 출 하는 길에 자기가<br/>
          얼마나 행복한 삶을<br/>
          영위하고 있는가에 대해서<br/>
          다시한번 확인하는 그런<br/>
          에피소드였던거 같습니다.
          </p>
      </Message.WrapperR>
      <Message.WrapperR>
          <p>
          '알랭드 보통'이<br/>
          '불안'이라는 책에서 <br/>
          그런 말을 했었거든요.
          </p>
      </Message.WrapperR>
      <Message.ImageR src='/images/part2/unrest.jpg'/>
      <Message.WrapperR>
          <p>
          예전에 계급 사회일 때는 우리는<br/>
          훨씬 덜 불안했다. <br/>
          왜냐하면 내가 타고난<br/>
          계급을 가지고  주어진 대로<br/>
          살면 됐기 때문에.
          </p>
      </Message.WrapperR>
      <Message.WrapperR>
          <p>
          우리는 뭔가를 해야 된다라는<br/>
          압박과 강박 속에서 살지 않아도<br/>
          괜찮았다 라는 얘기를 합니다.
          </p>
      </Message.WrapperR>
      <Message.WrapperR>
          <p>
          우리가 지금 살고 있는<br/>
          세상은 끊임없이 나를<br/>
          불안하게 하잖아요. <br/>
          너무 많은 비교가 결국에<br/>
          내 행복을 갉아 먹는다<br/>
          라는 것을 여러분들이 <br/>
          많이 인지하셨으면 좋겠어요. 
          </p>
      </Message.WrapperR>
      <Message.WrapperR>
          <p>
          정말로 중요한 것은<br/>
          남들과의 비교에서<br/>
          자유로워질 수 있는,
          </p>
      </Message.WrapperR>
      <Message.WrapperR>
          <p>
          그래서 나의 속도를 찾는 것.<br/>
          내 방향을 찾는 것이라고<br/>
          생각을 합니다.
          </p>
      </Message.WrapperR>
      <Message.Next></Message.Next>

      <NextTalk onClick={(event) => {
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
    </Message.Background>
  </ParagraphM>
)

const P1_6 = () => (
  <ParagraphM>
    <Message.Background>
    <Message.All>
      <Message.ProfileImageL src='/images/part2/Message1.png'/>
      <Message.NameL>김해나</Message.NameL>
      <Message.Wrapper>
        <p>
        이런 본인의 삶을<br/> 
        부정적으로 여기는 분들께는<br/>
        어떤 처방이 필요할까요?
        </p>
      </Message.Wrapper>

      <Message.Next></Message.Next>

      <Message.ProfileImageR src='/images/part2/Message2.jpg'/>
      <Message.NameR>양재웅</Message.NameR>
      <Message.WrapperRF>
          <p>
          이런 분들이 공통점이<br/>
          비교를 많이 하는 게 있고,<br/>
          또 하나가 일하고 자기 자신을<br/>
          동일시해요. 
          </p>
      </Message.WrapperRF>
      <Message.WrapperR>
          <p>
          그러니까 일적으로 성취를<br/>
          뭔가 막 하고 있을 때<br/>
          자기는 굉장히 괜찮은 사람이라고<br/>
          생각을 하고요. 
          </p>
      </Message.WrapperR>
      <Message.WrapperR>
          <p>
          마찬가지죠 사회적인 평판, 명망,<br/>
          이런 것들이 올라가면 자기는<br/>
          괜찮다라고 생각을 하는 거죠. 
          </p>
      </Message.WrapperR>
      <Message.WrapperR>
          <p>
          근데 참 슬픈 얘기예요. <br/>
          내가 일을 잘하지 못해도 뭔가<br/>
          남들이 나를 인정하지 않아도<br/>
          내가 나를 존중할 수 있어야 되고, <br/>
          내가 나를 사랑할 수<br/>
          있어야 되잖아요.<br/>
          근데 항상 명분이 필요한 거죠. 
          </p>
      </Message.WrapperR>
      <Message.WrapperR>
          <p>
          바꿔 말하면 자기가<br/>
          자기 자신한테 너무<br/>
          인색한 거죠.
          </p>
      </Message.WrapperR>
      <Message.WrapperR>
          <p>
          그래서 이런 분들 같은 경우에는<br/>
          어떠한 특별한 조건이 없어도<br/>
          자기 자신에 대해서<br/>
          귀하게 생각할 수 있게끔, <br/>
          그런 방향으로 인생을<br/>
          살 수 있게끔  많이 가이드를<br/>
          하는 것 같고,
          </p>
      </Message.WrapperR>
      <Message.WrapperR>
          <p>
          제가 많이 지시적인<br/>
          어떤 접근을 했을 때는<br/>
          대화를 많이 하게 합니다. <br/>
          자기 자신하고.
          </p>
      </Message.WrapperR>
      <Message.WrapperR>
          <p>
          '너 정말 하고 싶은 게 뭐야?'<br/>
          '너 10년 뒤에 20년 뒤에<br/>
          30년 뒤에  어떻게 살고 싶어?'<br/>
          에 대해서 보통 물어보면요,<br/>
          대답을 잘 못하세요.
          </p>
      </Message.WrapperR>
      <Message.WrapperR>
          <p>
          어떤 삶을 살고 싶은지에 대해서 <br/>
          이제 생각을 하다 보면, <br/>
          지금의 내가 어떤 방향으로<br/>
          가야 될지에 대해서도<br/>
          가닥이 잡히는 것 같더라고요. <br/>
          그런 거를 생각만 하게<br/>
          하는 것보다는  글로 정리를<br/>
          하게끔 많이 말씀을 드리고, 
          </p>
      </Message.WrapperR>
      <Message.WrapperR>
          <p>
          혹시<br/>
          이 오디오를 들으시는 분 중에서<br/>
          '내가 뭔가 남보다 부족하다.'거나,<br/>
          '뭔가 더 열심히<br/>
          살아야 될 것 같다.' 라고 스스로<br/>
          채찍질하고 불안해하고 계시는<br/>
          분들이 많이 있으시다면,
          </p>
      </Message.WrapperR>
      <Message.WrapperR>
          <p>
          남들이 뭔가 바라는 혹은 남들이<br/>
          기대하는 삶이 아니라<br/>
          그리고 남들이 뭔가 평가하는<br/>
          그런 차원의 세상이 아니라, 
          </p>
      </Message.WrapperR>
      <Message.WrapperR>
          <p>
          우리가 언제 죽을지 모르는<br/>
          세상에  살고 있는 거라고<br/>
          생각을 하시면서<br/>
          어떤 삶으로 이 생을 마치고<br/>
          싶은지에 대해서 글로 한번<br/>
          정리를 해보시면,
          </p>
      </Message.WrapperR>
      <Message.WrapperR>
          <p>
          그게 여러분한테 좀 방향을<br/>
          설정하는 데 있어서 도움이<br/>
          될 것 같습니다.
          </p>
      </Message.WrapperR>
      <Message.Next></Message.Next>

      <NextTalk onClick={(event) => {
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
    </Message.Background>
  </ParagraphM>
)

const P1_7 = () => (
  <ParagraphM>
    <Message.Background>
    <Message.All>
      <Message.ProfileImageL src='/images/part2/Message1.png'/>
      <Message.NameL>김해나</Message.NameL>
      <Message.Wrapper>
        <p>
        저는 이 책을 그냥<br/>
        어른들의 동화같다<br/>
        라는 생각으로만 읽었는데, <br/>
        이렇게 정신과 전문의 선생님의<br/>
        시선으로 책의 해석을<br/>
        듣다 보니까 다른 버전의<br/>
        &lt; 달러구트 꿈 백화점 &gt;을<br/>
        읽은 느낌이 납니다. 
        </p>
      </Message.Wrapper>
      <Message.Wrapper>
        <p>
        오늘 선생님께 마지막으로<br/>
        드리고 싶은 질문이 있는데요. 
        </p>
      </Message.Wrapper>
      <Message.BlockL> </Message.BlockL>
      <Message.Wrapper>
        <p>
        정신과 전문의가 아닌<br/>
        인간 양재웅으로서<br/>
        오늘 선생님이<br/>
        꾸시고 싶은 꿈이 있다면<br/>
        어떤 걸까요?
        </p>
      </Message.Wrapper>
      <Message.BlockL> </Message.BlockL>

      <Message.Next></Message.Next>

      <Message.ProfileImageR src='/images/part2/Message2.jpg'/>
      <Message.NameR>양재웅</Message.NameR>
      <Message.WrapperRF>
        <p>
        달라구트 꿈 백화점에서<br/>
        '막심'이라는 캐릭터가 저는<br/>
        상당히 안쓰럽기도 하고 동시에<br/>
        좀 공감도 가는 부분도 있었어요. 
        </p>
      </Message.WrapperRF>
      <Message.WrapperR>
        <p>
        그래서 그 악몽을 만드는<br/>
        '막심'이라는 인물이 돼서<br/>
        죄책감을 못 느끼는<br/>
        어떤 양심의 결핍, 혹은<br/>
        부재를 갖고 살아가는<br/>
        사람들의 꿈에 좀<br/>
        나타나 보고 싶다는<br/>
        생각이 들었습니다.
        </p>
      </Message.WrapperR>
      <Message.Next></Message.Next>

      <NextTalk onClick={(event) => {
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
    </Message.Background>
  </ParagraphM>
)

const P1_8 = () => (
  <ParagraphM>
    <Message.Background>
    <Message.All>
      <Message.ProfileImageL src='/images/part2/Message1.png'/>
      <Message.NameL>김해나</Message.NameL>
      <Message.Wrapper>
        <p>
        어떤 인물이 읽고<br/>
        어떤 시선으로 보고<br/>
        어떻게 상상하느냐에 따라<br/>
        내용과 해석이 달라질 수<br/>
        있는 것이 바로 책인데요. 
        </p>
      </Message.Wrapper>
      <Message.Wrapper>
        <p>
        화면 아래 동영상을 클릭하시면<br/>
        &lt; 달러구트 꿈 백화점 &gt;을 읽은<br/>
        스타들이 만들어낸  특별한<br/>
        상상 콘텐츠를 보실 수 있습니다. 
        </p>
      </Message.Wrapper>
      <Message.BlockL> </Message.BlockL>
      <Message.Wrapper>
        <p>
        수많은 상상력을 불러일으키는<br/>
        &lt; 달러구트 꿈 백화점 &gt;의<br/>
        또 다른 버전이 궁금하시다면<br/>
        클릭해 주세요.
        </p>
      </Message.Wrapper>
      <Message.BlockL> </Message.BlockL>
      <Message.Wrapper>
        <p>
        &lt; 달러구트 꿈 백화점 &gt;<br/>
        도슨트로 참여해 주신 <br/>
        정신과 전문의 양재웅 선생님. <br/>
        오늘 너무 즐거운<br/>
        시간이었습니다.
        </p>
      </Message.Wrapper>
      <Message.BlockL> </Message.BlockL>

      <Message.Next></Message.Next>

      <Message.ProfileImageR src='/images/part2/Message2.jpg'/>
      <Message.NameR>양재웅</Message.NameR>
      <Message.WrapperRF>
        <p>
        저도 오랜만에 정말 덕분에<br/>
        재밌는 어른용 동화를<br/>
        읽었던 것 같고, <br/>
        이래서 이 책이 정말 인기가<br/>
        많았구나라고 생각을 하면서<br/>
        봤던 것 같고요.
        </p>
      </Message.WrapperRF>
      <Message.WrapperR>
        <p>
        다음에 또 기회가 되면 <br/>
        다른 책을 가지고<br/>
        얘기를 하면 좋겠다. <br/>
        이런 생각도 들었습니다. <br/>
        감사합니다.
        </p>
      </Message.WrapperR>

      <Message.Next></Message.Next>
      <Message.Next></Message.Next>

    </Message.All>
    </Message.Background>
  </ParagraphM>
)

const NextTalk = styled.button`
  display: block;
  align-items: center;
  justify-content: center;
  padding: 3px 20px;
  font-size: 14px;
  border: 1px solid #333333;
  border-radius: 100px;
  background-color: white;
  margin: 0 auto;
  margin-bottom: 100px;
`

export default [
  P1_0,
  P1_1,
  P1_2,
  P1_3,
  P1_4,
  P1_5,
  P1_6,
  P1_7,
  P1_8
]