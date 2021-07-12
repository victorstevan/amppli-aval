import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButton } from '@material-ui/core';
import { faBars, faTools, faPlus, faFileExcel, faUser } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { ModalForm } from './ModalForm';
import {Download }from './DownloadExcel';
import { Context } from '../../state/Store';


const StyledHeader = styled.header`
height: 60px;
width: 100%;
background-color: #0e478c;
display: flex;
align-items: center;
justify-content: start;
padding-left: 10px;
padding-right: 10px;
flex: 1;
`;



const CustomButton = styled.div`
margin-top: 20px;
justify-self: center;
width: 70px;
height: 70px;
background-color: #fec51b;
border: 0px;
margin-right: 10px;
display: flex;
justify-content: center;
`;


export const Header = ({onClick, content}) => {



  return (

    <StyledHeader>

      <IconButton style={{ marginRight: '50px' }} >
        <FontAwesomeIcon icon={faBars} color='white' />
      </IconButton>


      <CustomButton>
        <IconButton style={{ backgroundColor: 'transparent' }} >
          <FontAwesomeIcon icon={faTools} color='white' />
        </IconButton>
      </CustomButton>
      <ModalForm onClick={onClick} content={content}/>
      
      <Download></Download>



      <IconButton style={{ marginLeft: 'auto', marginRight: '30px', backgroundColor: 'white'}}>
        <FontAwesomeIcon icon={faUser} color='#0e478c' />
      </IconButton>

    </StyledHeader>


  )
}
