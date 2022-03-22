//Action 
const setName = (name) => ({
    type: "setName",
    payload: name
})

//Reducer
const detailsReducer = (state={}, action) => {
    switch(action.type) {
        case "setName": 
            return {...state, name: action.payload}
        default:
            return state;
    }
}

export {setName};
export default detailsReducer;