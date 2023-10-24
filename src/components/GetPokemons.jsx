import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import ByType from './ByType';
import Card from './Card';
import Pagination from './Pagination';

const GetPokemons = ({ pokemons, setPokemons, initialValues }) => {
    const perPage = useSelector(state => state.perPage)
    const [page, setPage] = useState(1)
    const lastIndex = perPage * page
    const navigate = useNavigate();

    let shortRoutePokemons
    let shortRouteCount
    const route = () => {
        if (pokemons?.results) {
            shortRoutePokemons = pokemons?.results
            shortRouteCount = pokemons?.count
        } else {
            shortRoutePokemons = pokemons.pokemon
            shortRouteCount = pokemons.pokemon?.length
        }
    }
    route()

    const pokemonsToShow = shortRoutePokemons?.slice(lastIndex - perPage, lastIndex)

    const totalPages = Math.ceil(shortRouteCount / perPage);

    const arrayIteracion = []
    const iteracion = () => {
        for (let i = 1; i <= totalPages; i++) {
            arrayIteracion.push(i)
        }
    }
    iteracion()

    let acces
    const selectAcces = () => {
        if (totalPages > 10) {
            if (page > totalPages - 5) {
                acces = arrayIteracion.slice(totalPages - 10, totalPages)
            } else if (page > 5) {
                acces = arrayIteracion.slice(page - 5, page + 5)
            } else {
                acces = arrayIteracion.slice(0, 10)
            }
        } else {
            acces = arrayIteracion.slice(0, totalPages)
        }
    }
    selectAcces()

    const getPokemonsType = (obj) => {
        setPage(1)
        initialValues()
        axios.get(obj)
            .then(res => setPokemons(res.data))
    }

    const getLastBtn = () => {
        if(totalPages > 10){
            if(page < totalPages){
                return <i className='bx bxs-right-arrow-circle bx-md btn_acces' onClick={() => setPage(totalPages)}></i>
            }
        }
    }

    return (
        <div className='pokemons__container'>
            <div className='confi_type'>
                <ByType getPokemonsType={getPokemonsType} />
                <div className='icon__confi'>
                    <i className='bx bxs-cog bx-md' onClick={() => navigate("/confi")}></i>
                </div>
            </div>
            <div className='acces__container'>
                {page > 1 &&
                    <i className='bx bxs-left-arrow-circle bx-md btn_acces' onClick={() => setPage(1)}></i>
                }
                {acces?.map((num) => (
                    <Pagination num={num} key={num} setPage={setPage} page={page} />
                ))
                }
                {getLastBtn()}
            </div>
            <div className='cards__container'>
                {pokemonsToShow?.map((pokemon) => (
                    <Card key={pokemon.url ? pokemon.url : pokemon.pokemon.url} url={pokemon.url ? pokemon.url : pokemon.pokemon.url} />
                ))
                }
            </div>
        </div>
    );
};

export default GetPokemons;
