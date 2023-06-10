import styled from '@emotion/styled'
import { Avatar, IconButton } from '@mui/material'
import React, { useState } from 'react'
import Model from '../../components/models/Model'
import PostContent from './PostContent'
import { MoreHoriz } from '@mui/icons-material'
import PostUserControl from './PostUserControl'
import PostLikesIndicator from './PostLikesIndicator'
import PostCommentInput from './PostCommentInput'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap:.5rem;
    padding:.5rem;
    &.model{
      padding:0;
        background-color: white;
        width: 100%;
        height: 98%;
        border-radius:.5rem;
        display: flex;
        flex-direction: column;
        @media screen and (min-width:768px) {
            width: 90%;
            max-width:2000px;
            flex-direction: row;
        }
    }
`
const CommentContainer = styled.div`
    display: flex;
    align-items: flex-start;
    gap:.5rem;
    &.model{
       flex: 1;
       flex-direction: column;
       padding:.5rem;
       border-bottom: 1px solid #DBDBDB;
       overflow: auto;

    }
`
const UserName = styled.h4`
color: #000000dc;
font-size: 1rem;
`
const Comment = styled.p`
font-family: 'Poppins',sans-serif;
display: flex;
gap: 1rem;
`
const MoreComments = styled.p`
color: #9a9898;
cursor: pointer;
font-family: 'Poppins',sans-serif;
&:hover{
    text-decoration: underline;
}
`
const ModelLeft = styled.div`
flex: 1;
display: flex;
max-height: 500px;
>{
    flex: 1;
}
@media screen and (min-width:768px){
    max-height: 100%;
}
`
const ModelRight = styled.div`
flex: 1;
display: flex;
height: 100%;
flex-direction: column;
`
const CommentHeader = styled.div`
display: flex;
align-items: center;
padding:.5rem;
border-bottom: 1px solid #DBDBDB;
`
const HeaderUserNameContainer = styled.div`
flex: 1;
display: flex;
align-items: center;
gap:.5rem;
`

const PostComments = ({caption,comments=[],profilePic,username,url,postType}) => {
    const lastComment = comments[comments.length - 1];
    const [showComments,setShowComments] = useState(false);
  return (
    <Container>
        {
            caption &&
        <CommentContainer>
            <UserName> {username} </UserName>
            <Comment> {caption} </Comment>
        </CommentContainer>
        }
        {
            lastComment &&
            <CommentContainer>
            <UserName> {lastComment?.username} </UserName>
            <Comment> {lastComment?.comment} </Comment>
        </CommentContainer>
        }
        {
            comments.length === 0  && <MoreComments onClick={e => setShowComments(true)} > {`view all ${comments.length} comments`} </MoreComments>
        }
        <PostCommentInput direction='end' />

       {
        showComments &&
        <Model bg='rgba(0, 0, 0, 0.274)' showClose openModel={setShowComments} center >
            <Container className='model' >
                <ModelLeft>
                    <PostContent postType={postType} url={url} model />
                </ModelLeft>
                <ModelRight>
                    <CommentHeader>
                        <HeaderUserNameContainer>
                         <Avatar src={profilePic} alt={username} className='profile' />
                            <UserName> {username} </UserName>
                        </HeaderUserNameContainer>
                        <IconButton> <MoreHoriz/> </IconButton>
                    </CommentHeader>
                    <CommentContainer className='model' >
                        <Comment>
                         <Avatar
                          src={profilePic}
                           alt={username} 
                           className='profile' />
                             {caption}
                              </Comment>
                        <Comment>
                         <Avatar
                          src={profilePic}
                           alt={username} 
                           className='profile' />
                             {caption}
                              </Comment>
                     </CommentContainer>
                     <PostUserControl/>
                     <PostLikesIndicator likes='1,700' />
                     <PostCommentInput direction='start' />
                </ModelRight>
            </Container>
        </Model>
        }
        
    </Container>
  )
}

export default PostComments
