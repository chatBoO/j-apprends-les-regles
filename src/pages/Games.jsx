import React, { useState, useEffect } from "react";
import Card from "../components/Card";

const Games = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [gamesPerPage] = useState(6); // Nombre de jeux par page
    const [loading, setLoading] = useState(true);
    const [gamesList, setGamesList] = useState(null);
    const [error, setError] = useState(null);

    // Calculer l'index des jeux affichés
    const indexOfLastGame = currentPage * gamesPerPage;
    const indexOfFirstGame = indexOfLastGame - gamesPerPage;

    // Fonction de gestion de la pagination
    const nextPage = () => {
        if (currentPage < Math.ceil(gamesList.length / gamesPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    useEffect(() => {
        // Fonction asynchrone pour appeler l'API
        const fetchData = async () => {
            try {
                const response = await fetch("../src/data/jeux.json");
                if (!response.ok) {
                    throw new Error(
                        "Erreur lors de la récupération des données"
                    );
                }
                const result = await response.json();
                setGamesList(result); // Met à jour les données
            } catch (error) {
                setError(error.message); // Gère l'erreur
            } finally {
                setLoading(false); // Désactive le chargement
            }
        };

        fetchData();
    }, []); // Tableau de dépendances vide pour ne le lancer qu'une fois au montage

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Erreur : {error}</p>;

    // Calculer le nombre total de pages
    const totalPages = Math.ceil(gamesList.length / gamesPerPage);

    return (
        <main>
            <h2>Tous les jeux</h2>
            <article className="gameCards-container">
                {gamesList
                    .slice(indexOfFirstGame, indexOfLastGame)
                    .map((game) => (
                        <Card
                            key={game.id}
                            cover={game.couverture}
                            title={game.titre}
                            id={game.id}
                        />
                    ))}
            </article>

            {/* Affichage des boutons de pagination */}
            <div className="pagination">
                <button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className={
                        currentPage === 1 ? "disabled-button" : "active-button"
                    }
                >
                    Jeux précédents
                </button>
                <span>
                    Page {currentPage} sur {totalPages}
                </span>
                <button
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                    className={
                        currentPage === totalPages
                            ? "disabled-button"
                            : "active-button"
                    }
                >
                    Jeux suivants
                </button>
            </div>
        </main>
    );
};

export default Games;
