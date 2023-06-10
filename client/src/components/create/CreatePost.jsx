import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PostSelector from './PostSelector'
import PostPreview from './PostPreview'
import PostCrop from './PostCrop'

const Container = styled.div`
    background-color: white;
    width: 100%;
    max-width:350px;
    min-height: 400px;
    border-radius:.5rem;
    box-shadow:3px 3px 5px rgba(210, 210, 210, 0.3);
    transition: all 500ms;
    display: flex;
    &.large{
        max-width: 400px;
    }
    @media screen  and (min-width:768px) {
        max-width: 400px;
        &.large{
            max-width: 600px;
        }
        
    }
    @media screen  and (min-width:900px) {
        &.large{
            max-width: 700px;

        }

        
    }
`
const CreatePost = () => {
    useEffect(()=>{
        document.title = 'Create ne post . Instagram';
      },[])
    const [files,setFiles] = useState([]);
    const [fileType,setFileType] = useState(null);
    const [index,setIndex] = useState(0);
    const [showPagination,setShowPagination] = useState(false);

    const handleFile = (e,next) =>{
        const file =e.target.files[0];
        setFileType(file.type.split('/')[0]);
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () =>{
           setFiles(prev => [...prev,{url:fileReader.result,postType:file.type.split('/')[0]}]);
           next && setIndex(1);
        }

    }
    const goBack = ()=>{
        if(index === 1){
        setFiles([]);
        setFileType(null);
        setIndex(0);
        }else{
            setIndex(1);
        }
    }
  return (
    <Container className={index === 2 && 'large'} >
        {
            index === 0 ? <PostSelector handleFile={handleFile} /> : index === 1 ?
             <PostCrop  files={files} handlePagination={setShowPagination} handleFile={handleFile} setIndex={setIndex} goBack={goBack} />: <PostPreview files={files} goBack={goBack}  />  
        }
      
    </Container>
  )
}

export default CreatePost