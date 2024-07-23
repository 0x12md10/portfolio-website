import { LuGithub } from "react-icons/lu";
import "./Work.css";
import { useContext } from "react";
import ScrollContext from "../../utils/ScrollContext";


const works = [
    {
        title : "Todo Full Stack",
        description : "Organize your day, conquer your tasks.",
        technology : "React, Express, MongoDB",
        isCompleted : true,
        link : "https://github.com/0x12md10/todo-app"
    },
    {
        title : "Portfolio",
        description : "Highlighting my trail in development.",
        technology : "React,React Spring and multiple revisions",
        isCompleted : true,
        link : "https://github.com/0x12md10/portfolio-website"
    },
    {
        title : "Personal Blog",
        description : "Sharing thoughts and discoveries from my tech adventures.",
        technology : "React,React Spring, Recoil, Express, Mongo",
        isCompleted : false,
        link : ""
    },
    {
        title : "Dukaan Dashboard UI",
        description : "Payouts dashboard for Dukaan for a sleek and responsive design.",
        technology : "React , TailwindCSS",
        isCompleted : true,
        link : "https://github.com/0x12md10/Dukaan-Dashboard"
    }
    
]

function Work() {

    const {sectionRefs} = useContext(ScrollContext)

  return (
    <div  ref={sectionRefs.section3} className="work-section">
        <div className="work-section--header">Work <span className="works-header--tooltip">some of my works</span></div>
        <div  className="work-section-container">
        {
            works.map((work,index)=> (
               


        
        
                        <div key={index} className="work-section--items">
                            <div className="work-author--details">
                                <div className="work-author--name"><div className="profile-img"><img src="./profile.jpg" alt="" /></div><div>Abishek</div></div>
                                {work.isCompleted ?<div className="work-author--github"><a href={work.link} target="_blank"><LuGithub/></a><span className="github">look at the code</span></div> : <div className="loader-tooltip-container"><span className="loader-tooltip">still in work</span><div className="loader"></div></div> }
                            </div>
                            <div className="work-details">
                                <div className="work-title">{work.title}</div>
                                <div className="work-description">{work.description}</div>
                                <div className="work-technology"><span className="work-dot"></span>{work.technology}</div>
                            </div>
        
                        </div>

 
            ))
        }
        </div>
    </div>



  )
}

export default Work

