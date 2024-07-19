import { useRef } from "react"
import ScrollContext from "./ScrollContext";



function RefProvider({children}) {
  return (
    <ScrollContext.Provider value={{
        section1: useRef(null),
        section2: useRef(null),
        section3: useRef(null),
        section4: useRef(null),
        section5: useRef(null),
      }}>
        {children}
    </ScrollContext.Provider>
  )
}

export default RefProvider