const initialState = []

export default (state = initialState, { type, list }) => {
    switch (type) {

    case "SEND_TO_CHECKOUT":
        return state = [...list]

    default:
        return state
    }
}
