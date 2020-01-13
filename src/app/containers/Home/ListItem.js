import React, { Component } from 'react';
import Items from '../../components/Items';
class ListItem extends Component {
    render() {
        return (
            <div className="list-item">
                <div className="row">
                    <div className="col-sm-3">
                        col-sm-3
                    </div>
                        <Items />
                </div>
            </div>
        );
    }
}

export default ListItem;