import { useContext } from "react";
import "./Navbar.css"
import { animated , useSpring } from "@react-spring/web";
import ScrollContext from "../../utils/ScrollContext";


function Navbar() {

  const {sectionRefs} = useContext(ScrollContext)
  const {focusRef} = useContext(ScrollContext)

  const scrollToSection = (section) => {
    if(section === 'blogFocus') {
      focusRef.current.focus();

      return;
    }
    console.log(section, sectionRefs[section]);
    sectionRefs[section].current?.scrollIntoView({ behavior: 'smooth' });



  };

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
          border: '3px solid rgba(0, 0, 0,1)',
          borderRadius: '25px',
          zIndex : '1000'
        }}
        />
        <animated.div onClick={()=>scrollToSection('section1')}  onMouseOver={(e)=> handleMouseOver(e)} className="navbar-item">/</animated.div>
        <animated.div onClick={()=>scrollToSection('section2')}  onMouseOver={(e)=> handleMouseOver(e)}  className="navbar-item">Skills</animated.div>
        <animated.div onClick={()=>scrollToSection('section3')}  onMouseOver={(e)=> handleMouseOver(e)}  className="navbar-item">Projects</animated.div>
        <animated.div onClick={()=>scrollToSection('blogFocus')} onMouseOver={(e)=> handleMouseOver(e)}  className="navbar-item">Blog</animated.div>
        <animated.div onClick={()=>scrollToSection('section4')}  onMouseOver={(e)=> handleMouseOver(e)}  className="navbar-item">Social</animated.div>
    </animated.div>
  )
}

export default Navbar