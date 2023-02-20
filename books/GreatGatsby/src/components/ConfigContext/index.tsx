import { createContext, ReactNode, useRef, useState } from 'react'

type ConfigProviderProps = {
  children: ReactNode,
  initialPage: number
}

const ConfigContext = createContext(null)
const ConfigProvider = ({
  children,
  initialPage = 0
}: ConfigProviderProps) => {
  const swiperRef = useRef(null)
  const gaugeTutorialClearRef = useRef(false)
  const [openModal, setOpenModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(initialPage)
  const [totalPage, setTotalPage] = useState(0)

  return (
    <ConfigContext.Provider
      value={{
        currentPage,
        totalPage,
        setCurrentPage,
        setTotalPage,
        openModal,
        setOpenModal,
        swiperRef,
        gaugeTutorialClearRef
      }}
    >
      {children}
    </ConfigContext.Provider>
  )
}

export {
  ConfigContext,
  ConfigProvider
}