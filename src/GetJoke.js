import React, {useState} from 'react'

const url = "https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=racist,sexist"

function GetJoke() {

    const [currJoke, setJoke] = useState("")
    
    const joke = () => {
            fetch(url)
            .then(resp => resp.json())
            .then(json => setJoke(json))
    }

    const formatJoke = (currJoke) => {
        if (currJoke.type === "single") {
            return (
                <h2 className="single joketext">{currJoke.joke}</h2>
            )
        } else {
            return (
                <>
                    <h2 className="setup joketext">{currJoke.setup}</h2>
                    <h2 className="delivery joketext">{currJoke.delivery}</h2>
                </>
            )
        }

    }
    
    return (
        <div className='joke'>
            <button onClick={joke}>Make Me Laugh!</button>
            {formatJoke(currJoke)}
        </div>
    )
}

export default GetJoke