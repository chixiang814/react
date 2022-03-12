import React from "react"

const Form = () => {
    const [formData, setFormData] = React.useState({
        username: "",
        password: "",
        text: "",
        rememberMe: true,
        selection: "",
        favColor: "",
    })

    const changeHandler = (event) => {
        //console.log(event.target.value)
        const {name, value, checked, type} = event.target;
        setFormData((oldData) => {
            return {...oldData,
                [name] : type === "checkbox" ? checked : value,        
            };
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    }

    return (    
        <form className="Form--Main" onSubmit={handleSubmit}>
            <label className="Form--Title">Username</label>
            <input                
                type="text" 
                placeholder="Enter username"
                id="username"
                name="username"
                value={formData.username}
                onChange={changeHandler}/>
            <br />
            <br />
            <label htmlFor="password" className="Form--Title">Password</label>           
            <input 
                type="password" 
                id="password"
                placeholder="Enter password"
                name="password"
                value={formData.password}
                onChange={changeHandler} />
            <label htmlFor="password" className="Form--Hint">Your password is between 4 and 12 characters</label>
            <br />
            <br />
            <label className="Form--Title">Input Text Label</label>
            <textarea 
                type="text"
                placeholder="Typing..."
                id="text"
                name="text"
                value={formData.text}
                onChange={changeHandler}
            />
            <br /><br />

            <input 
                type="checkbox" 
                id="rememberMe"    
                name="rememberMe" 
                checked={formData.rememberMe}
                onChange={changeHandler}          
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
                    checked = {formData.selection === "selection1"}
                    onChange={changeHandler}
                />
                <label htmlFor="selection1">selection 1</label>
                <br />
                <input 
                    type="radio"
                    id="selection2"
                    name="selection"
                    value="selection2"
                    checked = {formData.selection === "selection2"}
                    onChange={changeHandler}
                />
                <label htmlFor="selection2">selection 2</label>
                <br />
                <input 
                    type="radio"
                    id="selection3"
                    name="selection"
                    value="selection3"
                    checked = {formData.selection === "selection3"}
                    onChange={changeHandler}
                />
                <label htmlFor="selection3">selection 3</label>
            </fieldset>

            <label className="Form--Title" htmlFor="favColor">What is your favourite color</label>
            <br />
            <select 
                id="favColor"
                name="favColor"
                value = {formData.favColor}
                onChange={changeHandler}
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