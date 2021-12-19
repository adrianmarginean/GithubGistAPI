import React, { PureComponent } from 'react';
import styled from "styled-components";


/*
  This class identify the languages from files
 */
export default class Language extends PureComponent {
    componentWillMount() {
        const {files} = this.props;
        this.fileArr = [];

        for(let file in files) {
            let language = files[file].language;
            //remove duplicate file types
            if(this.fileArr.indexOf(language) === -1) {
                this.fileArr.push(language);
            }
        }
    }
    render() {
        return (
            <Lang>
                {this.fileArr.map((language, index) => {
                    return (<li className="language" key={index}>{language}</li>);
                })}
            </Lang>
        );
    }
}



const Lang = styled.h1`
  background-color: #E69C37;
  color: #ffffff;
  padding: 5px;
  border-radius: 5px;
  margin-right: 5px;
  font-size: 8px;
  font-weight: 400;
  letter-spacing: 1px;
`;