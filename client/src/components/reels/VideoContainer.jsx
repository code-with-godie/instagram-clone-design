import React from 'react'
import styled from 'styled-components'
import VideoPlayer from './VideoPlayer'
import VideoControls from './VideoControls'
import {users} from '../../data/data'

const Container = styled.div`
    width: 100%;
    max-width: 450px;
    flex: 0 0 96%;
    display: flex;
`
const VideoContainer = ({profilePic,url,user,videoRef}) => {
  const postUser = users.find(item => item._id === user);
  return (
    <Container>
        <VideoPlayer  url={url} user={postUser} videoRef={videoRef} />
        <VideoControls profile={postUser?.profilePic} />
    </Container>
  )
}

export default VideoContainer