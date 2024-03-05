import { useState } from "react"

export function Side() {

    const [ThingArray, SetThing] = useState(['thing1', 'thing2'])
    function handleOnclick() {
        const newThing = `Thing ${ThingArray.length + 1}`
        SetThing(prevState => [...prevState, newThing])
    }
    const ThingElements = ThingArray.map(thing => <p key={thing}>{thing}</p>)

    return(
        <div className="side">
            <button onClick={handleOnclick}>Add thing</button>
            {ThingElements}
        </div>
    )
}