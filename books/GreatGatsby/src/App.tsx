import { GlobalStyles } from '@shared/components'
import { ConfigProvider } from '@/components/ConfigContext'
import Parts from './components/Parts'

import './fonts.css'

const App = () => {
  return (
    <ConfigProvider initialPage={0}>
      <GlobalStyles styles={`
        body {
          position: fixed;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          overflow-x: hidden;
          overflow-y: hidden;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          touch-action: pan-x pan-y;
          overscroll-behavior-y: contain;
          background-color: #fff !important;
        }
      `} />
      <Parts />
    </ConfigProvider>
  )
}

export default App