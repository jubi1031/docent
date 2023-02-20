type RequestProps = {
  url: string
  method?: string
  headers?: {
    [key: string]: string
  }
  body?: {
    [key: string]: any
  }
}

export const config = {
  sessionId: ''
}

export const camelCased = (items: any[]) => {
  return items.map((item) => {
    const nItem: {
      [key: string]: any
    } = {}
    Object.keys(item).forEach((key) => {
      const camelCase = key.replace(/[-_]+(.)?/g, (m, w) => w.toUpperCase())
      if (Array.isArray(item[key])) {
        nItem[camelCase] = camelCased(item[key])
      } else {
        nItem[camelCase] = item[key]
      }
    })

    return nItem
  })
}

export const request = ({
  url,
  method,
  headers,
  body
}: RequestProps) => {
  if (location.hostname !== 'localhost' && location.protocol.indexOf('file') === -1) {
    return Promise.resolve()
  }

  return fetch(url, {
    method,
    headers: {
      ...headers,
      'session-id': config.sessionId
    },
    body: JSON.stringify(body)
  })
  .then((response) => response.json())
  .then((data) => {
    if (data.RESP_DATA) {
      return camelCased([data.RESP_DATA])[0]
    } else {
      return camelCased([data])[0]
    }
  })
}
