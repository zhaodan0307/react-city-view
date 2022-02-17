import {useState} from "react";
import axios from "axios";
const unsplashKey = '4RiTPmd0j55PK6LmYgwcy_Zw2A5iKghipNnopNC0k4E';
const unsplashUrl = 'https://api.unsplash.com/search/photos'

export const SearchBarCityView = ({updateName,updateImgList}) => {
    //2015 new feature
    const [name,setName] = useState(null)

    //obtain the input value when enter key is press
    const keyDownHandler = evt => {
        console.log(evt.key)
        if(evt.key === 'Enter'){
            let userInputName = evt.target.value.trim().toLowerCase()
            searchCity(userInputName)
        }
    }
    //define search city function
    const searchCity = inputCity => {

        // axios
        axios.get(unsplashUrl, {
            params:{
                query: inputCity,
                orientation:'landscape'
            },
            headers:{
                Authorization: `Client-ID ${unsplashKey}`
            }
        }).then(
            res => {

                // let myres = res.data.results
                // console.log(myres)
                let {data: {results}} = res

                updateImgList(results)
            }
        ).catch(error => console.log(error))


    }



    return (
        <div style={{border: 'orange 2px solid',width:'400px',height: '200px'}}>
            <label htmlFor="">Please input name: </label>
            <input
                onChange={
                    evt => {
                        console.log(evt.target.value)
                        updateName(evt.target.value)
                        setName(evt.target.value)
                    }
                }
                onKeyDown={keyDownHandler}
                type="text"/>
            <h3>Input Child</h3>
            <p>{name}</p>
        </div>
    )
}