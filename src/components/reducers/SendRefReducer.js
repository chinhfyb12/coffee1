const initialState = null;

export default (state = initialState, { type, ref }) => {
    switch (type) {

    case "SEND_REF":
        return state = ref;

    default:
        return state
    }
}
