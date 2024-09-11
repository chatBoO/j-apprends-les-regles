import { Link } from "react-router-dom";

const Card = ({ title, id, cover }) => {
    return (
        <Link to={`/game/${id}`}>
            <section className="card-container">
                <img
                    src={cover}
                    alt={title}
                    className="card-container__image"
                />
                <span className="card-container__text-container__text">{title}</span>
            </section>
        </Link>
    );
};

export default Card;
