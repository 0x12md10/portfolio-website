import {animated, useSpring} from "@react-spring/web"

function Demo() {

  // const springs = useSpring({
  //   from : {
  //     x :0
  //   },
  //   to : {
  //     x : 200
  //   }
  // })

  const [springs,api] = useSpring(()=> {
    return {
      from : {
        x :-100
      }
    }
  })

  function handleClick() {

    api.start({
      from : {
        x :10
      },
      to : {
        x : 500
      }
    })
  }

  return (
    <animated.div
    onClick={handleClick}
    style={{
      width : '50px',
      height : '50px',
      backgroundColor : 'red',
      borderRadius : '10px',
      ...springs
    }}
    
    />


  )
}

export default Demo