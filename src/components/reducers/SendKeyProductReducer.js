const initialState = null

export default (state = initialState, { type, keyProduct }) => {
    switch (type) {

    case "SEND_KEY":
        return state = keyProduct

    default:
        return state
    }
}
