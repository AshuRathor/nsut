import React from 'react'
import mCard from "./Stock/minicard.png"
import "./Style/MiniCards.css"

const MiniCards = (props) => {
  return (
    <div className='mCard'>
        <div className="minCardImg">
            <img src={mCard} alt=""/>
        </div>
        <div className="miniCardWrittenSection">
            <div className="titleSectionMiniCard">{props.title}</div>
            <div className="DescriptionSectionMiniCard">{props.desc}</div>
            {/* <div className="titleSectionMiniCard"></div> */}

        </div>
    </div>
  )
}

export default MiniCards