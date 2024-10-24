// definicion del estado

import React, { useReducer } from 'react'
import UserReducer from './UserReducer'
import axios from 'axios';
import UserContext from './UserContext';

const UserState = (props) => {
    const initialState = {
        users: [],
        selectedUser: null
    }

    // definir el reducer y dispatch
    const [state, dispatch] = useReducer(UserReducer, initialState);

    const getUsers = async () => {
        const res = await axios.get('https://reqres.in/api/users');
        console.log(res.data.data);
        dispatch({
            type: "GET_USERS",
            payload: res.data.data
        })
    }

    const getProfile = async (id) => {
        const res = await axios.get('https://reqres.in/api/users/' + id);
        console.log(res.data.data);
        dispatch({
            type: "GET_PROFILE",
            payload: res.data.data
        })
    }

    return (
        // Todos los componentes que estén dentro del UserContext.Provider tendrán acceso al estado y funciones
        <UserContext.Provider value={{
            users: state.users,
            selectedUser: state.selectedUser,
            getUsers,
            getProfile
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState

