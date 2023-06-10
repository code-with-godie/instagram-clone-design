import React, { useState } from 'react'
import styled from 'styled-components'
import emoji from '../../assets/emoji.svg';

const Container = styled.div`
    display: flex;
    padding:.5rem;
    gap: .5rem;
    &.border{
   border-top: 1px solid #DBDBDB;
    }
`
const Input = styled.input`
flex: 1;
background: transparent;
outline: none;
padding:.2rem;
font-family: 'Poppins',sans-serif;
border: none;

`
const Emoji = styled.img`
width: 20px;
height: 20px;
color: gray;
cursor: pointer;
object-fit: contain;
`
const Send = styled.button`
text-transform: capitalize;
color: #1db9dc;
cursor: pointer;
outline: none;
border: none;
background: transparent;
font-size: .9rem;
font-weight: 600;
`
const PostCommentInput = ({direction}) => {
    const [comment,setComment] = useState('');
  return (
    <Container className={direction === 'start' && 'border'} >
        {
            direction === 'start' &&
        <Emoji src={emoji}/>
        }
        <Input 
        placeholder='Add a comment...' 
        value={comment}
        onChange={e => setComment(e.target.value)}
        />
        {
            direction === 'end' &&
        <Emoji src={emoji}/>
        }
        {
            comment &&
            <Send>post</Send>

        }
    </Container>
  )
}

export default PostCommentInput
