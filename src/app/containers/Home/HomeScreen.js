import React, { Component } from 'react';
import logo from '../../../images/logo.svg';
import cart from '../../../images/cart.svg';
class HomeScreen extends Component {
    render() {
        return (
        
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <img className="navbar-brand" src={logo} alt="logo" style={{ height: 71}}/>
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    <button className="nav-link no-border" >Home <span className="sr-only">(current)</span></button>
                                </li>
                                <li className="nav-item active">
                                    <button className="nav-link no-border" >shop</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link active no-border" >magazine</button>
                                </li>
                            </ul>
                    <div className="form-inline my-2 my-lg-0" >
                        < img className="mr-4" src={cart} alt="cart" /> 
                        <button type="button" className="btn btn-light" style={{textTransform: "uppercase"}}>Login</button>
                    </div>
                    </div>
                </nav>
            
        );
    }
}

export default HomeScreen;