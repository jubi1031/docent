import Reset from './Reset'
import Variables from './Variables'
import Classes from './Classes'
import MdsIcons from './MdsIcon'
import {
  createGlobalStyle
} from 'styled-components'

const GlobalStyles = createGlobalStyle<{
  styles?: string
}>`
  ${Reset};
  ${Variables};
  ${Classes};
  ${MdsIcons};
  ${({ styles }) => styles}
`

export default GlobalStyles