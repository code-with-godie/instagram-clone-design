import React from 'react'
import styled from 'styled-components'
import PostHeader from './PostHeader'
import PostCaption from './PostCaption'
import PostCollection from '../post/PostCollection'

const Wrapper = styled.div`
flex: 1;
display: flex;
flex-direction: column;
`
const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    @media screen and (min-width:768px) {
        flex-direction: row;
        
    }
`
const ImageContainer = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
background: #000000ce;
`
const Image = styled.img`
max-width: 100%;
height: auto;
max-height: 250px;
object-fit: contain;
@media screen and (min-width:768px) {
        max-height: none; 
    }
`
const CaptionContainer = styled.div`
flex: 1;
display: flex;
`
const PostPreview = ({files,goBack}) => {
  return (
    <Wrapper>
        <PostHeader goBack={goBack} title='Create new post'/>
    <Container>
        <ImageContainer>
            {/* <Image src={file}/> */}
            <PostCollection related={files}/>
        </ImageContainer>
        <CaptionContainer>
            <PostCaption/>
        </CaptionContainer>
    </Container>
    </Wrapper>
  )
}

export default PostPreview