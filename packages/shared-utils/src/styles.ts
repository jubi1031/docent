// From: https://github.com/9elements/min-max-calculator/blob/main/src/components/Calculator/Calculator.svelte
let unit = 'px'
let isRem = unit === 'rem'
const toRem = (value) => +(isRem ? value : value / 16)?.toFixed(3)
const toPx = (value) => +(isRem ? value * 16 : value)?.toFixed(3)

export function clamp (
  property = '',
  values: number[]
) {
  let [minViewport, maxViewport, minValue, maxValue] = values
  if (!maxValue) {
    maxValue = Math.floor(minValue / minViewport * maxViewport)
  }

  const minValuePx = toPx(minValue)
  const maxValuePx = toPx(maxValue)
  const variablePart = (maxValuePx - minValuePx) / (maxViewport - minViewport)
  const constant = parseFloat(
    ((maxValuePx - maxViewport * variablePart) / 16).toFixed(3)
  )

  const clamp = `clamp(${toRem(minValue)}rem,${constant ? ` ${constant}rem +` : ""} ${parseFloat((100 * variablePart).toFixed(2))}vw, ${toRem(maxValue)}rem)`

  return `
    @supports (${property}: ${clamp}) {
      ${property}: ${clamp}
    }
  `
}
