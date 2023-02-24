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
      <img src="/images/part2/C0.jpg" alt="" />
    </Wrapper>
  ) 
}

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

export default P0