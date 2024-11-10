import { useState } from "react";
import "../index.css"

useState

const ToggleBG = () => {

    const[bgColor,setBgColor] = useState('white');
    const[textColor,setTextColor] = useState('#1b1b1b');
    const [buttonStyle,setButtonStyle] = useState('white')

    const handleClick = () => {
        setBgColor(bgColor==='white'?'#1b1b1b':'white');
        setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b")
        setButtonStyle(bgColor==="white"?"#1b1b1b":"white");
    }
  return (
    <div style={{background:bgColor,color:textColor}}>
        <button onClick={handleClick} 
        style={{
            buttonStyle,
            color:textColor,
            border: `2px ${textColor}`
            }}
            >
             {bgColor === "1b1b1b" ? "Black Theme" : "White Theme"}
            </button>

            <section className="content">
            <h1>
                WELCOME TO A <br />
                REAL WORLD
            </h1>
            </section>
    </div>
  )
}

export default ToggleBG