import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';

const Header = () => {


    return(
        <Container>
            <Title>
                Welcome to the Github Gist
            </Title>
            <div>
                <ImageContainer src={logo} alt="logo"/>
            </div>

        </Container>)
};

const Container = styled.div`
  display:flex;
  flex-direction:row;
  justify-content: center;
  align-items: center;
  padding: 5px;
  padding-bottom:0;
  background: grey;
`;

const ImageContainer = styled.img`
  padding: 15px;
  width: 100px;
  height:70px;
  
`;

const Title = styled.h1`
    color: white;
`;

export default Header;
