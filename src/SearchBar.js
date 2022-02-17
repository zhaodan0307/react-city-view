import {useState} from "react";

export const SearchBar = ({updateName}) => {
    //2015 new feature
    const [name,setName] = useState(null)


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
                type="text"/>
            <h3>Input Child</h3>
            <p>{name}</p>
        </div>
    )
}