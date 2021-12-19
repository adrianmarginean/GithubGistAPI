import React, { PureComponent } from 'react';
import Avatar from './Avatar';

export default class Forks extends PureComponent {
    render() {
        const {forks} = this.props;
        return (
            <ul className="indent-left">
                {forks.map((fork, index) => {
                    return (
                        <li key={index}>
                            <a href={`https://gist.github.com/${fork.id}`} target="_blank">
                                <Avatar avatarUrl={fork.user.avatar_url} name={fork.user.login} />
                            </a>
                        </li>
                    );
                })}
            </ul>
        );
    }
}
