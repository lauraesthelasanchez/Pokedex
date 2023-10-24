import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getPerPage } from '../store/slices/perPage.slice';

const Confi = () => {
    const navigate = useNavigate()
    const dispach = useDispatch();

    return (
        <div className='confi'>
            <select name="" id="" onChange={e => dispach(getPerPage(e.target.value))}>
                <option default value="">Pokemones por pagina</option>
                <option value="8">8</option>
                <option value="12">12</option>
                <option value="16">16</option>
                <option value="20">20</option>
            </select>
            <button onClick={() => navigate("/pokedex")}>Guardar</button>
        </div>
    );
};

export default Confi;