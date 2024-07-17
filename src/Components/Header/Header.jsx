import { useRef, useState } from "react";
import "./Header.css";
import { animated , useSpring } from "@react-spring/web";

function Header() {


  const [springProps, api] = useSpring(() => ({
    top : '20',
    left: '0',
    width : '0',
    height : '0',
        visibility : 'hidden'
  
  }));



  function handleMouseOver(e) {
    const rect = e.target.getBoundingClientRect()
    api.start({
      top : `${rect.top-10}px`,
      left: `${rect.left-20}px`,
      height : `${rect.height+20}px`,
      width : `${rect.width + 40}px`,
      visibility  : 'visible'
  
    });
  }

  function handleMouseLeave() {
    api.set({
      width : '0',
      height : '0',
            visibility : 'hidden'
    })
  }

  return (

    <animated.div
    onMouseLeave={handleMouseLeave}
    className={'navbar'}
    
    >
        <animated.div
        style={{
          ...springProps,
          position: 'absolute',
          border: '3px solid rgba(255, 199, 237,1)',
          borderRadius: '25px',
          zIndex : '1000'
        }}
        />
        <animated.div onMouseOver={(e)=> handleMouseOver(e)} className="navbar-item">/</animated.div>
        <animated.div onMouseOver={(e)=> handleMouseOver(e)}  className="navbar-item">skills</animated.div>
        <animated.div onMouseOver={(e)=> handleMouseOver(e)}  className="navbar-item">Projects</animated.div>
    </animated.div>
  )
}

export default Header