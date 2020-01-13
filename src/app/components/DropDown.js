import React, { Component } from 'react';
// import data from './Dropdown.json';
class DropDown extends Component {
    constructor(props) {
        super(props)
        this.state={
            value:'',
            collection: '',
            color: '',
            category: ''
        }
    }
    
    selected = (e) =>{
        if(this.props.select === 'Collection')
        {
            this.props.filter({collection:e.target.value})
            // filter{color:'',collection'e.tar}
        }

        else if (this.props.select === 'Color')
        {
            this.props.filter({color:e.target.value})
        }
        else if (this.props.select === 'Category')
        {
            this.props.filter({category:e.target.value})
        }
            this.props.filter({select:this.props.select})
        // console.log(this.props.select)
        // this.setState({value:e.target.value});
        // this.props.filter({color:e.target.value,collection:e.target.value,cagetory:e.target.value})
    }
    render() {
        const options =  this.props.option;
        const Listoption = options.map((option,index) => 
            <option key={index} >{option}</option>
        );
        return (
            <select className="form-control filter" onChange={this.selected}> 
                <option>{this.props.select}</option>
                {Listoption}
            </select>
        );
    }
}

export default DropDown;