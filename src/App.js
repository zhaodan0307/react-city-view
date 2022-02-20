
import './App.css';
import {SearchBar} from "./SearchBar";
import {Display} from "./Display";
import {useState} from "react";
import {SearchBarCityView} from "./SearchBarCityView";
import {DisplayCityView} from "./DisplayCityView";

function App() {
    //create a state to store the selected index from child
    const [selectedIndex, setSelectedIndex] = useState(0)
    const updateIndex = value => setSelectedIndex(value)


    //create a state to store the results fetched by child
    const [imgList, setImgList] = useState([])
    const updateImgList = value => setImgList(value)

    return (
        <div className="App">
            {imgList.length !== 0 && <h1>{imgList[selectedIndex].des}</h1>}
            {/*<p>{JSON.stringify(imgList)}</p>*/}
            {/*<SearchBar updateName = {updateName}/>*/}
            <SearchBarCityView
                updateImgList={updateImgList}
                updateIndex = {updateIndex}
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
            {imgList.length !== 0 && <img
                style={{
                    height: '100vh',
                    width: '100vw',
                    position: 'absolute',
                    zIndex: -1,
                }}

                src={imgList[selectedIndex].regular} alt={imgList[selectedIndex].des}/>}
            {/*if imgList is an object, use !!imgList instead of imgList.length !== 0 to make sure the object is not empty*/}

        </div>
    );
}

export default App;