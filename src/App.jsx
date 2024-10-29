import React from 'react'
import UserList from './Components/UserList'
import Profile from './Components/Profile'
import UserState from './Context/User/UserState'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Components/Form';
import { Toaster } from 'sonner';

const App = () => {
  return (
    <UserState>
      <div className="container">
        <h1>React Context</h1>
        <Form />
        <div className="row mt-4 mb-4">
          <div className="col-md-7">
            <UserList />
          </div>
          <div className="col-md-5">
            <Profile />
          </div>
        </div>
      </div>
      <Toaster />
    </UserState>
  )
}

export default App
