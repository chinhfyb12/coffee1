const initialState = {
    showMenu: false
}

const menuReducer = (state = initialState, { type }) => {
    switch (type) {
        case "CHANGE_STATUS_MENU":
            return { ...state, showMenu: !state.showMenu }

    default:
        return state
    }
}

export default menuReducer;