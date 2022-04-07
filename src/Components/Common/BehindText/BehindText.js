import React from 'react'

export function Behindtext() {
 function  textBackGround({className, children}) {
  return (
    <div className={className}>
        <div className={className}>
            {children}
        </div>    
    </div>
  )

     
 }

    return (
        <>
           <textBackGround className="behindText"> 
           {textBackGround className="n-text text  positionLeft"} 
                        Stylish 
                 </textBackGround>
            <textBackGround className="behindText"> {textBackGround className="n-text text  positionRight"}
                         Image 
                </textBackGround>
            <textBackGround className="behindText Bottom"> {textBackGround className="n-text text textBottom"}
                        Generator
               </textBackGround>
     
        </>
    )
}
