import {Component} from "react";
import HomeService from '../services/HomeServices';
import Forks from "../components/Forks";
import styled from "styled-components";

export  default class ViewGist extends Component{
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            gist: [],

        }
    }

    componentDidMount(){
        console.log(this.state.id);
        HomeService.getGist(this.state.id).then( res => {
            this.setState({gist: res.data});
        })

    }

    renderForks() {
        if(this.state.gist.forks ) {
            return (
                <Forks forks={this.state.gist.forks.slice(0,3)}/>
            );
        } else {
            return (
                <span className="text-danger indent-left">{"error"}</span>
            );
        }
    }


    render() {


        return (
            <Container className="container">
                <Box>
                    <p className="lead">{(this.state.gist.description) || 'No Description'}</p>
                    <ForkB >
                        <p1 >Forks:</p1>
                        {this.renderForks()}
                    </ForkB>
                </Box>

            </Container>
        );
    }
}

const Box = styled.h1`
  margin-top: 50px;
  border: 1px solid #dddddd;
  padding: 20px;
`;

const ForkB = styled.h1`
  margin-top: 5px;
  text-decoration: underline;
`;

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