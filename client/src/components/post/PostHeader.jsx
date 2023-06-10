import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { MoreHoriz } from '@mui/icons-material'

const Container = styled.div`
display: flex;
padding:.5rem 0;
`
const ProfileContainer = styled.div`
flex: 1;
display: flex;
align-items: center;
gap:.5rem;
.profile{
        width: 50px;
        height: 50px;
        border-top:2px solid #FE016A;
        border-right:2px solid #D600BE;
        border-bottom:2px solid #FFC500;
        border-left:2px solid #FF3938;
    }
`
const Username= styled.h3`
font-size:.95rem;
color: #000000d8;
`
const Dot= styled.div`
padding:.1rem;
background-color: #80808092;
border-radius:50%;
`
const Time= styled.p`
font-family:'Poppins',sans-serif;
font-size:.8rem;
letter-spacing:1px;
`
const PostHeader = ({username,profilePic,date,_id}) => {
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate(`/profile/${username}`,{state:{_id}})
  }
  return (
    <Container>
      <ProfileContainer>
      <IconButton onClick={handleClick} >
        <Avatar className='profile' alt={username} src={profilePic} />
      </IconButton>
      <Username>{username}</Username>
      <Dot/>
      <Time> 2h </Time>
      </ProfileContainer>
      <IconButton> <MoreHoriz/> </IconButton>
    </Container>
  )
}

export default PostHeader