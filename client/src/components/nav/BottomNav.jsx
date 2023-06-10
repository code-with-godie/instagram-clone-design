import { Home } from '@mui/icons-material'
import { RiMessengerLine } from 'react-icons/ri';
import { MdOutlineExplore } from 'react-icons/md';
import { CgAddR } from 'react-icons/cg';
import { AiOutlinePlaySquare } from 'react-icons/ai';
import {Link, useNavigate} from 'react-router-dom'

import React, { useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { Avatar } from '@mui/material';
import { useAppContext } from '../../context/AppContext';
import Model from '../models/Model';
import CreatePost from '../create/CreatePost';
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
const Container = styled.ul`
    padding:.5rem;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-top: 1px solid #DBDBDB;
    width: 100%;
    max-width:600px;
    .icon{
        font-size: 1.9rem;
        color: #000000df;
        transition: all 100ms;
        cursor: pointer;
        :hover{
            transform: scale(1.1);
        }
    }
    .avator{
        width: 30px;
        height: 30px;
    }
    .link{
        text-decoration: none;
        cursor: pointer;
    }
    @media screen  and (min-width: 768px){
        display: none;
  }
    
`
const BottomNav = ({openModel}) => {
    const {user:{username,profilePic,_id}} = useAppContext();
  const [showModel,setShowModel] = useState(false);

    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate(`/profile/${username}`,{state:{_id}})
    }
  return (
    <Container >
        <Link className='link' to='/' >
            <Home className='icon' />
        </Link >
        <Link className='link' >
            <MdOutlineExplore className='icon' />
        </Link >
        <Link className='link' to='/reels' >
            <AiOutlinePlaySquare className='icon' />
        </Link >
        <div className='link' onClick={e => setShowModel(true)} >
            <CgAddR className='icon' />
        </div >
        <Link className='link' to='/direct/inbox' >
            <RiMessengerLine className='icon' />
        </Link >
        <div className='link' onClick={handleClick} >
            <Avatar className='avator' alt={username}  src={profilePic} />
        </div>
        {
        showModel &&  
        <Model bg='rgba(0, 0, 0, 0.444)' showClose openModel={setShowModel} center >
          <CreatePost/>
        </Model>
    }
    </Container>
  )
}

export default BottomNav