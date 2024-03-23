
import React, { useState } from 'react';
import Component1 from './Component1';
 import Component2 from './Component2';
 import Component3 from './Component3';
import './Resizeable.css'
export default function App() {
     // State variables to manage widths of components
    const [width1, setWidth1] = useState(300);
    const [width2, setWidth2] = useState(300);
    const [width3, setWidth3] = useState(1517);


     // State variables to manage widths of components
    const handleResize1 = (event, direction, ref, delta) => {
        setWidth1(prevWidth => prevWidth + delta.width);
        setWidth2(prevWidth => prevWidth - delta.width);
    };

    const handleResize2 = (event, direction, ref, delta) => {
        setWidth2(prevWidth => prevWidth + delta.width);
        setWidth1(prevWidth => prevWidth - delta.width);
    };

    const handleResize3 = (event, direction, ref, delta) => {
        setWidth3(prevWidth => prevWidth + delta.width);
    };

    return (
        <div className='resizeableStyle' >
            <div className="compOneAndTwo" >
                <Component1 width={width1} onResize={handleResize1}/>
                <Component2 width={width2} onResize={handleResize2}/>
            </div>
            <Component3 width={width3} onResize={handleResize3}/>
        </div>
    );
}

