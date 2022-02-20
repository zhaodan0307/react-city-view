
import "./Loading.scss"
import React, {useEffect, useState} from "react";
export const Loading = ({isLoading}) => {


    useEffect(

        ()=>{

            if(isLoading === false){
                for (let elementsByClassNameElement of document.getElementsByClassName('loading-container')) {
                   elementsByClassNameElement.style.display = 'none'
                }
            }
            if(isLoading){
                for (let elementsByClassNameElement of document.getElementsByClassName('loading-container')) {
                    elementsByClassNameElement.style.display = 'flex'
                }
            }


        },[isLoading]
    )



    
    return (
        
        <div className="loading-container" id='con'>
            <p>Loading...</p>
        </div>
    )


}

React.memo(Loading)