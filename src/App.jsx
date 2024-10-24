import React from 'react'
import UserList from './Components/UserList'
import Profile from './Components/Profile'
import UserState from './Context/User/UserState'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <UserState>
      <div className="container">
        <h1>React Context</h1>
        <div className="row">
          <div className="col-md-7">
            <UserList />
          </div>
          <div className="col-md-5">
            <Profile />
          </div>
        </div>
      </div>
    </UserState>
  )
}

export default App
