import React, {Component} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from 'styled-components';
import background from '../assets/background.jpeg'
import HomeService from "../services/HomeServices";
import GistsElement from "../components/GistsElement";


class Home extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            gists: []
        };
    }

    handleInput = event => {
        const { value } = event.target;
        this.setState({
            username: value
        });
    };

    onClick = event => {
        HomeService.getGists(this.state.username).then((res) =>
            this.setState({gists: res.data}
            )
        );

    }


    render() {
        return (
            <Background >

                <Header/>
                <Container >
                    <Subtitle>
                        Please insert an username
                    </Subtitle>
                    <div>
                        <InputContainer>
                            <Input
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                autoComplete="string"
                                onChange={this.handleInput}
                                autoFocus/>
                        </InputContainer>
                    </div>
                        <Button  onClick={this.onClick}
                                 fullWidth
                                 variant="contained"
                                 color="primary">Search</Button>
                    <div className="status-box">
                        <p className="lead">
                            Results:  <strong>{this.state.gists.length}</strong>
                        </p>
                    </div>

                        <div>

                            <ul>
                                {this.state.gists.map((gist, index) => {
                                    return (<GistsElement
                                        key={gist.id}
                                        gistData={gist}/>);
                                })}
                            </ul>
                        </div>

                </Container>

                <Footer/>
            </Background>

        );
    }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify:items: center;
  padding:0;
  margin:0;
  top:10%;
  left:0;
  width: 100%;
  height: 100%;

`;

const Background = styled.div`
  backgroundImage: \`url(${background})\`;
  backgroundPosition: 'center';
  backgroundSize: 'cover';
  backgroundRepeat: 'no-repeat';
  width: 100vw;
  height: 100vh;
`;

const Subtitle = styled.h2`
  margin-top:10px;
  margin-bottom:10px;
    color: black;
   opacity: 0.8;
`;

const Button = styled.button`
  width: 200px;
  color: black;
  text-transform: uppercase;
  border: none;
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  padding:10px;
  font-weight: 500;
  display: block;
  border-radius: 6px;
  cursor: pointer;
  margin-top:20px;
  margin-bottom: 20px;

  &:hover{
    opacity: 0.9;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

`;


const Input =  styled.input`
  width: 300px;
  height: 40px;
  display: block;
  box-sizing: border-box;
  border-radius: 15px;
  font-size: 14px;
  text-indent: 7px;
  &:focus {
    outline: none;
}
`;

export default Home;

