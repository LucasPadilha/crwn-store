import React, { Component } from 'react';

// Styles
import './directory.styles.scss';

// Components
import MenuItem from '../menu-item/menu-item.component';

class Directory extends Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    id: 1,
                    title: 'Hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    pathUrl: 'hats'
                },
                {
                    id: 2,
                    title: 'Jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    pathUrl: 'jackets'
                },
                {
                    id: 3,
                    title: 'Sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    pathUrl: 'sneakers'
                },
                {
                    id: 4,
                    title: 'Womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    pathUrl: 'womens'
                },
                {
                    id: 5,
                    title: 'Mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    pathUrl: 'mens'
                }
            ]
        };
    }

    render() {
        return(
            <div className="directory-menu">
            {
                this.state.sections.map(({ id, ...otherProps }) => {
                    return (
                        <MenuItem key={ id } { ...otherProps } />
                    );
                })
            }
            </div>
        );
    }
};

export default Directory;