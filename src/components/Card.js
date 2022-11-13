import React from 'react';

const Card = ({ country }) => {


    console.log(country.translations.fra.common)

    const monPays = country.translations.fra.common;
    const macapitale = "Capitale: " + country.capital;
    const maPopulation = "Population: " + country.population.toLocaleString();
    const monImage = country.flags.svg;
    const alternativeImage = country.translations.fra.common;

    return (
        <li className="card">
            <img
                src={monImage}
                alt={alternativeImage}
            />
            <div className="infos">
                <h2>{monPays}</h2>
                <h4>{macapitale}</h4>
                <h5>{maPopulation}</h5>
            </div>
        </li>
    );
};

export default Card;