import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { config } from './api'

import { getHistory } from './api/services'

declare global {
  var loadDocentView: Function
}

type LoadDocentViewProps = {
  host: string
  mode: string
  bookSeq: string
  sessionId: string
}

const global = window

global.loadDocentView = async ({
  host,
  mode = 'dev',
  bookSeq = '',
  sessionId = ''
}: LoadDocentViewProps) => {
  let initialPage = 0

  if (mode !== 'dev') {
    // api config
    config.sessionId = sessionId
    
    try {
      const { history } = await getHistory({ bookSeq }) as { history: [{ location: '' }] }
      if (history.length) {
        initialPage = Number(history[0].location) - 1
      }
    } catch {}
  }

  ReactDOM
    .createRoot(document.getElementById('root') as HTMLElement)
    .render(
      <App
        host={host}
        bookSeq={bookSeq}
        mode={mode}
        initialPage={initialPage || 0}
      />
    )
}

// Dev.
if (!global.native && !global.webkit) {
  global.loadDocentView({
    host: `http://${location.hostname}:8081`,
    mode: 'dev'
  })
}