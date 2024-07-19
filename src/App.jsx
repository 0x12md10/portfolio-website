
import AnimatedCursor from 'react-animated-cursor'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Skills from './Components/Skills/Skills'
import Footer from './Components/Footer/Footer'
import Work from './Components/Work/Work'
import { useRef } from 'react'

import RefProvider from './utils/RefProvider'
import Blog from './Components/Blog/Blog'

function App() {


  

  return (
    <RefProvider>
<div  className='app-wrapper'>
    <main className='main'>
      <Navbar/>
      <Header/>
      <Blog/>
    </main>
    <Skills/>
    <Work/>
    <Footer/>
    <AnimatedCursor
          innerSize={5}
          outerSize={45}
          outerAlpha={1}
          innerScale={0.7}
          outerScale={5}
          showSystemCursor= {false}
          outerStyle={{
            backgroundColor : 'transparent',
            border : '3px solid rgb(0,0,0)',
            padding : '20px'
          }}
          innerStyle={{
            backgroundColor : '#000'
          }}
    />
  </div>
    </RefProvider>
  
  )
}

export default App
