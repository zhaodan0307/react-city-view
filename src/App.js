// CityView Project using React (useeffect, usestate)



import './App.css';
import {SearchBar} from "./SearchBar";
import {Display} from "./Display";
import {useState} from "react";
import {SearchBarCityView} from "./SearchBarCityView";
import {DisplayCityView} from "./DisplayCityView";

function App() {
    const [name , setName] = useState(null)
    //create a function to accept the value from child and set state(setName)

    //create a state tp store the results fetched by child
    const [imgList, setImgList] = useState([])

    const updateImgList = value => setImgList(value)


    const updateName = (value)=>{
        console.log(value)
        setName(value)
    }
    const conversion = () =>{
        setName(name => name.toUpperCase())
    }



    return (
        <div className="App">
            <h1>Parent</h1>
            <p>{name}</p>
            {/*<p>{JSON.stringify(imgList)}</p>*/}
            {/*<SearchBar updateName = {updateName}/>*/}
            <SearchBarCityView
                updateName = {updateName}
                updateImgList = {updateImgList}
            />
            <hr/>
            <hr/>
            {/*<Display*/}
            {/*    name = {name}*/}
            {/*    conversion={conversion}*/}
            {/*/>*/}
            <DisplayCityView
                name = {name}
                conversion={conversion}
            />
            {imgList.length !==0 && <img
                style={{height:'100vh',
                    width: '100vw',
                    position: 'absolute',
                    zIndex: -1
                }}
                src={imgList[0].urls.regular} alt=""/>}

            {/*if imgList is an object ,use !!imgList instead of imgList.length!==0*/}
        </div>
    );
}

export default App;