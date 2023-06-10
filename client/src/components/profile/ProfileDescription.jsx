import { KeyboardArrowDown, MoreHoriz, PersonAdd } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'
import { useAppContext } from '../../context/AppContext'

const Container = styled.div`
  padding:.5rem;
  display: flex;
  align-items: center;
  gap:1rem;
`
const AvatarContainer = styled.div`
.avator{
  width: 100px;
  height: 100px;
  border-top:2px solid #FE016A;
  border-right:2px solid #D600BE;
  border-bottom:2px solid #FFC500;
  border-left:2px solid #FF3938;
}
@media screen  and (min-width:768px){
  flex: 1.3;
  display: flex;
  align-items: center;
  justify-content: center;
  .avator{
    width: 150px;
    height: 150px;
  }
  
}
`
const DescriptionContainer = styled.div`
flex: 2;
display: flex;
flex-direction: column;
gap:.5rem;
@media screen  and (min-width:768px){
  flex-direction: row;
  gap:.5rem;
  .hide{
    display: none;
  }
  & > :nth-child(2){
    flex:1;
    justify-content: flex-start;
    gap:.5rem;
  }
  
}
`
const UsernameContainer = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
gap: 1rem;
max-width: 300px;
`
const Username = styled.h3`
text-transform: capitalize;
`
const ControlsContainer= styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
gap:1rem;
max-width: 400px;
.hidden{
  display: none;
}
@media screen  and (min-width:768px){
  .hidden{
    display: block;
  }

}
`
const Control = styled.button`
border: none;
padding: 0.5rem;
display: flex;
align-items: center;
justify-content: center;
gap:.3rem;
text-transform: capitalize;
border-radius:.5rem;
background: #DBDBDB;
cursor: pointer;
&:hover{
  
  background: #b0b0b0;
}
`
const ProfileDescription = ({user:{_id:userID,name,profilePic}}) => {
  const [following,setFollowing] = useState(false);
  const {user:{_id:loggedInUserID}} = useAppContext()
  const mine=  loggedInUserID === userID;
  return (
    <Container>
      <AvatarContainer>
        <Avatar className='avator' alt={name} src={profilePic} />
      </AvatarContainer>
      <DescriptionContainer>
        <UsernameContainer>
          <Username> {name} </Username>
          <IconButton className='hide' >
            <MoreHoriz/>
          </IconButton>
        </UsernameContainer>
        <ControlsContainer>
          <Control>following <KeyboardArrowDown/> </Control>
          <Control>Message</Control>
          <Control><PersonAdd/></Control>
          <Control className='show hidden' ><MoreHoriz/></Control>
        </ControlsContainer>
      </DescriptionContainer>
    </Container>
  )
}

export default ProfileDescription