export const isNaN = Number.isNaN || window.isNaN

// From: https://davidwalsh.name/detect-native-function
export function isNative (value) {
  return (/\{\s*\[native code\]\s*\}/).test('' + value)
}

export function isObject (value) {
  return typeof value === 'object' && value !== null
}

export function isArray (value) {
  return Array.isArray(value)
}

export function isFunction (value) {
  return typeof value === 'function'
}

export function isString (value) {
  return typeof value === 'string'
}

export function isNumber (value) {
  return typeof value === 'number' && !isNaN(value)
}

export function isFloat (value) {
  return Number(value) === value && value % 1 !== 0
}

export function isUndefined (value) {
  return typeof value === 'undefined'
}

export function isNull (value) {
  return value === null
}

export function isFalsy (value) {
  return isUndefined(value) || isNull(value)
}

// from: https://stackoverflow.com/questions/384286/how-do-you-check-if-a-javascript-object-is-a-dom-object
export function isElement (elem) {
  return (elem instanceof Element || 
  elem && typeof elem === 'object' && elem !== null && elem.nodeType === 1 && typeof elem.nodeName === 'string')
}

export function isAbsoluteURL (url) {
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url)
}

export function isCssVarSupport () {
  return window.CSS && window.CSS.supports && window.CSS.supports('(--foo: red)')
}