import React, { Component } from 'react';
import './style.css';

/*
  This class represent the user avatar image and username
 */
export default class Avatar extends Component {
    render() {
        const {avatarUrl, name} = this.props;
        return [
            <img key="image" src={avatarUrl} alt={name} className="avatar"/>,
            <span key="username" className="text-secondary">{name}</span>

        ];
    }
}
