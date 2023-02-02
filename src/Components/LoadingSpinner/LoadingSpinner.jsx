import React from 'react';
import Spinner from './spinning-loading.gif';

const LoadingSpinner = () => (
    <div className='LoadingSpinner'>
        <img src={Spinner} alt='Loading...' />
    </div>
);

export default LoadingSpinner;
