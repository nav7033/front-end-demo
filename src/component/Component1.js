import React from 'react';
import { Resizable } from 're-resizable';

const Component1 = ({ width, onResize }) => {
    return (
        <Resizable
            style={{ flex: '0 0 30%', maxWidth: '30%' }}
            defaultSize={{ width: width, height: '100%' }}
            minWidth={100}
            maxWidth={'30%'}
            onResizeStop={onResize}
        >
            <div className="component" >
                Component 1
                <p>Content goes here</p>
            </div>
        </Resizable>
    );
};

export default Component1;
