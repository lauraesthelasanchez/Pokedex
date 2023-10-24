import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getUsername } from '../store/slices/username.slice'
import ballup from "../assets/img/pb_up.png"
import balldown from "../assets/img/pb_down.png"
import screen from "../assets/img/screenpd.png"
import pokedex from "../assets/img/pokedex.png"

const Home = () => {
    const navigate = useNavigate();
    const username = useSelector(state => state.username)
    const [inputName, setImputName] = useState("")

    const dispatch = useDispatch();

    const getPokedex = () => {
            dispatch(getUsername(inputName));
            navigate('/pokedex')
    }

    return (
        <div className='home'>
            <img className='title_home' src={pokedex} alt="pokedex" />
            <div className='input__container'>
                <img src={ballup} alt="" />
                <div className='screen'>
                    <img src={screen} alt="" />
                    <div className='input'>
                        <input placeholder='name' type="text" value={inputName} onChange={e => setImputName(e.target.value)} />
                        <button onClick={getPokedex}><i className='bx bxl-go-lang bx-tada bx-lg' ></i></button>
                    </div>
                </div>
                <img src={balldown} alt="" />
            </div>
        </div>
    );
};

export default Home;