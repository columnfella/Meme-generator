import {useState, useEffect} from 'react';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

export default function Main() {
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })
    const [memeImgs, setMemeImgs] = useState()
    
    useEffect(()=>(
        fetch("https://api.imgflip.com/get_memes")
            .then(res=>res.json())
            .then(data=>setMemeImgs(data.data.memes))
    ), [])

    function handleGenerateNewMemeImage() {
        setMeme(prevMeme => ({
            ...prevMeme,
            imageUrl: memeImgs[getRandomInt(0, memeImgs.length)].url
        }))
    }

    function handleOnChange(event) {
        const {value, name} = event.currentTarget;
        console.log(value);
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <label>Top Text:
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleOnChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text:
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleOnChange}
                        value={meme.bottomText}
                    />
                </label>
                <button onClick={handleGenerateNewMemeImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}