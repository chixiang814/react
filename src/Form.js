import React from "react"

const Form = () => {
    return (    
        <form className="Form--Main">
            <label className="Form--Title">Username</label>
            <input                
                type="text" 
                placeholder="Enter username"
                name="userName" />
            <br />
            <br />
            <label htmlFor="password" className="Form--Title">Password</label>           
            <input 
                type="text" 
                id="password"
                placeholder="Enter password"
                name="password" />
            <label htmlFor="password" className="Form--Hint">Your password is between 4 and 12 characters</label>
            <br />
            <br />
            <label className="Form--Title">Input Text Label</label>
            <textarea 
                type="text"
                placeholder="Typing..."
            />
            <br /><br />

            <input 
                type="checkbox" 
                id="rememberMe"               
            />           
            <label htmlFor="rememberMe">Remember me</label>
            <br /><br />

            <fieldset className="Form--Fieldset">
                <legend>Your selection</legend>
                <input 
                    type="radio"
                    id="selection1"
                    name="selection"
                    value="selection1"
                />
                <label htmlFor="selection1">selection 1</label>
                <br />
                <input 
                    type="radio"
                    id="selection2"
                    name="selection"
                    value="selection2"
                />
                <label htmlFor="selection2">selection 2</label>
                <br />
                <input 
                    type="radio"
                    id="selection3"
                    name="selection"
                    value="selection3"
                />
                <label htmlFor="selection3">selection 3</label>
            </fieldset>

            <label className="Form--Title" htmlFor="favColor">What is your favourite color</label>
            <br />
            <select 
                id="favColor"
                name="favColor"
            >
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <br />
            <br />
            <button>Submit</button>
        </form>
    )
}

export default Form;