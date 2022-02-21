
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




    useEffect(()=>{
        document.getElementsByTagName('img').hidden = true
        setIsLoading(true)
    },[selectedIndex,imgList])

    useEffect(()=>{
        setPage(1)
    },[city])


    return (
        <div className="App">

            {imgList.length !== 0 && <h1>{imgList[selectedIndex].des}</h1>}
            {/*<p>{JSON.stringify(imgList)}</p>*/}
            {/*<SearchBar updateName = {updateName}/>*/}
            <SearchBarCityView
                updateImgList={updateImgList}
                updateIndex = {updateIndex}
                updateCity={updateCity}
                updatePage = {page}
            />
            <hr/>

            <hr/>
            {/*<Display*/}
            {/*    name = {name}*/}
            {/*    conversion = {conversion}*/}
            {/*/>*/}
            <DisplayCityView
                imgList={imgList}
                updateIndex = {updateIndex}
            />
            <Loading
                isLoading = {isLoading}
            />
            {imgList.length !== 0 && <img

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
                src={imgList[selectedIndex].regular} alt={imgList[selectedIndex].des}/>}
            {/*if imgList is an object, use !!imgList instead of imgList.length !== 0 to make sure the object is not empty*/}

            <button className="left-btn"
                onClick={()=>{
                    page > 1 && setPage(page => page - 1)
                }}
            ><ImArrowLeft/></button>
            <button className="right-btn"
                onClick={()=>{
                    setPage(page => page + 1)
                }}
            ><ImArrowRight/></button>
        </div>
    );
}

export default App;