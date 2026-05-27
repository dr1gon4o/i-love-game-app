import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllGames } from "../fetches/methods";

export default function Home() {

    const [games, setGames] = useState([]);


    useEffect(() => {
        getAllGames().then(data => setGames(data));
    }, []);


    return (
        <>
            {/*Home Page*/}
            <section id="welcome-world">
                <div className="welcome-message">
                    <h2>ALL new games are</h2>
                    <h3>Only in </h3>
                    <img id="logo-left" src="./src/images/logo.png" alt="logo" />
                </div>
                <div id="home-page">
                    <h1>Latest Games</h1>
                    <div id="latest-wrap">
                        {/* Display div: with information about every game (if any) */}
                        <div className="home-container">
                            {games.length > 0 ? (
                                games.map(game => (

                                    <div className="game" key={game._id}>
                                        <img src={game.imageUrl} alt={game.title} />
                                        <div className="details-overlay">
                                            <p className="name">{game.title}</p>
                                            <p className="genre">{game.genre}</p>
                                            <Link className="details-button" to={`/details/${game._id}`}>
                                                Details
                                            </Link>
                                        </div>
                                    </div>
                                )
                                )) : (
                                <p className="no-articles">No games yet</p>

                            )}
                        </div>

                    </div>
                </div>
            </section>
        </>

    );
}