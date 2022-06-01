import { Personaje } from '../scripts/personaje';

export function Image({ personaje }: { personaje: Personaje }) {
    return (
        <img
            src={'img/' + personaje.nombre + '.jpg'}
            alt="Nombre y familia del personaje"
            className="character__picture card-img-top"
        />
    );
}
