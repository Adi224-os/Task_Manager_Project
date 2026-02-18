import React, { useContext } from 'react'
import { useUerAuth } from '../../hooks/useUserAuth'
import { userContext } from '../../context/userContext';

function Dashboard() {
  useUerAuth();

  const {user} = useContext(userContext)
  return <div>Dashboard</div>
}

export default Dashboard