import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div>
            
            {/* le fait d'ajouter <nav et de selectioner navigation composant il cree l'import en tete */}
            <Logo />
            <Navigation />

            <h1> ici about</h1>
            <p> Fugiat occaecat sunt in Lorem irure aliquip enim nisi et officia. Officia cillum mollit ullamco do culpa amet. Velit voluptate eu non veniam. Tempor qui eiusmod dolore proident voluptate quis adipisicing. Magna ullamco id labore cillum labore sint nulla incididunt minim.
            </p>
            <p>Excepteur consequat cillum tempor pariatur aliquip irure adipisicing in do nostrud ad proident. Esse id ut amet mollit fugiat minim reprehenderit et mollit incididunt aliqua Lorem. Nisi esse sunt sint et ut culpa elit magna officia voluptate deserunt. Ipsum qui in aliquip incididunt dolore do deserunt.
            </p>
        </div>
    );
};
 
export default About;

