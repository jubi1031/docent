import { useState, useEffect } from 'react'
import { iframeMessage } from '@shared/utils'

const App = () => {

  useEffect(() => {
    iframeMessage.post('chapters', [
      { title: '도슨트북 소개', page: 1, depth: 1 },
      { title: 'Part 1. 스토리 보기', page: 3, depth: 1 },
      { title: 'Part 2. 해설 보기', page: 104, depth: 1 }
    ])

    iframeMessage.post('currentPage', 0)
    iframeMessage.post('totalPage', 100)
  }, [])

  return (
    <div style={{ margin: '100px' }}>
      <button
        onClick={() => {
          iframeMessage.post('toggleAppbar')
        }}
      >
        토글 앱바
      </button>
    </div>
  )
}

export default App
