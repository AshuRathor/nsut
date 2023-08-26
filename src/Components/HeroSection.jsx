import React from 'react'
import "./Style/HeroSection.css"
import heroPhoto from "./Stock/collegememo.png"

const upperLayer = [1, 2, 1, 2, 1, 2, 1, 1]
const middleLeftLayer = [1, 2]
const middleRightLayer = [2, 1]
const bottomLayer = [1, -1, 1, 1, 1, 1, -1, 1]

const HeroSection = () => {
    return (
        <div className='completeHero'>

            <div className="heroUpperLayer">
                {upperLayer.map((i) => {
                    return <div className={`upperLayerImgs ${i == 2 ? "heroMoveUp" : ""}`}> <img className='heroSectionimgs' src={heroPhoto} alt="" /></div>
                })}
            </div>

            <div className="heroMiddleLayer">

                <div className="heroLeftMiddle">
                    {middleLeftLayer.map((i)=>{
                        return <div className={`middleLayerImgs ${i == 2 ? "heroMoveUp" : ""}`}> <img className='heroSectionimgs' src={heroPhoto} alt="" /></div>
                    })}
                </div>

                <div className="heroMiddleWrittenSection">
                    <p className='heroMiddleWrittenP1'>Explore the world</p>
                    <p className='heroMiddleWrittenP2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, qui!</p>
                    <div className="buttonSectionHero">
                        <button className="eventHeroBtn">Events</button>
                        <button className="FoodHeroBtn">Stalls</button>
                        <button className="ReviewHeroBtn">Reviews</button>

                    </div>

                </div>

                <div className="heroRightMiddle">
                    {middleRightLayer.map((i)=>{
                        return <div className={`middleLayerImgs ${i == 2 ? "heroMoveUp" : ""}`}> <img className='heroSectionimgs' src={heroPhoto} alt="" /></div>
                    })}
                </div>

            </div>




            <div className="heroBottomLayer">
                {bottomLayer.map((i) => {
                    return <div className={`bottomLayerImgs ${i == -1 ? "heroMoveDown" : ""}`}> <img className='heroSectionimgs' src={heroPhoto} alt="" /></div>
                })}
            </div>

        </div>
    )
}

export default HeroSection