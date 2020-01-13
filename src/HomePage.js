import React, { Component } from 'react';
import HomeScreen from './app/containers/Home/HomeScreen';
import Sort from './app/containers/Home/Sort';
// import CardItem from './app/containers/Home/CardItem';
import Items from './app/components/Items';
import data from './app/containers/Home/Items.json';
import Filter from './app/containers/Home/Filter';
import {createStore} from 'redux'
class HomePage extends Component {
    constructor(props) {
        super(props)
        // conditon: {name};
        this.state = {
            search:'',
            category:null,
            color: null,
            collection: null,
            selected: null
            
        }
    };
    filterTarget = (value) => {
        this.setState({search:value})
    };
    filterBy = (changeFilter) =>{
        // this.setState({selected:changeFilter.select})
        if (changeFilter.collection){
            this.setState({collection:changeFilter.collection});
            
        }
        else if (changeFilter.color){
            this.setState({color:changeFilter.color});
        }
        else if (changeFilter.category){
            this.setState({category:changeFilter.category});
        }
        const a = [changeFilter.collection,changeFilter.color,changeFilter.category]
        
        console.log(a)
    };
    render() {
        const items = data.filter((data)=>{
            if(this.state.search === '' ) 
                return data
            // else if(this.state.selected === data.collection && this.state.selected === data.color && this.state.selected === data.category) 
            //     return data
            else if( data.name.toLowerCase().includes(this.state.search.toLowerCase()) && (data.category ===(this.state.category) && data.collection===(this.state.collection) && data.color===(this.state.color)))
                return data
            
        }).map(data =>{
            return(
                <Items 
                    key={data.name}
                    name={data.name}
                    category={data.category}
                    price={data.price}
                    image={data.image}
                    rating={data.rating}
                >
                    {data.name}
                </Items>
            )
        })
        // console.log(this.state.search)
        return(
            <div className="container-fluid">
                <HomeScreen />
                <Sort changeValue={this.filterTarget} />
                <div className="list-item">
                    <div className="row">
                        <Filter changeFilter={this.filterBy}/>
                        {items}
                    </div>
                </div>
            </div>
            );
    }
}

export default HomePage;