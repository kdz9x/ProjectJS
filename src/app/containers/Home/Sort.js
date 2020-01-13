import React, { Component } from 'react';
import searchButton from '../../../images/search-button.svg';
import logo from '../../../images/sajarilogo.svg';
class Sort extends Component {
        constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }
    searchTargetValue = (e) =>{
        this.setState({
            value: e.target.value,
        });
        this.props.changeValue(e.target.value);
    }
    
    render() {
        return (
            <div className="row">
                <img 
                    src={searchButton}
                    alt="searchButton" 
                    style={{height: 40, width: 40}}
                />
                <div className="col-sm-9">
                    <input 
                        type="text" 
                        className="no-border col-sm-6"
                        placeholder="Search..."
                        style={{ position: 'absolute'}}
                        onChange={this.searchTargetValue}
                    /> 
                    <div className="text-right">
                            Powered by <b>Sajari.com</b>
                        <img src={logo} alt="logo" />
                    </div>
                        <hr/>
                </div>
                <div className="col-sm-2">
                    <select className="form-control filter">
                        <option>Best Match</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default Sort;