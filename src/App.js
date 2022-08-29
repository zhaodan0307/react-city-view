
import './App.css';
import {SearchBar} from "./SearchBar";
import {Display} from "./Display";
import {useEffect, useState} from "react";
import {SearchBarCityView} from "./SearchBarCityView";
import {DisplayCityView} from "./DisplayCityView";
import {Loading} from "./Loading";
import { ImArrowRight,ImArrowLeft } from "react-icons/im";

function App() {
    //create a state to store the selected index from child
    const [selectedIndex, setSelectedIndex] = useState(0)
    const updateIndex = value => setSelectedIndex(value)


    //create a state to store the results fetched by child
    const [imgList, setImgList] = useState([])
    const updateImgList = value => setImgList(value)

    //create a state to show whether loading
    const [isLoading,setIsLoading] = useState(true)
    const [city,setCity] = useState(null)
    const updateCity = value => setCity(value)


    //add page
    const [page,setPage] = useState(1)

    //add img
    const [backImage,setBackImage] = useState(null)
    const [newbackImage,setNewBackImage] = useState(null)
    const updateBackImg = value => setBackImage(value)
    const [sendBack,setSendBack] = useState(true)



    useEffect(()=>{
        document.getElementsByTagName('img').hidden = true
        setIsLoading(true)
    },[selectedIndex,imgList])


    useEffect(()=>{
        document.getElementsByTagName('img').hidden = true
        setPage(1)
       if(imgList.length !== 0) {document.getElementById('back').src = imgList[selectedIndex].src}
    },[city])

    useEffect( ()=> {

        if(backImage !== null)
        {
            setNewBackImage(backImage)
            console.log("useEffect to change the background Image")
        }


    },[backImage])



    return (
        <div className="App">

            {imgList.length !== 0 && newbackImage !== null && <h1><span>{city}</span> - {newbackImage.des}</h1>}
            {imgList.length !== 0 && newbackImage === null && <h1>{imgList[0].des}</h1>}
            {/*<p>{JSON.stringify(imgList)}</p>*/}
            {/*<SearchBar updateName = {updateName}/>*/}
            <SearchBarCityView
                updateImgList={updateImgList}
                updateIndex = {updateIndex}
                updateCity={updateCity}
                updatePage = {page}
                updateBackImg={updateBackImg}
                updateSendBack={sendBack}
            />
            <hr/>
            <h4
               style={{fontFamily: `'Dancing Script', cursive`}}
            >dasdasdada</h4>
            <hr/>
            {/*<Display*/}
            {/*    name = {name}*/}
            {/*    conversion = {conversion}*/}
            {/*/>*/}
            <DisplayCityView
                imgList={imgList}
                updateIndex = {updateIndex}
                updateBackImg={updateBackImg}
            />
            <Loading
                isLoading = {isLoading}
            />
            {imgList.length !== 0 && newbackImage !== null &&<img
                id = 'back'
                hidden
                style={{
                    height: '100vh',
                    width: '100vw',
                    position: 'absolute',
                    zIndex: -1,

                 }}

                onLoad = { e => {

                    e.target.hidden =false
                    setIsLoading(false)

                    }
                }
                src={newbackImage.regular} alt={newbackImage.des}/>}


            {imgList.length !== 0 && newbackImage === null &&<img
                id='back'
                hidden
                style={{
                    height: '100vh',
                    width: '100vw',
                    position: 'absolute',
                    zIndex: -1,

                }}

                onLoad = { e => {

                    e.target.hidden =false
                    setIsLoading(false)

                }
                }
                src={imgList[0].regular} alt={imgList[0].des}/>}


            {/*if imgList is an object, use !!imgList instead of imgList.length !== 0 to make sure the object is not empty*/}

            <button className="left-btn"
                onClick={()=>{
                    page > 1 && setPage(page => page - 1)
                    setSendBack(false)
                }}
            ><ImArrowLeft/></button>
            <button className="right-btn"
                onClick={()=>{
                    setSendBack(true)
                    setPage(page => page + 1)
                }}
            ><ImArrowRight/></button>
        </div>
    );
}

export default App;