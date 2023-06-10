import React from 'react'
import styled from 'styled-components'
import {FaEdit} from 'react-icons/fa'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import Room from './Room'
import { useAppContext } from '../../context/AppContext'
const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: auto;
    gap:.5rem;
    .icon{
        font-size: 1.5rem;
        color: #000000ce;
        cursor: pointer;
        
    }
    `
const HeaderContainer = styled.div`
    display: flex;
    `
const   TitleContaineer = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap:.3rem;
flex: 1;
`
const Title  = styled.h3`
color: #000000ce;
font-family: 'Poppins',sans-serif;
font-size:1rem;
`
const RoomControlContainer = styled.div`
display: flex;
border-top: 1px solid #DBDBDB;
border-bottom: 1px solid #DBDBDB;
overflow: auto;

`
const RoomControl = styled.p`
padding:1rem;
text-transform: capitalize;
color: #000000ce;
cursor: pointer;
&.active{
border-bottom: 1px solid black;
}
`
const RoomsContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap:.5rem;
`
const ChatRooms = ({changeConversation}) => {
    const {user:{username}} = useAppContext()
  return (
    <Container>
        <HeaderContainer>
            <AiOutlineArrowLeft className='icon back'  />
            <TitleContaineer>
                <Title> {username} </Title>
                <MdOutlineKeyboardArrowDown className='icon'/>
            </TitleContaineer>
            <FaEdit className='icon' />
        </HeaderContainer>
        <RoomControlContainer>
            <RoomControl className='active' >primary</RoomControl>
            <RoomControl>general</RoomControl>
        </RoomControlContainer>
        <RoomsContainer>
            <Room changeConversation= {changeConversation} username='code_with_godie'  />
            <Room changeConversation= {changeConversation} username='val_bobo'  />
            <Room changeConversation= {changeConversation} username='allan_254'  />
            <Room changeConversation= {changeConversation} username='eddie_kb'  />
            <Room changeConversation= {changeConversation} username='poly'  />
        </RoomsContainer>
    </Container>
  )
}

export default ChatRooms