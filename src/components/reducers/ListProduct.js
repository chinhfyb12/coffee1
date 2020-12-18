const initialState = [];

export default (state = initialState, { type, product, productUpdate }) => {
    switch (type) {
        case "SEND_LIST_PRODUCT":
            let index = state.findIndex((item) => item.keyProduct === product.keyProduct);
            if(index >= 0) {
                state[index].quantity += product.quantity
                return state
            } else {
                return [
                    ...state,
                    product
                ]
            }
        case "UPDATE_LIST_PRODUCT":
            return [...productUpdate]
        default:
            return state
    }
}
