import { useState } from "react";

function Options({ burger, onClear, onRemoveLast, onSubmit }){
    
    const [name, setName] = useState("")
    
    function onInput(event){
        let copiedName = event.target.value;

        setName(copiedName);
    }

    return (
        <div>
            <p>options</p>

            <label for="name">Name For Order: </label>
            <input value={name} onChange={onInput}></input>

            <br/>

            <button type="button" onClick={onClear}>Clear</button>
            
            <br/>
            <br/>
            
            <button type="button" onClick={onRemoveLast}>Remove Last Item</button>
            
            <br/>
            <br/>
            
            <button type="button" onClick={() => onSubmit(name)}>Order</button>
        </div>
    );
}

export default Options;