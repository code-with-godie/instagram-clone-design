import React from 'react'
import styled from 'styled-components'
import PostHeader from './PostHeader'
import PostContent from './PostContent'
import {users} from '../../data/data'
import PostUserControl from './PostUserControl'
import PostLikesIndicator from './PostLikesIndicator'
import PostComments from './PostComments'
const Container = styled.div`
border-bottom: 1px solid #DBDBDB;
`
const Post = ({url,date,profilePic,id,postType,user,related}) => {
  const postUser = users.find(item => item._id === user);

  return (
    <Container>
        <PostHeader _id={postUser?._id} date={date} username={postUser?.username} profilePic= {postUser?.profilePic} />
        <PostContent url={url} postType={postType} related={related} />
        <PostUserControl/>
        <PostLikesIndicator likes={`1,703`} />
        <PostComments 
        profilePic={profilePic} 
        username={postUser?.username} 
        caption='this is my first post'
        postType ={postType}
        url={url}
         />
    </Container>
  )
}

export default Post