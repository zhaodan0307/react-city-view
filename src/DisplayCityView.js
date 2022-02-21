import './DisplayCityView.css'
import React,{useEffect, useState} from "react";
import {Loading} from "./Loading";


export const DisplayCityView = ({imgList, updateIndex,updateBackImg}) => {

    useEffect(()=>{
        setIsLoading(true)
        for (let elementsByClassNameElement of document.getElementsByClassName('imgGroup')) {
           elementsByClassNameElement.hidden = false
        }

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
                            onClick = {() =>{
                                updateIndex(index)
                                updateBackImg({regular:item.regular,des:item.des})
                            } }
                            onLoad = {
                                e => {

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