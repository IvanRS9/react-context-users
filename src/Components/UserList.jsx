import React, { useContext, useEffect } from 'react'
import UserContext from '../Context/User/UserContext';
import { toast } from 'sonner';

const UserList = () => {
    const { users, getUsers, getProfile } = useContext(UserContext);

    useEffect(() => {
        getUsers();
    }, []);

    const deleteUser = async (id) => {
        const res = await fetch(`https://reqres.in/api/users/${id}`, {
            method: 'DELETE'
        });

        toast.success("User deleted successfully", {
            description: `User with id: ${id} has been deleted`
        });
    }


    return (
        <div className="list-group h-100">
            {
                users.map((user) => (
                    <a className='list-group-item list-group-item-action d-flex flex-row justify-content-start' href='#' key={user.id} onClick={() => getProfile(user.id)}>
                        <img src={user.avatar} alt="" className='img-fluid mr-4 rounded-circle' width="70" />
                        <p>
                            {
                                `${user.first_name} ${user.last_name}`
                            }

                            <button onClick={(e) => { e.stopPropagation(); deleteUser(user.id); }} className="btn btn-danger ml-2">
                                Delete
                            </button>
                        </p>
                    </a>
                ))
            }
        </div>
    )
}

export default UserList
