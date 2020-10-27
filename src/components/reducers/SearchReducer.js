const initialState = false;

const statusSearchForm = (state = initialState, { type }) => {
    switch (type) {
        case "STATUS_FORM":
            return !state

        default:
            return state
    }
}

export default statusSearchForm;