
import "./Loading.scss"
import {useEffect, useState} from "react";
export const Loading = ({isLoading}) => {


    useEffect(

        ()=>{

            if(isLoading){
                document.getElementById('con').style.display = "flex";
            }else{
                document.getElementById('con').style.display = "none"
            }



        },[isLoading]
    )



    
    return (
        
        <div className="loading-container" id='con'>
            <p>Loading...</p>
        </div>
    )

    
}