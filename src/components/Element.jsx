import React, { useState } from 'react';

const Element = ({ id, element, syntax }) => {
 
    return (
        <div>
            <h4><em>{element}:</em></h4>
            <h5>{syntax}</h5>
            <br/>
        </div>
    );

};

export default Element;