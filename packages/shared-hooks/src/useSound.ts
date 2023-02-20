import { useEffect, useState, useRef, useCallback } from 'react'
import type { Howl } from 'howler'

interface SoundProps {
  src: string | string[],
  html5?: boolean,
  loop?: boolean,
  volume?: number
}

export type ReturnedValue = [Howl | null, {
  play: () => void,
  pause: () => void,
  stop: () => void,
  skipPrev: () => void,
  skipNext: () => void
}]

const useSound = ({
  src,
  html5 = true,
  volume = 1,
  loop = false,
  ...props
}: SoundProps) => {
  const tracks = Array.isArray(src) ? src : [src]
  const rawHowl = useRef<any>(null)
  const isSkip = useRef(false)
  const [sound, setSound] = useState<Howl | null>(null)
  const [index, setIndex] = useState<number>(0)

  useEffect(() => {
    import('howler').then(mod => {
      const Howl = mod.Howl ?? mod.default.Howl
      rawHowl.current = Howl
    
      setSound(new rawHowl.current({
        src: tracks[index],
        volume,
        loop,
        html5,
        onend: () => {
          if (tracks.length > 1) skipNext()
        },
        ...props
      }))
    })
  }, [])

  useEffect(() => {
    if (!sound) {
      return
    }
    
    sound.once('fade', () => {
      sound.unload()
      setSound(new rawHowl.current({
        src: tracks[index],
        volume,
        loop,
        html5,
        onend: () => {     
          if (tracks.length > 1) skipNext()
        },
        ...props
      }))
    })

    isSkip.current = true
  }, [index])

  useEffect(() => {
    if (isSkip.current) {
      play()
    }

    isSkip.current = false
  }, [sound])

  const play = useCallback(() => {
    sound?.play()
  }, [sound])

  const pause = useCallback(() => {
    sound?.pause()
  }, [sound])

  const stop = useCallback(() => {
    sound?.stop()
  }, [sound])

  const skipPrev = useCallback(() => {
    let cIndex = index
    let nIndex = cIndex > 0 ? --cIndex : tracks.length - 1
    setIndex(nIndex)
  }, [JSON.stringify(index)])

  const skipNext = useCallback(() => {
    let cIndex = index
    let nIndex = cIndex < tracks.length - 1 ? ++cIndex : 0
    setIndex(nIndex)
  }, [JSON.stringify(index)])

  const returnedValue: ReturnedValue = [
    sound,
    {
      play,
      pause,
      stop,
      skipPrev,
      skipNext
    }
  ]

  return returnedValue
}

export default useSound