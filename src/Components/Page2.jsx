import React from 'react'
import MiniCards from './MiniCards'
import "./Style/Page2.css"

const eventArr = [
  {
    title: "title",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur debitis nesciunt porro eaque et quos maiores fugiat asperiores necessitatibus soluta."
  },
  {
    title: "title",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur debitis nesciunt porro eaque et quos maiores fugiat asperiores necessitatibus soluta."
  },
  {
    title: "title",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur debitis nesciunt porro eaque et quos maiores fugiat asperiores necessitatibus soluta."
  },
]

const Page2 = () => {
  return (
    <div>
      <h1>Events</h1>
      <div className="eventSection">
        <div className="eventSectionInside">
          {
            eventArr.map((i) => {
              return <MiniCards title={i.title} desc={i.description} />
            })
          }
          <div className="showMoreEvents"><a href="">More...</a></div>

        </div>

      </div>

      <h1>Stalls</h1>
      <div className="eventSection">
        <div className="eventSectionInside">
          {
            eventArr.map((i) => {
              return <MiniCards title={i.title} desc={i.description} />
            })
          }
          <div className="showMoreEvents"><a href="">More...</a></div>

        </div>

      </div>


    </div>
  )
}

export default Page2