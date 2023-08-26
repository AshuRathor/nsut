import React from "react";
import NsutContext from "./NsutContext";

const NsutState = (props) => {
  return (
    <NsutContext.Provider value = {{}}>
        {props.children}
    </NsutContext.Provider>
  )
}

export default NsutState