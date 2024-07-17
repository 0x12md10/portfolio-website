

import AnimatedCursor from 'react-animated-cursor'
import './App.css'
import Header from './Components/Header/Header'
import Demo from './demo-react-spring/Demo'


function App() {
  



  return (
  <div  className='app-wrapper'>
    <Header/>
    <Demo/>
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
