import React, { useEffect } from 'react'
import { fetchUsers } from '../redux/user/userActions'
import { useSelector, useDispatch } from 'react-redux'

function UserContainer() {
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return users.loading ? (
    <h2>Loading...</h2>
  ) : users.error ? (
    <h2>{users.error}</h2>
  ) : (
    <div>
      <h2>Users List</h2>
      <div>
        {users.users.map((user) => (
          <p>{user.name}</p>
        ))}
      </div>
    </div>
  )
}

export default UserContainer
