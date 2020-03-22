import React, { Component } from 'react';

// Styles
import './directory.styles.scss';

// Components
import { MenuItem } from '../menu-item/menu-item.component';

export class Directory extends Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    id: 1,
                    title: 'Hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png'
                },
                {
                    id: 2,
                    title: 'Jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png'
                },
                {
                    id: 3,
                    title: 'Sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png'
                },
                {
                    id: 4,
                    title: 'Womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large'
                },
                {
                    id: 5,
                    title: 'Mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large'
                }
            ]
        };
    }

    render() {
        return(
            <div className="directory-menu">
            {
                this.state.sections.map(({ id, title, imageUrl, size }) => {
                    return (
                        <MenuItem key={ id } imageUrl={ imageUrl } title={ title } size={ size } />
                    );
                })
            }
            </div>
        );
    }
};