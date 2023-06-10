import React from 'react'
import styled from 'styled-components'
import Post from '../post/Post';
import {posts} from '../../data/data'
import Followings from './Followings';
const Wrapper = styled.div`
    flex: 1;
    overflow: auto;
    width: 100%;
    max-width: 600px;
`
const Container = styled.div`
    width: 100%;
    max-width: 500px;
    margin:0 auto;
`
const Feeds = () => {
  return (
    <Wrapper>
      <Followings/>
    <Container>
      {
        posts.map(post => <Post key={post.id} {...post} />)
      }
        
    </Container>
    </Wrapper>
  )
}

export default Feeds