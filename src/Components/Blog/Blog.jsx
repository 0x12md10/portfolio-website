import { useRef, useState } from "react";
import "./Blog.css";
import ScrollContext from "../../utils/ScrollContext";
import axios from "axios";

function Blog() {

    const sectionRefs = useRef(ScrollContext);

    const [email ,setEmail] = useState("");

    function handleInputMail(e){
        setEmail(e.target.value)
    }

    async function handleSubmit(e) {
      e.preventDefault();
      const res = await axios.post("http://localhost:3000/post" , {
        email
      })
      console.log(res)
    }

  return (
    <div className='blog-container'>
        <div className="blog-header" >Subscribe to Blogs</div>
        <div className="blog-subscribe">
            <input ref={sectionRefs.section5} onChange={e => handleInputMail(e)} placeholder="Enter your mail" type="email" name="email" id="email" value={email} />
            <div onClick={(e)=>handleSubmit(e)} className="button-10 " role="button">
            Subscribe
            </div>
        </div>
    </div>
  )
}

export default Blog