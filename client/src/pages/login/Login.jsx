import React, { useState } from 'react'
import styled from 'styled-components'
import FormInput from '../../components/utility/FormInput'

const Container = styled.form`
width: 80%;
max-width: 400px;
display: flex;
flex-direction: column;
gap:.5rem;
`

const Button = styled.button`
padding:.7rem;
border-radius:.5rem;
background-color: #4CB5F9;
color: white;
font-weight: 600;
font-size:1rem;
outline: none;
border: none;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
&:disabled{
  background-color: #d0d0d0;
}
`
const Login = () => {
  const [login,setLogin] = useState({email:'',password:''});
  const disabled = !login.email || login.password.length < 8;

  const handleSubmit = e => {
    e.preventDefault();

  }

  const handleChange = e =>{
    const name  = e.target.name;
    const value  = e.target.value;
    setLogin(prev => ({...prev,[name]:value}))
  }
  return (
    <Container onSubmit={handleSubmit} >
      <FormInput 
      placeholder='Mobile number or email address'
      name='email'
      type='email'
      value={login.email}
      required={true}
      handlChange={handleChange}
       />
      <FormInput 
      placeholder='password'
      name='password'
      type='password'
      value={login.password}
      required={true}
      handlChange={handleChange}
       />
       <Button disabled={disabled} > sign in</Button>
    </Container>
  )
}

export default Login