import {isObject} from './type'

export const assign = Object.assign || function extend(obj, ...args) {
  if (isObject(obj) && args.length > 0) {
    args.forEach((arg) => {
      if (isObject(arg)) {
        Object.keys(arg).forEach((key) => {
          obj[key] = arg[key]
        })
      }
    })
  }

  return obj
}

export const extend = (target, ...sources) => {
  if (!sources.length) {
    return target
  }

  const source = sources.shift()

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) {
          assign(target, {[key]: {}})
        }
        extend(target[key], source[key])
      } else {
        assign(target, {[key]: source[key]})
      }
    }
  }

  return extend(target, ...sources)
}
