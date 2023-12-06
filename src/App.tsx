import { useEffect, useState } from 'react'
import './App.css'
import IUser from './types/IUser'
import api from './api/api'


function App() {

  const [users, setUsers] = useState<IUser[]>([]);


  useEffect(() => {
    console.log(users);
    const getAllUsers = async () => {
      if(localStorage.getItem('token')){
        const usersFromServer = await api.getUsers();
        setUsers(usersFromServer);
      }
    }
    getAllUsers();
  }, [localStorage.getItem('token')])

  

  return (
    <>
    <button onClick={api.logout}>
      Logout
    </button>
      {/* <ul>
        {users.map((user) => (
          <li key={user.username}></li>
        ))}
      </ul> */}
      </>
    );
}

export default App
