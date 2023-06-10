import { Avatar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {followings} from '../../data/data'
const Wrapper = styled.div`
    padding: 1rem 0;
    overflow: auto;
    width: 100%;
    ::-webkit-scrollbar {
      display: none;
    }
`
const Container = styled.div`
    display: flex;
    padding:.5rem;
    gap:.5rem;
    align-items: center;
    .link{
        display: flex;
       flex-direction: column;
    gap:.3rem;
    align-items: center;
    text-decoration: none;
    .profile{
        width: 60px;
        height: 60px;
        border-top:2px solid #FE016A;
        border-right:2px solid #D600BE;
        border-bottom:2px solid #FFC500;
        border-left:2px solid #FF3938;
    }
    }
   
`
const FollowingLabel = styled.p`
color: #000000d2 !important;
font-size:.8rem;
letter-spacing:.5px;
`
const Followings = () => {
  return (
    <Wrapper>


    <Container>
        {
            followings.map(following =>{
                const {url,name,id} = following;
                return(
                    <Link className='link' key={id} >
                    <Avatar className='profile' alt={name} src={url} />
                    <FollowingLabel> {name} </FollowingLabel>
                    </Link>
                )
            })
        }
    
    </Container>
        </Wrapper>
  )
}

export default Followings