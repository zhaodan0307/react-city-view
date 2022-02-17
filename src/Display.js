export const Display = ({name,conversion}) => {
    return (
        <div style={{border: 'red 2px solid',width:'400px',height: '200px'}}>
            <h3>Display Child</h3>
            <p>{name}</p>
            <button
                onClick={conversion}
            >CONVERT TO UPPERCASE</button>
        </div>
    )
}