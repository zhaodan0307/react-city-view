import {useEffect, useState} from "react";
import axios from "axios";

const unsplashKey = '-vX8RabSM-Md7JP0tqtJ_Xdnfua4H56EcO4fS2JTdok'
const unsplashUrl = 'https://api.unsplash.com/search/photos'

export const SearchBarCityView = ({updateImgList, updateIndex,updateCity,updatePage}) => {
    const [inputName, setInputName] = useState('Toronto')

    //1. when the component did mount, call searchcity, dependency should be empty
    //2. when the state (inputName) is changed, call searchCity
    useEffect(() => {
        updateCity(inputName)
        searchCity(inputName,updatePage)
    }, [inputName,updatePage])

    const [name, setName] = useState(null)


    //obtain and clean the input value when 'enter' key is pressed
    const keyDownHandler = evt => {
        // console.log(evt.key)
        if (evt.key === 'Enter') {
            updateIndex(0)
            //js syntax can be used in react. when hit enter, all texts in the input will be selected
            document.getElementById('myInput').select()
            let userInputName = evt.target.value.trim().toLowerCase()
            // call searchCity
            // searchCity(userInputName)
            setInputName(userInputName)

        }
    }

    //define searchCity function
    const searchCity = (inputCity,page) => {
        // console.log(inputCity)
        // axios
        // https://api.unsplash.com/search/photos
        // client_id=${access_key}
        // &query=${searchCity}
        // &orientation=landscape`

        axios.get(unsplashUrl, {
            params: {
                query: inputCity,
                orientation: 'landscape',
                page:page

            },
            headers: {
                Authorization: `Client-ID ${unsplashKey}`
            }
        }).then(
            res => {
                console.log(res.config.params)
                // let myres = res.data.results
                //     console.log(myres)
                //     same to
                let {data: {results}} = res
                //reorganize the data structure
                //[{des:'', regular:'', thumb:''}, {}, {}...]
                console.log(results)
                let newRes = results.map(item =>({
                    des: item.alt_description,
                    regular: item.urls.regular,
                    thumb: item.urls.thumb
                }))
                console.log(newRes)
                updateImgList(newRes)
            }
        ).catch(err => console.log(err))
    }

    return (
        <div style={{
            border: '2px solid blue',
            width: '400px',
            height: '100px',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            position: 'absolute',
            top:'5vh',
            right:'5vw'
        }}>
            <label htmlFor="">Please input name: </label>
            <input
                id='myInput'
                onChange={evt => {
                    // console.log(evt.target.value)
                    setName(evt.target.value)
                }}
                onKeyDown={keyDownHandler}

                type="text"/>
            <h3>{name}</h3>

        </div>
    )
}