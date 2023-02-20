import styled from 'styled-components'
import { motion } from 'framer-motion'

type FixedButtonProps = {
  disabled: boolean,
  onClick?: (event: React.MouseEvent) => void
}

const FixedButton = ({
  disabled,
  onClick
}: FixedButtonProps) => {
  return (
    <Wrapper
      type="button"
      disabled={disabled}
      initial={{ opacity: 0, y: 20 }}
      transition={{ type: 'spring', duration: .36, delay: 0.35 }}
      animate={{ opacity: 1, y: 0 }}      
      onClick={onClick}
    >확인</Wrapper>
  )
}

const Wrapper = styled(motion.button)`
  position: sticky;
  z-index: 2;
  left: 0;
  bottom: 0;
  display: block;
  width: 100%;
  padding: 16px 0;
  background-color: var(--primary);
  font-size: 16px;
  line-height: 24px;
  color: #242424;
  &[disabled] {
    background-color: #adadad;
    color: #fff;
  }
`

export default FixedButton