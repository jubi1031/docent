export const iframeMessage = {
  post (channel, props?) {
    const iframe = document.getElementById('iframe') as HTMLIFrameElement
    if (iframe) {
      iframe.contentWindow.postMessage({ channel, props }, '*')
    } else {
      window.parent?.postMessage({ channel, props }, '*')
    }
  },

  receive (listener) {
    window.addEventListener('message', (event: MessageEvent) => {
      const { data } = event
      const { channel, props } = data
      if (channel) {
        listener(channel, props)
      }
    })
  }
}