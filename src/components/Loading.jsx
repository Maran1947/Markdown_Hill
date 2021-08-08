import React from 'react';
import Loader from 'react-loader-spinner';

const Loading = () => {
    return (
        <Loader
        type="Circle"
        color="#000"
        height={70}
        width={70}
        timeout={5000} 
        />
    );
};

export default Loading;