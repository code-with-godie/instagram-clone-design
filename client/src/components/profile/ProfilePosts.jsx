import React from 'react'
import styled from 'styled-components'
import PostControllers from './PostControllers'
import Posts from './Posts'
import {posts} from '../../data/data'
const Container = styled.div`
`
const ProfilePosts = ({userID}) => {
  const usersPosts = posts.filter(posts => posts.user === userID);
  return (
    <Container>
      <PostControllers/>
      <Posts posts={usersPosts} />
    </Container>
  )
}

export default ProfilePosts