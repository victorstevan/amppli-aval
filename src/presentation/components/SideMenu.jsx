import { faHome, faTools } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButton } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components'




const StyledSideMenu = styled.div`
background-color: #D2D3D5;
width: 80px;
height: calc(100% - 80px);
position:absolute;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding-top: 10px;
padding-bottom: 10px; 
`;


export const SideMenu = () => {
  return (
    <StyledSideMenu>
      <IconButton  style={{backgroundColor: '#fec51b', }}>
      <FontAwesomeIcon  icon={faTools} color='white' />
      </IconButton>
      <IconButton style={{backgroundColor: '#0e478c'}}>
      <FontAwesomeIcon icon={faHome} color='white' />
      </IconButton>
    </StyledSideMenu>
  )
}
