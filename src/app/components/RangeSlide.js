import React, { Component } from 'react';
import { Range } from '../../../node_modules/rc-slider';
import '../../../node_modules/rc-slider/assets/index.css';
class RangeSlide extends Component {
    render() {
        return (
            <div className="slide-range mt-3">
                <p style={{fontSize: 18,color:'#495057'}}> Range Slide </p>
                {/* <input type="range" min="1" max="100" className="slider"></input> */}
                <Range defaultValue={[1, 100]} />
                <p className="text-left">$0</p>
                <p className="text-right">$10000+</p>
            </div>
        );
    }
}

export default RangeSlide;