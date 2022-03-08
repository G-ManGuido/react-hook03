import React, { useState } from 'react'
import './whiteBlack.css';
const White = () => {
    const [isWhite, setWhite] = useState(true)

    const white = () => setWhite(!isWhite)
    return (
        <div className={`whiteItem ${isWhite ? "white" : "black"}`}>
            <h1>{isWhite ? "White" : "Black"}</h1>
            <button onClick={white}>Change to: {isWhite ? "Black" : "White"}</button>
        </div >
    )

}

export default White