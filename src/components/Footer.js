import React, { Component } from 'react'
import styled from 'styled-components';

class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Footer1>
                    <span className="text-muted">All Rights Reserved 2021 @AdrianMarginean</span>
                </Footer1>
            </div>
        )
    }
}


const Footer1=styled.footer`
    position: fixed;
    margin-top: 30px;
    bottom: 0;
    width:100%;
    height: 30px;
    background-color: black;
    text-align: center;
    color: white;
    overflow: hidden;
`;

export default Footer