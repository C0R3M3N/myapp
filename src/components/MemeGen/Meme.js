import { useState } from "react";
import { memes } from "./memeData"

export function Meme() {

    const [trong, setHello] = useState('')
    function getmeme() {
        const memeArray = memes.memePic
        const randomNum = Math.floor(Math.random() * memeArray.length);
        setHello(memeArray[randomNum].text)
        console.log(trong)
    }
    return(
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="top text"
                    className="form--input"
                />
                <input
                    type="text"
                    placeholder="bottom text"
                    className="form--input"
                />
                <button className="form--button" onClick={getmeme}>Get Meme</button>
                <h1>{trong}</h1>
            </div>
        </main>
    )
}