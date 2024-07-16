

import AnimatedCursor from 'react-animated-cursor'
import './App.css'
import Header from './Components/Header/Header'


function App() {
  



  return (
  <div  className='app-wrapper'>
    <Header/>
    <AnimatedCursor
          innerSize={0}
          outerSize={35}
          outerAlpha={1}
          innerScale={0.7}
          outerScale={5}
          showSystemCursor= {true}
          outerStyle={{
            backgroundColor : 'transparent',
            border : '3px solid rgb(192,112,114)',
            padding : '20px'
          }}
    />
  </div>
  )
}

export default App
