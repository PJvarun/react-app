import React from 'react'
import'./externalcss.css'
import cardComp from './CardComp.module.css'
import primaryBtn from './CardComp.module.css'
  // different ways to write css
    // inline CSS
    // internal CSS
    // external CSS
    // Module CSS

//function Stylings(props)
// <button>{props.btnn  ame}</button>


const styles ={
    btnStyles :{
        padding:"10px 20px",
        color:"blue",
        backgroundColor:"orange",
        border:"none"
    }
}
function Stylings({btnname,externalname}) {
  return (
    <div>
    {/*This is inline css <h2  style={{color:"red",backgroundColor:"yellow",fontSize:"20px"}}> Stylings Components </h2>   */}
     <h2  style={{color:"red",backgroundColor:"yellow",fontSize:"20px"}}> Stylings Components </h2>   
    {/* This is internal css <button style={styles.btnStyles}>{btnname}</button> */}
    <button style={styles.btnStyles}>{btnname}</button> 
    
      <div>
      {/*External css*/} 
      {/* <img src="" /> */}

      <button className="btn">{externalname}</button>
      </div>

      {/*Module css*/}  
      <div>
        <h2> Module Styles</h2>
        <button className={cardComp.btn}>Module css</button>
      </div>
      <div>
        <h2>  Styles</h2>
        <button className={primaryBtn.btn}> css</button>
      </div>
    </div>
  )
}

export default Stylings