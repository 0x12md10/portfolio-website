import { useRef, useState } from "react";
import "./Blog.css";
import ScrollContext from "../../utils/ScrollContext";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Blog() {

  const [btnActive ,setBtnActive] = useState(true);

    const sectionRefs = useRef(ScrollContext);

    const [email ,setEmail] = useState("");

    function handleInputMail(e){
        setEmail(e.target.value);
    }

    async function handleSubmit(e) {
      e.preventDefault();

      if(email && email.length >=7) {
        setBtnActive(false)
        try {
          const res = await axios.post("https://maillist.abisheka.in/post" , {
            email
          })
          toast.success("successfully subscribed 🎉");
          setEmail("")
          setBtnActive(true);
        } catch (error) {
          console.log(error)
        }
      } else {
        toast.warn("Uh oh, 🤔 Enter a valid email.");
      }

    }

  return (
    <div className='blog-container'>
        <div className="blog-header" >Subscribe to Blogs</div>
        <div className="blog-subscribe">
            <input ref={sectionRefs.section5} onChange={e => handleInputMail(e)} placeholder="Enter your mail" required minLength={7} type="email" name="email" id="email" value={email} />
            <div type={"button"} onClick={(e)=>handleSubmit(e)} className={`button-10 ${!btnActive ? "btn-disabled" : "" }`} role="button">
            {btnActive ? "Subscribe" : "subscribing..."}
            </div>
        </div>
        <ToastContainer/>
    </div>
  )
}

export default Blog