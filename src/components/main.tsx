import { useState } from 'react';

import { crearPersonajes } from '../scripts/personajes';
import { Card } from './card';

export function Main() {
    const personajes = crearPersonajes();
    const [state, setState] = useState(personajes);
    return (
        <div className="app container">
            <ul className="characters-list row list-unstyled">
                {personajes.map((personaje) => {
                    return <Card personaje={personaje}></Card>;
                })}
            </ul>
        </div>
    );
}
