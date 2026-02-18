import React from 'react'
import { useUerAuth } from '../../hooks/useUserAuth'

function UserDashboard() {
  useUerAuth();
  return (
    <div>UserDashboard</div>
  )
}

export default UserDashboard