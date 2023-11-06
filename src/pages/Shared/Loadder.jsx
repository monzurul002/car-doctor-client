import React from 'react';
import { RotateLoader } from 'react-spinners';

const Loadder = () => {
    return (
        <div className='w-full vh-100 bg-red-500 flex justify-center items-center'>
            <RotateLoader color="#36d7b7" />
        </div>
    );
};

export default Loadder;