import styled from 'styled-components'

const Cover = () => {
  return (
    <Wrapper>
      <img src="/images/opening/cover.jpeg" alt="" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  z-index: 10;
  width: 67%;
  max-width: 335px;
  text-align: center;
  pointer-events: none;
  margin: 0 auto;
`

export default Cover