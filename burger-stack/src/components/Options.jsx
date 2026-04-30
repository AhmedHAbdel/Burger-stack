function Options({ onClear, onRemoveLast, onSubmit }){
    
    
    
    return (
        <div>
            <p>options</p>

            <label for="name">Name For Order: </label>
            <input value={name}></input>

            <br/>

            <button type="button" onClick={onClear}>Clear</button>
            
            <br/>
            <br/>
            
            <button type="button" onClick={onRemoveLast}>Remove Last Item</button>
            
            <br/>
            <br/>
            
            <button type="button" onClick={onSubmit}>Order</button>
        </div>
    );
}

export default Options;