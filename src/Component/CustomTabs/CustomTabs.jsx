import React, { useState } from 'react'
import "./CustomTabs.css"

const CustomTabs = () => {
    const [active, setActive] = useState("tab1")

    const handleTabs=(tab)=>{
        setActive(tab)
    }
  return (
    <div>
        <div>
            <button
            className={`tab-button ${active === "tab1" ? "active" : ""}`}
            onClick={()=>handleTabs("tab1")}
            >tab1</button>
            <button
            className={`tab-button ${active === "tab2" ? "active" : ""}`}
            onClick={()=>handleTabs("tab2")}
            >tab2</button>
            <button
            className={`tab-button ${active === "tab3" ? "active" : ""}`}
            onClick={()=>handleTabs("tab3")}
            >tab3</button>
        </div>
        <div>
           {active === "tab1" && <div>tab1 content</div>} 
           {active === "tab2" && <div>tab2 content</div>} 
           {active === "tab3" && <div>tab3 content</div>} 
        </div>
    </div>
  )
}

export default CustomTabs