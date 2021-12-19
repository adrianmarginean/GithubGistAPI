import React, { PureComponent } from 'react';
import './style.css';

export default class Avatar extends PureComponent {
    render() {
        const {avatarUrl, name} = this.props;
        return [
            <img key="image" src={avatarUrl} alt={name} className="avatar"/>,
            <span key="username" className="text-secondary">{name}</span>

        ];
    }
}
