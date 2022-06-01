import { useState } from 'react';
import { crearPersonajes } from '../scripts/personajes';
import { ButtonDeath } from './button-death';
import { ButtonSpeak } from './button-speak';
import { CardList } from './card-list';
import { Communications } from './communication';
import { Image } from './image';
import { InformationList } from './Information-list';

export function Card() {
    const initialState = crearPersonajes()
    const [state, setState] = useState(initialState);
        <>
            <ul className="characters-list row list-unstyled">
                <li className="character col">
                    <div className="card character__card">
                        <Image></Image>
                        <div className="card-body">

                            <CardList></CardList>
                            <div className="character__overlay">
                                <InformationList></InformationList>
                                <div className="character__actions">
                                    <ButtonSpeak></ButtonSpeak>
                                    <ButtonDeath></ButtonDeath>
                                </div>
                            </div>
                        </div>
                        <i className="emoji"></i>
                    </div>
                </li>
            </ul>
            <Communications></Communications>
        </>
    );

    return template;
}
