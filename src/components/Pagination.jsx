import React from 'react';

const Pagination = ({num, setPage, page}) => {

    const buttonSelected = () => {
        if(num === page){
            return "black"
        }
    }

    return (
        <button className='btn_acces' style={{background: buttonSelected()}} onClick={() => setPage(num)}>
            {num}
        </button >
    );
};

export default Pagination;