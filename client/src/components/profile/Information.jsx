import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
 border-top:1px solid #DBDBDB;
 padding:.5rem;
 display: flex;
 justify-content: space-evenly;
 align-items: center;
`
const  Controller = styled.div`
    display: flex;
    flex-direction:  column;
    gap:.3rem;
`
const  ControllerTitle = styled.h4`
`
const  ControllerLabel = styled.p`
`
const Information = () => {
  return (
    <Container>
        <Controller>
            <ControllerTitle>128</ControllerTitle>
            <ControllerLabel>posts</ControllerLabel>
        </Controller>
        <Controller>
            <ControllerTitle>1055</ControllerTitle>
            <ControllerLabel>followers</ControllerLabel>
        </Controller>
        <Controller>
            <ControllerTitle>1050</ControllerTitle>
            <ControllerLabel>following</ControllerLabel>
        </Controller>
    </Container>
  )
}

export default Information