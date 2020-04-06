const ADD_USER = 'Add-user'

const AddUser = (email, password) => {
    return {
        type: ADD_USER,
        email,
        password
    }
}

export default AddUser