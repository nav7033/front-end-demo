import React, { useState } from 'react';
import { Resizable } from 're-resizable';

const Component2 = ({ width, onResize }) => {

    
    return (
        <Resizable
            style={{ flex: '0 0 70%', maxWidth: '70%' }}
            defaultSize={{ width: width, height: '100%' }}
            minWidth={100}
            maxWidth={'70%'}
            onResizeStop={onResize}
        >

            <div className="component" >
                Component 2
                <p>Content goes here</p>
            </div>

        </Resizable>
    );
};

export default Component2;
