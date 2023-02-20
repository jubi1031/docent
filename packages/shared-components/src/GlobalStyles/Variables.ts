import {
  css
} from 'styled-components'
import {
  DARK_COLORS,
  LIGHT_COLORS
} from '@/constants'

interface Colors {
  [key:string]: string
}

const getThemeVariables = (colors: Colors): string  => {
  return Object.keys(colors).map((key: string) => {
    const propName = `--${key}`
    const propValue = colors[key]
  
    return `${propName}: ${propValue};`
  }).join('')
}

const Variables = css`
  :root {
    &[data-theme="light"] {
      ${getThemeVariables(LIGHT_COLORS)}
    }
    &[data-theme="dark"] {
      ${getThemeVariables(DARK_COLORS)}
    }
  }
`

export default Variables