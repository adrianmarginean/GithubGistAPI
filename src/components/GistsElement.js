import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Language from "./Language";
import styled from "styled-components";

/*
   Here we have a class/component who represent
   a gist with description, files and languages
 */
export default class GistsElement extends Component {
    render() {
        const {gistData} = this.props;
        const noOfFiles = Object.keys(gistData.files).length;
        return (
                <Card>
                    <Link to={{pathname: `/${gistData.id}`, state: {description: gistData.description, files: gistData.files}}}>
                    <p className="lead">{(gistData.description) || 'No Description'}</p>
                    </Link>
                    <p className="text-secondary">{noOfFiles} {(noOfFiles > 1) ? 'Files' : 'File'}</p>
                    <ul className="indent-left">
                    {Object.values(gistData.files).map((file, index) => {
                        return (
                            <li key={index} className="text-secondary">
                                <a href={file.raw_url} target="_blank" className="text-secondary">
                                    {file.filename}
                                </a>
                            </li>
                        );
                    })}
                    </ul>
                    <Language files={gistData.files}/>
                </Card>

        );
    }
}
const Card = styled.h1`
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  cursor: pointer;
  text-decoration: none;
`;


