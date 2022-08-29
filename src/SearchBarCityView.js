import React,{useEffect, useState} from "react";
import axios from "axios";
import './SearchBarCityView.scss'

const unsplashKey = '-vX8RabSM-Md7JP0tqtJ_Xdnfua4H56EcO4fS2JTdok'
const unsplashUrl = 'https://api.unsplash.com/search/photos'

export const SearchBarCityView = ({updateImgList, updateIndex,updateCity,updatePage,updateBackImg,updateSendBack}) => {
    const [inputName, setInputName] = useState('Toronto')


    //1. when the component did mount, call searchcity, dependency should be empty
    //2. when the state (inputName) is changed, call searchCity
    useEffect(() => {
        updateCity(inputName)
        searchCity(inputName,updatePage)
    }, [inputName,updatePage])

    const [name, setName] = useState(null)
    const [inputChange,setInputChange] = useState(true)


    //obtain and clean the input value when 'enter' key is pressed
    const keyDownHandler = evt => {
        // console.log(evt.key)
        if (evt.key === 'Enter') {
            updateIndex(0)
            setInputChange(true)

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
                page === 1 && (updateSendBack||inputChange) && updateBackImg({regular:newRes[0].regular,des:newRes[0].des})
                setInputChange(false)
            }
        ).catch(err => console.log(err))
    }

    return (
        <div className='searchBarContainer'>

            <input
                placeholder="Please Input City Here"
                autoFocus='autoFocus'
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

React.memo(SearchBarCityView)