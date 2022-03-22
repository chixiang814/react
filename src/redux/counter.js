//Action type
const add = _ => ({type: "add"})
const minus = _ => ({type: "minus"})

//Reducer
const counterReducer = (count = 0, action) => {
    switch(action.type) {
        case "add":
            return count + 1;
        case "minus":
            return count -1;
        default:
            return count
    }
}

export {add , minus}
export default counterReducer