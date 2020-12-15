const initialState = null;

export default (state = initialState, { type, category }) => {
    switch (type) {

    case "SEND_CATEGORY":
        return state = category;

    default:
        return state
    }
}
