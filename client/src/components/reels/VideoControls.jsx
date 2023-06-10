import React from 'react'
import styled from 'styled-components'
import { FavoriteBorderOutlined, BookmarkBorder,MoreHoriz} from '@mui/icons-material'
import { RiMessengerLine } from 'react-icons/ri';
import {FiSend} from 'react-icons/fi'
import { Avatar, IconButton } from '@mui/material';

const Container = styled.div`
    padding:.5rem .5rem .5rem 1rem;
    display: flex;
    flex-direction: column;
    gap:1rem;
    justify-content: flex-end;
`
const Control = styled.div`
display: flex;
flex-direction: column;
gap:.1rem;
align-items: center;
.profile{
    border-radius: .5rem;
    cursor: pointer;
}
.icon{
    color: #000000dd;
    font-size:1.7rem;
}
`
const ControlLabel = styled.p`
font-size:.9rem;
`
const VideoControls = ({profile,username}) => {
  return (
    <Container>
        <Control>
            <IconButton><FavoriteBorderOutlined className='icon' /></IconButton>
            <ControlLabel>42k</ControlLabel>
        </Control>
        <Control>
            <IconButton><RiMessengerLine className='icon' /></IconButton>
            <ControlLabel>333k</ControlLabel>
        </Control>
        <Control>
            <IconButton><FiSend className='icon' /></IconButton>
        </Control>
        <Control>
            <IconButton><BookmarkBorder className='icon' /></IconButton>
        </Control>
        <Control>
            <IconButton><MoreHoriz className='icon' /></IconButton>
        </Control>
        <Control>
            <Avatar className='profile' src={profile} alt={username}  />
        </Control>

    </Container>
  )
}

export default VideoControls
