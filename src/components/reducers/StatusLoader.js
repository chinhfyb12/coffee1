const initialState = false

export default (state = initialState, { type, status }) => {
    switch (type) {

    case "STATUS_LOADER":
        return state = status

    default:
        return state
    }
}
