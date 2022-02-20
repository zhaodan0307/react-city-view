import './DisplayCityView.css'
import React,{useEffect, useState} from "react";
import {Loading} from "./Loading";


export const DisplayCityView = ({imgList, updateIndex}) => {

    useEffect(()=>{
        setIsLoading(true)
        document.getElementsByTagName('img').hidden = true
        {console.log({isLoading})}
    },[imgList])

    const [isLoading,setIsLoading] = useState(true)

    return (
        <div className='display-city-view-container'>

            {imgList.map(
                (item, index) => (
                    <div key = {index} className="imgGroup">
                        <img
                            hidden
                            // pass the clicked index to parent
                            onClick={() => updateIndex(index)}
                            onLoad = {
                                e => {
                                console.log("gallery is onload")
                                e.target.hidden = false
                                setIsLoading(false)

                                }
                            }
                            src= {item.thumb}
                            alt=""/>

                        <Loading isLoading={isLoading}/>

                    </div>



                    )

                )
            }


        </div>
    )
}

React.memo(DisplayCityView)