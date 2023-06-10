import React from 'react'
import styled from 'styled-components'
import ProfileHeader from '../../components/profile/ProfileHeader'
import Sidenav from '../../components/nav/Sidenav'
import ProfileDescription from '../../components/profile/ProfileDescription'
import ProfilePosts from '../../components/profile/ProfilePosts'
import { useLocation } from 'react-router-dom';
import {users} from '../../data/data'


const Container = styled.section`
height: 100%;
overflow: auto;
display: flex;
`
const Left = styled.article`
border-right:1px solid #DBDBDB;
padding:.5rem;
display: none;
@media screen and (min-width:768px) {
  display: flex;

}
@media screen  and (min-width: 1300px){
  flex: 1;
  }  
`
const Right = styled.article`
padding:.5rem;
flex: 4;
overflow: auto;
`
const Profile = () => {
  const {state:{_id:userID}} = useLocation();
  const user = users.find(item => item._id === userID);
  return (
    <Container>
      <Left>
        <Sidenav  />
      </Left>
      <Right>
        <ProfileHeader/>
        <ProfileDescription user={user} />
        <ProfilePosts userID={userID} />
      </Right>
    </Container>
  )
}

export default Profile