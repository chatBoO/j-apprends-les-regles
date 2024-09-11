import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GameList from "../data/jeux.json";

const GameCard = () => {
    const { id } = useParams(); // Récupération de l'id en paramètre URL, avec {id} entre accolades sinon reconnu en tant qu'objet
    const currentGame = GameList.find((game) => game.id === id); // Utilisation de la méthode .find pour chercher le logement avec son id
    const navigate = useNavigate();

    useEffect(() => {
        if (currentGame === undefined) {
            navigate("/404");
        }
    }, []);

    if (currentGame) {
        const {
            titre,
            couverture,
            presentation,
            description,
            video,
            age,
            joueurs,
            duree,
            auteur,
            editeur,
            edition,
            niveau,
            regle,
        } = currentGame;
        return (
            <main>
                <section className="infos">
                    <img src={couverture} alt={titre} />
                    <div className="infos">
                        <h3>Infos générales</h3>
                        <div className="infos__bloc1">
                            Âge : {age} <br />
                            Joueurs : {joueurs} <br />
                            Durée moyenne : {duree} <br />
                        </div>
                        <div className="infos__bloc2">
                            Éditeur : {editeur} <br />
                            Auteur : {auteur} <br />
                            Édition : {edition} <br />
                        </div>
                        <div className="infos__bloc3">Niveau : {niveau}</div>
                        <div className="infos__bloc4">
                            <h4>Télécharger la règle</h4>
                            <a href={regle}>Télécharger</a>
                        </div>
                    </div>
                </section>
                <section className="presentation">
                    <h2>{titre}</h2>
                    <p>{presentation}</p>
                    <div className="presentation__bloc1">
                        <h3>But du jeu</h3>
                        <p>{description}</p>
                    </div>
                    <div className="presentation__bloc2">
                        <h3>Explication des règles en vidéo</h3>
                        <iframe
                            width="560"
                            height="315"
                            src={video}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </section>
            </main>
        );
    }
};

export default GameCard;
