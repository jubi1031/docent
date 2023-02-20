import { request } from '../'

export const getHistory = ({
  bookSeq = ''
}) => {
  return request({
    url: `https://live-api.millie.co.kr/v2/viewer/history/${bookSeq}/`
  })
}

export const setHistory = ({
  bookSeq = '',
  location = '',
  updated_at = 0
}) => {
  return request({
    method: 'post',
    url: `https://live-api.millie.co.kr/v2/viewer/history/${bookSeq}/`,
    body: {
      location,
      updated_at
    }
  })
}