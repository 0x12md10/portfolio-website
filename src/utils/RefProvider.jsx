import { useRef } from "react"
import ScrollContext from "./ScrollContext";



function RefProvider({children}) {

  const sectionRefs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
    section4: useRef(null),

  }

  const focusRef = useRef("aaa");

  return (
    <ScrollContext.Provider value={{sectionRefs,focusRef}}>
        {children}
    </ScrollContext.Provider>
  )
}

export default RefProvider