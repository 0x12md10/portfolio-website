import { useSpring,animated, config, easings, useSprings } from "@react-spring/web"
import "./Header.css"
import { useContext } from "react"
import ScrollContext from "../../utils/ScrollContext"
function Header() {

  const {sectionRefs} = useContext(ScrollContext);
  const [springs ,api] = useSprings(6,()=> {
    return {
      from :{
        transform : 'scale(1)',
        transformOrigin : 'left',
        config : {
          duration : '300'
        }
      }
    }
  })

  function handleMouseOver(i) {
    api.start((index) => {
      if (index === i) {
        return {
          transform: 'scale(1.1)',
          transformOrigin: 'left',
        };
      }
    });
  }

  function handleMouseLeave(i) {
    api.start((index) => {
      if (index === i) {
        return {
          transform: 'scale(1)',
          transformOrigin: 'left',
        };
      }
    });
  }

  return (
    <div  ref={sectionRefs.section1} className='header'>
        <animated.div onMouseOver={()=> handleMouseOver(0)} onMouseLeave={()=>handleMouseLeave(0)} style={{color : '#000',textAlign:'justify',...springs[0]}} >Hey <span className="wave">👋</span>, This is Abishek</animated.div>

        <animated.div onMouseOver={()=> handleMouseOver(1)} onMouseLeave={()=>handleMouseLeave(1)} style={{color : '#000',textAlign:'justify',...springs[1]}}>I&apos;m a Master&apos;s student pursuing Computer Science Specializing in ML <span className="header-emojis">🧑‍💻</span>.</animated.div>

        <animated.div  onMouseOver={()=> handleMouseOver(2)} onMouseLeave={()=>handleMouseLeave(2)} style={{color : '#000',textAlign:'justify',...springs[2]}}>I do web application development <span className="header-emojis">🧩</span> & cook in my free time <span className="header-emojis">🍳</span>.</animated.div>

        <animated.div onMouseOver={()=> handleMouseOver(3)} onMouseLeave={()=>handleMouseLeave(3)} style={{color : '#000',textAlign:'justify',...springs[3]}}>I don&apos;t bound myself to a specific stack <span className="header-emojis">👽</span>.</animated.div>

        <animated.div  onMouseOver={()=> handleMouseOver(4)} onMouseLeave={()=>handleMouseLeave(4)} style={{color : '#000',textAlign:'justify',...springs[4]}}>Juggling with concepts <span className="header-emojis">🤔</span> in development ? <span className="header-emojis">👇</span></animated.div>

        <animated.div onMouseOver={()=> handleMouseOver(5)} onMouseLeave={()=>handleMouseLeave(5)} style={{color : '#000',textAlign:'justify',...springs[5]}}>Have a glance at my blog , where I write <span className="header-emojis">📝</span> about new <span className="header-emojis">🆕</span>, interesting <span className="header-emojis">😁</span> , hard to learn❔ concepts.</animated.div>


    </div>
  )
}

export default Header