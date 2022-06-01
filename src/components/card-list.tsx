export function CardList() {
    return (
        <>
            <h2 className="character__name card-title h4">Nombre y familia</h2>
            <div className="character__info">
                <ul className="list-unstyled">
                    <li>Edad: X años</li>
                    <li>
                        Estado:
                        <i className="fas fa-thumbs-down"></i>
                        <i className="fas fa-thumbs-up"></i>
                    </li>
                </ul>
            </div>
        </>
    );
}
