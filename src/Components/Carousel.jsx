import React from 'react'
import { gsap } from 'gsap'
import "./Style/Carousel.css"
import { useDispatch, useSelector } from 'react-redux'
import { carouselActions } from '../Store/Carousel-slice'





const Carousel = () => {
    const cPointer = useSelector(state =>state.carousel.cPointer)
    const switchArr = useSelector(state=>state.carousel.leftPosArr)
    const dispatch = useDispatch();
    const slideMover = (ptr)=>{

        dispatch(carouselActions.moveSlide(ptr))
        console.log(switchArr)
        const difCtr = (-ptr+cPointer)*100;
        gsap.to("#carouselContent1",{
            left: switchArr[0]+difCtr+"%",
            ease:"ease",
            duration:0.6
        })
        gsap.to("#carouselContent2",{
            left: switchArr[1]+difCtr+"%",
            ease:"ease",
            duration:0.6
        })
        gsap.to("#carouselContent3",{
            left: switchArr[2]+difCtr+"%",
            ease:"ease",
            duration:0.6
        })
        gsap.to("#carouselContent4",{
            left: switchArr[3]+difCtr+"%",
            ease:"ease",
            duration:0.6
        })
    
    }
    return (
        <div className='carouselBox'>

            <div className="contentSection">

                <div className="carouselContent" id='carouselContent1'>
                    <div className="carouselImg">
                        <img src="http://nsut.ac.in/sites/default/files/inline-images/1599038395phpImfPh0.jpeg" alt="" />
                    </div>
                </div>

                <div className="carouselContent" id='carouselContent2'>
                    <div className="carouselImg">
                        <img src="http://nsut.ac.in/sites/default/files/inline-images/1599038395phpImfPh0.jpeg" alt="" />
                    </div>
                </div>

                <div className="carouselContent" id='carouselContent3'>
                    <div className="carouselImg">
                        <img src="http://nsut.ac.in/sites/default/files/inline-images/1599038395phpImfPh0.jpeg" alt="" />
                    </div>
                </div>
                <div className="carouselContent" id='carouselContent4'>
                    <div className="carouselImg">
                        <img src="http://nsut.ac.in/sites/default/files/inline-images/1599038395phpImfPh0.jpeg" alt="" />
                    </div>
                </div>
            </div>

            <div className="carouselSlider">
                <div onClick={() => { slideMover(0) }} className={`carouselCircle ${cPointer === 0 ? "carouselBorder" : ""}`}></div>
                <div onClick={() => { slideMover(1) }} className={`carouselCircle ${cPointer === 1 ? "carouselBorder" : ""}`}></div>
                <div onClick={() => { slideMover(2) }} className={`carouselCircle ${cPointer === 2 ? "carouselBorder" : ""}`}></div>
                <div onClick={() => { slideMover(3) }} className={`carouselCircle ${cPointer === 3 ? "carouselBorder" : ""}`}></div>
            </div>

        </div>
    )
}

export default Carousel