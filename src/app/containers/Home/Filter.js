import React, { Component } from 'react';
import RangeSlide from '../../components/RangeSlide';
import DropDown from '../../components/DropDown';
import data from '../../components/Dropdown.json';
class Filter extends Component {
    constructor(props) {
        super(props)
        this.state ={
                collection: '',
                color: '',
                category: ''
        }
    };
    
    filterValue = (filter) => {
        this.props.changeFilter({selected:filter.select})
        if(filter.collection)
        {
           this.setState({collection:filter.collection})
           this.props.changeFilter({collection:filter.collection})
           console.log(filter.collection)
        }
        else if ( filter.color)
        {
            this.setState({color:filter.color})
            this.props.changeFilter({color:filter.color})
            console.log(filter.color)
        }
        else if ( filter.category)
        {
            this.setState({category:filter.category})
            this.props.changeFilter({category:filter.category})
            console.log(filter.category)
        }
        console.log(filter.select)
    }
    render(){
        let element = data.map((data,index) => (
            <DropDown 
                key={index}
                select={data.select}
                option={data.option}
                filter={this.filterValue}
            >
            </DropDown>
        )        
        )
        return (
            <div className="list-group col-sm-3">
            <p style={{mixBlendMode: 'normal',opacity: 0.5,textTransform: 'uppercase'}}>  Filter By</p>
            <br/>
            {element} 
            <RangeSlide />          
            </div>
        );
    }
}

export default Filter;