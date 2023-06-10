import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import styled from 'styled-components'
import { useAppContext } from '../../context/AppContext'
const Container = styled.main`
  height: 100vh;
  overflow: auto;
`
const ProtectedLayout = () => {
  const{ user} = useAppContext();
  return (
    <Container>
      {
        user ? <Outlet/> : <Navigate to='/login' />
      }
    </Container>
  )
}

export default ProtectedLayout