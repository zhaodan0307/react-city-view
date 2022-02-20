import './DisplayCityView.scss'

export const DisplayCityView = ({imgList, updateIndex}) => {
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