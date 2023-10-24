import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ByType = ({getPokemonsType}) => {
    const [pokemonsType, setPokemonsType] = useState([])

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/type/`)
            .then(res => setPokemonsType(res.data?.results))
    }, [])

    return (
        <div className='bytype'>
        <h3>Busqueda por tipo</h3>
        <select name="" id="" onChange={e => getPokemonsType(e.target.value)}>
            <option default value="https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279">Todos</option>
            {
                pokemonsType.map((obj) => (
                    <option key={obj.name} value={obj.url}>{obj.name?.charAt(0).toUpperCase() + obj.name.slice(1)}</option>
                ))
            }
        </select></div>
    );
};

export default ByType;