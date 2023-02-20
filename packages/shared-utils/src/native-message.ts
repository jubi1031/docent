declare global {
  var native
  var webkit
}

export const nativeMessage = {
  post (channel, props?) {
    if (window.native) {
      if (window.native[channel]) {
        if (props) {
          window.native[channel](JSON.stringify(props))
        } else {
          window.native[channel]()
        }
      }
    }
  }
}