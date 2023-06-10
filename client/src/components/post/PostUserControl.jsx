import { FavoriteBorder, FavoriteOutlined } from '@mui/icons-material'
import { IconButton, Tooltip } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { BiMessageRounded } from 'react-icons/bi';
import { FiSend } from 'react-icons/fi';
import { BsBookmark } from 'react-icons/bs';

const Container = styled.div`
display: flex;
align-items: center;
padding: 1rem;
.icon{
  font-size:1.5rem;
  cursor: pointer;
  :hover{
    opacity:.7;
  }
}
`
const IconContainer = styled.div`
flex: 1;
display: flex;
gap:1rem;
align-items: center;

`
const PostUserControl = () => {
  return (
    <Container>
      <IconContainer>
        <Tooltip  title='like' >
        <FavoriteBorder className='icon'  /> 
        </Tooltip>
        <Tooltip title='Comment' >
        <BiMessageRounded className='icon'  />
        </Tooltip>
        <Tooltip title='Share post' >
        <FiSend className='icon'  /> 
        </Tooltip>
      </IconContainer>
        <Tooltip title='save' >
       <BsBookmark className='icon'  />
        </Tooltip>
    </Container>
  )
}

export default PostUserControl