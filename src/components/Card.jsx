import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import pokeball from "../assets/img/pokeball.png"

const Card = ({ url }) => {
    const [pokemon, setPokemon] = useState({})
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(url)
            .then(res => setPokemon(res.data))
    }, [])

    const getBackground = () => {
        let type = pokemon.types?.[0].type.name
        switch (type) {
            case "normal":
                return "#b19176"
                break;
            case "fighting":
                return "#c03636"
                break;
            case "flying":
                return "#568aa8"
                break;
            case "poison":
                return "#964bc2"
                break;
            case "ground":
                return "#722f03"
                break;
            case "rock":
                return "#81404b"
                break;
            case "bug":
                return "#0fccb3"
                break;
            case "ghost":
                return "#cd40f8"
                break;
            case "steel":
                return "#d6d3d3"
                break;
            case "fire":
                return "#c51821"
                break;
            case "water":
                return "#2697f3"
                break;
            case "grass":
                return "greenyellow"
                break;
            case "electric":
                return "#caaf36"
                break;
            case "psychic":
                return "#fa7e93"
                break;
            case "ice":
                return "#b9e3f3"
                break;
            case "dragon":
                return "#fa4801"
                break;
            case "dark":
                return "gray"
                break;
            case "fairy":
                return "pink"
                break
        }
    }

    const getImage = () => {
        if (pokemon.sprites?.other.dream_world.front_default) {
            return pokemon.sprites?.other.dream_world.front_default
        } else {
            return pokemon.sprites?.other.home.front_default
        }
    }

    let pokemonTypes = []
    const types = () => {
        for (let i = 0; i < pokemon.types?.length; i++) {
            pokemonTypes.push(`${pokemon.types[i].type.name.charAt(0).toUpperCase()}${pokemon.types[i].type.name.slice(1)}`)
        }
        return pokemonTypes
    }
    types()

    return (
        <div style={{ backgroundColor: getBackground() }} className='card' onClick={() => navigate(`/pokedex/${pokemon.id}`)}>
            <h5 className='pokemonId'>#{pokemon.id}</h5>
            <div className='pokemon__info'>
                <div className='pokemon__details'>
                    <h4>{`${pokemon.name?.charAt(0).toUpperCase()}${pokemon.name?.slice(1)}`}</h4>
                    <div className='types'>
                        <p>{pokemonTypes.join(" / ")}</p>
                    </div>
                    <div className='characteristics'>
                        <div className='characteristics__info'>
                            <p><strong>HP</strong></p>
                            <p>{pokemon.stats?.[0]?.base_stat}</p>
                        </div>
                        <div className='characteristics__info'>
                            <p><strong>ATAQUE</strong></p>
                            <p>{pokemon.stats?.[1]?.base_stat}</p>
                        </div>
                        <div className='characteristics__info'>
                            <p><strong>DEFENSA</strong></p>
                            <p>{pokemon.stats?.[2]?.base_stat}</p>
                        </div>
                        <div className='characteristics__info'>
                            <p><strong>VELOCIDAD</strong></p>
                            <p>{pokemon.stats?.[5]?.base_stat}</p>
                        </div>
                    </div>
                </div>
                <div className='image'>
                    <img className='ball' src={pokeball} alt="" />
                    <img className='pokemon_img' width={"100px"} src={getImage()} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Card;