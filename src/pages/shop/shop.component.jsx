import React, { Component } from 'react';

// Styles
import './shop.styles.scss';

// Data
import SHOP_DATA from './shop.data';

// components
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends Component {
    constructor() {
        super();

        this.state = {
            collections: SHOP_DATA
        };
    }

    render() {
        const { collections } = this.state;

        return (
            <div className='shop-page'>
                {
                    collections.map(({ id, ...otherProps }) => {
                        return (
                            <CollectionPreview key={ id } { ...otherProps } />
                        )
                    })
                }
            </div>
        );
    }
};

export default ShopPage;