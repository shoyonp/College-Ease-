import React from 'react';

const CollegeDetails = ({params}) => {
    const id = params.id;
    return (
        <div>
            <h1>College Details ok</h1>
            <h2>ID - {id}</h2>
        </div>
    );
};

export default CollegeDetails;