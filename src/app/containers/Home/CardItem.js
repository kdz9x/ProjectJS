import React, { Component } from 'react';
import Items from '../../components/Items';
import Filter from './Filter';
import data from './Items.json';
class CardItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search:null,
            filterTarget: this.props.filterValue
        };
    }
    filterTarget(){
            const a = this.props.filterValue;
            this.setState({search:a})
        }
    render() {
        const items = data.filter((data)=>{
            if(this.state.search == null)
                return data
            else if(data.name.toLowerCase().includes(this.state.search.toLowerCase()) || data.cagetory.toLowerCase().includes(this.state.filter.toLowerCase())|| data.collection.toLowerCase().includes(this.state.filter.toLowerCase())|| data.color.toLowerCase().includes(this.state.filter.toLowerCase())){
                return data
            }
        }).map(data =>{
            return(
                <Items 
                    key={data.name}
                    name={data.name}
                    cagetory={data.cagetory}
                    price={data.price}
                    image={data.image}
                    rating={data.rating}
                >
                    {data.name}
                </Items>
            )
        })
        return (
            
            <div className="list-item">
                    <div className="row">
                        <Filter />
                        {items }
                        {/* {element} */}
                    </div>
                    <button onClick={()=>this.filterTarget()}> click me! </button> 
            </div>
        )
}
}
export default CardItem;