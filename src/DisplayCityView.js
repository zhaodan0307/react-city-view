import './DisplayCityView.scss'
import {useEffect} from "react";

export const DisplayCityView = ({imgList, updateIndex}) => {

    useEffect(()=>{

        document.getElementsByTagName('img').hidden = true
    },[imgList])

    return (
        <div className='display-city-view-container'>
            {imgList.map((item, index) => <img
                // pass the clicked index to parent
                onClick={() => updateIndex(index)}
                key = {index}
                src= {item.thumb}
                alt=""/>)
            }

        </div>
    )
}