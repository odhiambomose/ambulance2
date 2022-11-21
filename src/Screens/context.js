import React,{createContext, useState} from "react";

export const CoordinatesContext=createContext()

const Context=({children})=>{
    const [mapCoordinate,setMapCoordinate]=useState({lat:0,lon:0})
    return(
<CoordinatesContext.Provider value={{coords:[mapCoordinate,setMapCoordinate]}}>
    {children}
    </CoordinatesContext.Provider>
    )
}

export default Context