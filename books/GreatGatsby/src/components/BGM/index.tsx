import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useSound } from '@shared/hooks'
import { useEffect, useRef, useState, useContext } from 'react'
import { iframeMessage } from '@shared/utils'
import { ConfigContext } from '../ConfigContext'

type BGMProps = {
  currentPage: number
}

const BGM = ({
  currentPage
}: BGMProps) => {
  const { openModal } = useContext(ConfigContext)

  const [toggleAppbar, setToggleAppbar] = useState(false)
  const [visible, setVisible] = useState(false)
  const [playing, setPlaying] = useState(false)

  const firstVisible = useRef(false)

  const [firstHalfSound, { play: firstHalfPlay, pause: firstHalfPause, stop: firstHalfStop }] = useSound({
    src: 'sounds/Satie_Gnossienne_No.1.mp3',
    volume: 0.5,
    loop: true
  })
  const [secondHalfSound, { play: secondHalfPlay, pause: secondHalfPause, stop: secondHalfStop }] = useSound({
    src: 'sounds/Sad_Classical_Dramatic_Strings_wav.mp3',
    volume: 0.5,
    loop: true
  })
  /*
  
  const [Open, { play: OpenfPlay, pause: OpenPause, stop: OpenStop }] = useSound({
      src: 'sounds/Open.mp3',
      volume: 0.5,
      loop: true
    })
  
    const [PartOne0, { play: PartOne0Play, pause: PartOne0Pause, stop: PartOne0Stop }] = useSound({
      src: 'sounds/P1-0.mp3',
      volume: 0.5,
      loop: true
    })
  
   const [PartOne21, { play: PartOne21Play, pause: PartOne21Pause, stop: PartOne21Stop }] = useSound({
      src: 'sounds/P1-21.mp3',
      volume: 0.5,
      loop: true
    })
   const [PartOne35, { play: PartOne35Play, pause: PartOne35Pause, stop: PartOne35Stop }] = useSound({
      src: 'sounds/P1-035.mp3',
      volume: 0.5,
      loop: true
    })
  
   const [PartOne53, { play: PartOne53Play, pause: PartOne53Pause, stop: PartOne53Stop }] = useSound({
      src: 'sounds/P1-53.mp3',
      volume: 0.5,
      loop: true
    })
  
     const [PartOne53, { play: PartOne53Play, pause: PartOne53Pause, stop: PartOne53Stop }] = useSound({
      src: 'sounds/P1-59.mp3',
      volume: 0.5,
      loop: true
    })
  
     const [PartOne84, { play: PartOne84Play, pause: PartOne84Pause, stop: PartOne84Stop }] = useSound({
      src: 'sounds/P1-84.mp3',
      volume: 0.5,
      loop: true
    })
     const [PartTwo1, { play: PartTwo1Play, pause: PartTwo1fPause, stop: PartTwo1Stop }] = useSound({
      src: 'sounds/P2-1.mp3',
      volume: 0.5,
      loop: true
    })
     
     const [PartTwo2, { play: PartTwo2Play, pause: PartTwo2Pause, stop: PartTwo2Stop }] = useSound({
      src: 'sounds/P2-2.mp3',
      volume: 0.5,
      loop: true
    }) 
    const [PartTwo3, { play: PartTwo3Play, pause: PartTwo3Pause, stop: PartTwo3Stop }] = useSound({
      src: 'sounds/P2-3.mp3',
      volume: 0.5,
      loop: true
    })
     const [PartTwo4, { play: PartTwo4Play, pause: PartTwo4Pause, stop: PartTwo4Stop }] = useSound({
      src: 'sounds/P2-4.mp3',
      volume: 0.5,
      loop: true
    })
     const [PartTwo5, { play: PartTwo5Play, pause: PartTwo5Pause, stop: PartTwo5Stop }] = useSound({
      src: 'sounds/P2-5.mp3',
      volume: 0.5,
      loop: true
    })
     const [PartTwo6, { play: PartTwo6Play, pause: PartTwo6Pause, stop: PartTwo6Stop }] = useSound({
      src: 'sounds/P2-6.mp3',
      volume: 0.5,
      loop: true
    })
     const [PartTwo7, { play: sPartTwo7Play, pause: PartTwo7Pause, stop: PartTwo7Stop }] = useSound({
      src: 'sounds/P2-7.mp3',
      volume: 0.5,
      loop: true
    })
     const [PartTwo8, { play: PartTwo8Play, pause: PartTwo8Pause, stop: PartTwo8Stop }] = useSound({
      src: 'sounds/P2-8.mp3',
      volume: 0.5,
      loop: true
    })
  
     const [Closing1, { play: Closing1Play, pause: Closing1Pause, stop: Closing1Stop }] = useSound({
      src: 'sounds/C-1.mp3',
      volume: 0.5,
      loop: true
    })
  
     const [Closing2, { play: Closing2Play, pause: Closing2Pause, stop: Closing2Stop }] = useSound({
      src: 'sounds/C-2.mp3',
      volume: 0.5,
      loop: true
    })
  
  */



  const onTogglePlay = () => {
    const currentSound = currentPage > 59 ? secondHalfSound : firstHalfSound

    /* 
    if(currentPage ==105){
      PartTwo1
    }else if(currentPage ==106){
      PartTwo2
    }else if(currentPage ==107){
      PartTwo3
    }else if(currentPage ==108){
      PartTwo4
    }else if(currentPage ==109){
      PartTwo5
    }else if(currentPage ==110){
      PartTwo6
    }else if(currentPage ==111){
      PartTwo7
    }else if(currentPage ==112){
      PartTwo8
    }else if(currentPage ==113){
      Closing1
    }else(currentPage == 114){
      Closing2
    }

    
    */
    const playing = currentSound.playing()

    if (!playing) {
      currentSound.play()
    } else {
      currentSound.pause()
    }

    setPlaying(!playing)
  }

  useEffect(() => {
    iframeMessage.receive((
      channel = '',
      payload: any
    ) => {
      if (channel === 'toggleAppbar') {
        setToggleAppbar(payload)
      }
    })
  }, [])

  useEffect(() => {
    setVisible(toggleAppbar)
  }, [toggleAppbar])

  useEffect(() => {
    if (openModal) {
      setVisible(false)
    }
  }, [openModal])


  useEffect(() => {
    if (!toggleAppbar) {
      setVisible(false)
    }

    // 사운드 아이콘을 아직 보여 주지 않았고, 본문 내용(2페이지 이후)에 들어왔고, 재생 중 이 아니고, 앱바가 열려있지 않을 때
    const isFirstVisible = !firstVisible.current && currentPage > 2 && !playing && !toggleAppbar
    if (isFirstVisible) {
      setVisible(isFirstVisible)

      firstVisible.current = isFirstVisible
    }
  }, [currentPage])

  useEffect(() => {
    if (!firstHalfSound || !secondHalfSound) {
      return
    }

    if (!playing) {
      return
    }

    const isSecondHalf = currentPage > 59
    if (isSecondHalf) {
      if (firstHalfSound.playing()) {
        firstHalfStop()
        secondHalfPlay()

        setVisible(true)
        setTimeout(() => {
          if (!toggleAppbar) setVisible(false)
        }, 2000)
      }
    } else {
      if (secondHalfSound.playing()) {
        secondHalfStop()
        firstHalfPlay()

        setVisible(true)
        setTimeout(() => {
          if (!toggleAppbar) setVisible(false)
        }, 2000)
      }
    }
  }, [currentPage])

  return (
    <Wrapper
      className={`${toggleAppbar ? 'down' : ''} ${visible ? 'visible' : ''}`}
      onClick={(event) => event.stopPropagation()}
    >
      <Sound
        type="button"
        onClick={onTogglePlay}
      >
        {playing ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M3 14.4386V9.40203H6.42106C6.90381 9.40203 7.37027 9.22742 7.73436 8.91043L12 5.19652L12 18.7607L7.74773 14.9493C7.38085 14.6204 6.9055 14.4386 6.41282 14.4386H3ZM2 14.4386V9.40203C2 8.84975 2.44772 8.40203 3 8.40203H6.42106C6.66244 8.40203 6.89567 8.31473 7.07771 8.15623L11.3434 4.44232C11.9905 3.87892 13 4.33853 13 5.19652V18.7607C13 19.6255 11.9765 20.0826 11.3325 19.5054L7.08027 15.6939C6.89684 15.5295 6.65916 15.4386 6.41282 15.4386H3C2.44772 15.4386 2 14.9909 2 14.4386ZM19.6159 6.67986C19.7927 6.46772 20.108 6.43906 20.3201 6.61584C20.8976 7.09709 21.9613 8.44039 22.3625 10.2014C22.7736 12.0055 22.4817 14.2254 20.3536 16.3535C20.1583 16.5488 19.8417 16.5488 19.6464 16.3535C19.4512 16.1582 19.4512 15.8417 19.6464 15.6464C21.5183 13.7745 21.7264 11.9111 21.3875 10.4235C21.0387 8.89285 20.1024 7.73616 19.6799 7.38407C19.4678 7.20728 19.4391 6.892 19.6159 6.67986ZM17.8201 7.61584C17.608 7.43906 17.2927 7.46772 17.1159 7.67986C16.9391 7.892 16.9678 8.20728 17.1799 8.38407C17.5988 8.73313 18.2833 9.63439 18.5094 10.784C18.728 11.8951 18.5259 13.2669 17.1464 14.6464C16.9512 14.8417 16.9512 15.1582 17.1464 15.3535C17.3417 15.5488 17.6583 15.5488 17.8536 15.3535C19.4741 13.733 19.772 12.0215 19.4906 10.5909C19.2167 9.19885 18.4012 8.10011 17.8201 7.61584ZM15.3201 8.61584C15.108 8.43906 14.7927 8.46772 14.6159 8.67986C14.4391 8.892 14.4678 9.20728 14.6799 9.38407C15.0937 9.72889 15.5236 10.3703 15.6298 11.1316C15.7322 11.8653 15.5405 12.7523 14.6464 13.6464C14.4512 13.8417 14.4512 14.1582 14.6464 14.3535C14.8417 14.5488 15.1583 14.5488 15.3536 14.3535C16.4595 13.2476 16.7678 12.0513 16.6202 10.9934C16.4764 9.96292 15.9063 9.10435 15.3201 8.61584Z" fill="black" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M3 9.40203V14.4386H6.41282C6.9055 14.4386 7.38085 14.6204 7.74773 14.9493L12 18.7607L12 5.19652L7.73436 8.91043C7.37027 9.22742 6.90381 9.40203 6.42106 9.40203H3ZM2 9.40203V14.4386C2 14.9909 2.44772 15.4386 3 15.4386H6.41282C6.65916 15.4386 6.89684 15.5295 7.08027 15.6939L11.3325 19.5054C11.9765 20.0826 13 19.6255 13 18.7607V5.19652C13 4.33853 11.9905 3.87892 11.3434 4.44232L7.07771 8.15623C6.89567 8.31473 6.66244 8.40203 6.42106 8.40203H3C2.44772 8.40203 2 8.84975 2 9.40203ZM21.3536 9.6464C21.5488 9.84166 21.5488 10.1582 21.3536 10.3535L19.2071 12.5L21.3536 14.6464C21.5488 14.8417 21.5488 15.1582 21.3536 15.3535C21.1583 15.5488 20.8417 15.5488 20.6464 15.3535L18.5 13.2071L16.3536 15.3535C16.1583 15.5488 15.8417 15.5488 15.6464 15.3535C15.4512 15.1582 15.4512 14.8417 15.6464 14.6464L17.7929 12.5L15.6464 10.3535C15.4512 10.1582 15.4512 9.84166 15.6464 9.6464C15.8417 9.45114 16.1583 9.45114 16.3536 9.6464L18.5 11.7928L20.6464 9.6464C20.8417 9.45114 21.1583 9.45114 21.3536 9.6464Z" fill="black" />
          </svg>
        )}
      </Sound>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  top: 16px;
  right: 16px;
  transition: transform .24s;
  pointer-events: none;
  &.down {
    transform: translateY(48px);
  }
  &.visible {
    pointer-events: auto;
  }

  .is-appbar-open & {
    top: 16px !important;
  }
`

const Sound = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1), 0px 2px 8px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.9);
  opacity: 0;
  transition: opacity .24s .24s ease;
  .visible & {
    opacity: 1;
  }
`

export default BGM