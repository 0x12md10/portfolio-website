import { useState } from "react";
import "./Header.css";
import { animated , useSpring } from "@react-spring/web";

function Header() {

  const [springs, api] = useSpring(()=> {
    return {
      from : {
        x : -100
      }
    }
  })

  const [currentHoverSize, setCurrentHoverSize] = useState()

  function handleMouseOver(e) {
    console.log(`${e.target.clientHeight}px`,e.target.clientHeight);
    console.log(e)
    api.start({
      from : {
        x : -100,
        height : `${e.target.clientHeight}px`,
        width : `${e.target.clientWidth}px`
      },
      to : {
        x : 10,
        height : `${e.target.clientHeight}px`,
        width : `${e.target.clientWidth}px`
      }
    })
  }


  return (

    <animated.div
    
    className={'navbar'}
    
    >
        <animated.div
          style={{
            backgroundColor : "white",
            borderRadius : '10px',
            height : '20px',
            width :'20px',
            ...springs
          }}
        />
        <animated.div onMouseOver={(e)=> handleMouseOver(e)} className="navbar-item">/</animated.div>
        <animated.div onMouseOver={(e)=> handleMouseOver(e)}  className="navbar-item">skills</animated.div>
        <animated.div onMouseOver={(e)=> handleMouseOver(e)}  className="navbar-item">Projects</animated.div>
    </animated.div>
  )
}

export default Header