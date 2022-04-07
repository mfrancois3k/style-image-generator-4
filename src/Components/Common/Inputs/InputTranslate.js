import React from 'react'

export default function Inputtranslate(props) {
      // translate

  function handleOnTranslateX(event) {
    setTranslateXs(`${event.currentTarget.value}px`);
  }

  function handleOnTranslateY(event) {
    setTranslateYs(`${event.currentTarget.value}px`);
  }

  // this dyn

    return (
        <>
    
    <div class="tabs BottomTab">
        <div className="tileTab">2d</div>
        <div class="tabs__tab--active">
          <label>
            {" "}
            TranslateX
            <input
              type="range"
              min="200px"
              max="360"
              defaultValue="360deg"
              onChange={handleOnTranslateX}
            />
          </label>
          <label>
            {" "}
            TranslateY
            <input
              type="range"
              min="200px"
              max="360"
              defaultValue="360deg"
              onChange={handleOnTranslateY}
            />
          </label>
         
        
        </>
    )
}
