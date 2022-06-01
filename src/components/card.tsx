import { Personaje } from '../scripts/personaje';

import { ButtonDeath } from './button-death';
import { ButtonSpeak } from './button-speak';
import { CardList } from './card-list';
import { Communications } from './communication';
import { Image } from './image';
import { InformationList } from './Information-list';

export function Card({ personaje }: { personaje: Personaje }) {
    const template = (
        <>
            <li className="character col">
                <div className="card character__card">
                    <Image personaje={personaje}></Image>
                    <div className="card-body">
                        <CardList personaje={personaje}></CardList>
                        <div className="character__overlay">
                            <InformationList
                                personaje={personaje}
                            ></InformationList>
                            <div className="character__actions">
                                <ButtonSpeak></ButtonSpeak>
                                <ButtonDeath></ButtonDeath>
                            </div>
                        </div>
                    </div>
                    <i className="emoji"></i>
                </div>
            </li>

            <Communications></Communications>
        </>
    );

    return template;
}
