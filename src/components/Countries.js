import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from './Card';

const Countries = () => {

    const MonAdresse = "https://restcountries.com/v3.1/all";

    const [data, setData] = useState([]);
    const [rangeValue, setRangeValue] = useState([36]);
    const [selectedRadio, setSelectedRadio] = useState("")
    const arrayContinents = ["Africa", "America", "Asia", "Europe", "Oceania"];

    // le use effet se joue lorque le composant est monté
    useEffect(() => {
        axios
            .get(MonAdresse)
            .then((res) => setData(res.data))

    }, [
        //ici le fallback si necessaire
    ])


    return (
        <div className="countries">

            {/* on va mettre la barre de recherche */}
            <ul className='radio-container'>
                <input
                    type="range"
                    min="1"
                    max="255"
                    defaultValue={rangeValue}
                    onChange={(e) => setRangeValue(e.target.value)}
                />



                {/* on va faire un mapping du array continent pour afficher les 5 continents*/}
                {
                    arrayContinents.map((continent) => (
                        <li>
                            <input
                                type="radio"
                                id={continent}
                                name="continentradio"
                                checked={continent === selectedRadio}
                                onChange={(e) => setSelectedRadio(e.target.id)}
                            />

                            <label htmlFor={continent} >
                                {continent}
                            </label>

                        </li>
                    ))}

                <h5>{rangeValue}</h5>
            </ul>

            {/* on va insérer ici un bouton annuler la recherche.
            Si le bouton est selectionné alors on fait apparaitre le bouton
            on ajoute un evenement dans le bouton onClick qui va mettre le setSelectRadio à vide
            */}
            {selectedRadio && (
                <button onClick={() => setSelectedRadio("")} >
                    Annuler la recherche
                </button>
            )}
            {/* cet ul va afficher les cards des pays selectionnées */}
            <ul>
                {
                    data
                        .filter((country) => country.continents[0].includes(selectedRadio))
                        .sort((a, b) => b.population - a.population)
                        .slice(0, rangeValue)
                        .map((country, index) => (
                            <Card key={index} country={country} />
                        ))
                }

            </ul>
        </div >
    );
};

export default Countries;

//documenation map
// const num = [3, 8, 11, 7, 5];
// const num2x = num.map((n) => n * 2);
// console.log(num2x); // [6, 16, 22, 14, 10]