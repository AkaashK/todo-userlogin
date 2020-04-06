const reducer = (state = [], action) => {
    switch (action.type) {
        case 'Add_user':
            return [
                ...state,
                {
                    email: action.email,
                    password: action.password
                }
            ]
        default: return state
    }
}

export default reducer