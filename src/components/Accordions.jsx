import { useState } from "react"
import "../styles/styleA.css"

const Accordions = ({title,content}) => {

    const [active,setActive] = useState(false)

  return (
    <section className="accordion-card" key={Math.random()}>
        <div className="header" onClick={()=>setActive(!active)}>
        <div className="card-title">
        {title}
        <span className="icon">{active?'less':'more'}</span>
        </div>
        </div>
        <div className="content">
            <div className="card-info">
                {active && 
                  <p className="card-info">{content}</p>
                }
            </div>
        </div>
    </section>
  )
}

export default Accordions