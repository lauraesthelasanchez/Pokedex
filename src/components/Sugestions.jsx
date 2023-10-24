import React from 'react';

const Sugestions = ({suggestions, setSearch}) => {
    
    return (
        <ul className='suggestions'>
            {
                suggestions?.map((suggestion) => (
                    <li key={suggestion} onClick={() => setSearch(suggestion)}>{suggestion.charAt(0).toUpperCase() + suggestion.slice(1)}</li>
                ))
            }
        </ul>
    );
};

export default Sugestions;