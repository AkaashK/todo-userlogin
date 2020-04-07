const ADD_USER = 'Add-user'

const AddUser = (data) => {
    return {
        type: ADD_USER,
        data
    }
}

export default AddUser