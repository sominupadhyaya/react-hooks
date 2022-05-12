import React from 'react'
import useResources from './useResources'


const UserList = ({resource}) =>{
  const users = useResources(resource)
  return (
  <ul>
    {users.map(user => <li key={user.id}>{user.name}</li>)}
  </ul>
  )
}


export default UserList