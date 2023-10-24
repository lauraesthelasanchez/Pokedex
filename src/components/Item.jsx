import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ballItem from "../assets/img/vector_ball.png";
import red from "../assets/img/red.png";

const Item = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    const [pokemon, setPokemon] = useState({})
    const [info, setInfo] = useState("habilidades")

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => setPokemon(res.data))
    }, [])

    const getImage = () => {
        if (pokemon.sprites?.other.dream_world.front_default) {
            return pokemon.sprites?.other.dream_world.front_default
        } else {
            return pokemon.sprites?.other.home.front_default
        }
    }
    
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

    let pokemonTypes = []
    const types = () => {
        for (let i = 0; i < pokemon.types?.length; i++) {
            pokemonTypes.push(`${pokemon.types[i].type.name.charAt(0).toUpperCase()}${pokemon.types[i].type.name.slice(1)}`)
        }
        return pokemonTypes
    }
    types()

    let moves = []
    let abilities = []

    const description = () => {
        if (info === "habilidades") {
            for (let i = 0; i < pokemon.abilities?.length; i++) {
                abilities.push(pokemon.abilities[i].ability.name)
            }
            return abilities
        } else {
            for (let i = 0; i < pokemon.moves?.length; i++) {
                moves.push(pokemon.moves[i].move.name)
            }
            return moves
        }
    }
    description()
    
    return (
        <div className='item'>
            <div className='name__type'>
                <h2 style={{ color: getBackground() }}>{`${pokemon.name?.charAt(0).toUpperCase()}${pokemon.name?.slice(1)}`}</h2>
                <div className='item__types' style={{ color: getBackground() }}>
                    <p>{pokemonTypes.join(" / ")}</p>
                </div>
            </div>
            <div style={{ backgroundColor: getBackground() }} className='pokemon__item'>
                <i onClick={() => navigate(-1)} className='bx bxs-chevron-left bx-lg'></i>
                <img className='ball__img' src={ballItem} alt="" />
                <img className='poke__img' src={getImage()} alt="" />
                <div className='item_characteristics'>
                    <img className='red' src={red} alt="" />
                    <img className='avatar' src={getImage()} alt="" />
                    <div className='circle'><i className='bx bx-circle bx-burst bx-lg' ></i></div>
                    <p><strong>Peso:</strong></p>
                    <p>{pokemon.weight} Hg</p>
                    <hr />
                    <p><strong>Altura:</strong></p>
                    <p>{pokemon.height} Dm</p>
                </div>
            </div>
            <div className='item_description'>
                <div className='title_description'>
                    <h3 onClick={() => setInfo("habilidades")} style={{ backgroundColor: info === "habilidades" && "#3b6e8d" }}>Habilidades</h3>
                    <h3 onClick={() => setInfo("movimientos")} style={{ backgroundColor: info === "movimientos" && "#3b6e8d" }}>Movimientos</h3>
                </div>
                {info === "movimientos" &&
                    <div className='moves'>
                        {
                            moves.map(move => (
                                <p key={move}>{move}</p>
                            ))
                        }
                    </div>
                }
                {info === "habilidades" &&
                    <div className='abilities'>
                        {
                            abilities.map(ability => (
                                <p key={ability}>{ability}</p>
                            ))
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default Item;