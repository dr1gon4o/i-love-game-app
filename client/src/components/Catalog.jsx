import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllGames } from "../fetches/methods";

export default function Catalog() {
    // const haha = fetch('http://localhost:3030/data')
    //     .then(res => res.json())
    //     .then(data => console.log(data));

    // const haha2 = fetch('/jsonstore/games?sortBy=_createdOn%20desc')
    //     .then(res => res.json())
    //     .then(data => console.log(data));

    const [games, setGames] = useState([]);

    useEffect(() => {
        getAllGames().then(data => setGames(data));
    }, []);
    
    // useEffect(() => {
    //     fetch('http://localhost:3030/data/games?sortBy=_createdOn%20desc')
    //         .then(res => res.json())
    //         .then(data => setGames(data));
    // }, []);

    // ili moje taka:

    // useEffect(() => {
    //     fetch('/jsonstore/games?sortBy=_createdOn%20desc')
    //         .then(res => res.json())
    //         .then(data => setGames(data));
    // }, []);

    // moje i s await koeto e sushtoto:
    // useEffect(() => {
    //     const fetchGames = async () => {
    //         try {
    //             const res = await fetch('http://localhost:3030/data/games?sortBy=_createdOn%20desc');
    //             const data = await res.json();
    //             setGames(data);
    //         } catch (err) {
    //             console.error(err);
    //         }
    //     };

    //     fetchGames();
    // }, []);

    return (
        <>
            {/*<section id="catalog-page">
                <h1>Catalog</h1>

                /* Display div: with information about every game (if any) 

                <div className="catalog-container">
                    <div className="game">
                        <img src="./src/images/witcher.png" alt="The Witcher 3" />
                        <div className="details-overlay">
                            <p className="name">The Witcher 3</p>
                            <p className="genre">Open World</p>
                            <Link className="details-button"
                                to="/details/1">
                                Details
                            </Link>

                        </div>
                    </div>
                    <div className="game">
                        <img src="./src/images/elden ring.png" alt="Elden Ring" />
                        <div className="details-overlay">
                            <p className="name">Elden Ring</p>
                            <p className="genre">Action RPG</p>
                            <Link className="details-button"
                                to="/details/2">
                                Details
                            </Link>

                        </div>
                    </div>
                    <div className="game">
                        <img src="./src/images/minecraft.png" alt="Minecraft" />
                        <div className="details-overlay">
                            <p className="name">Minecraft</p>
                            <p className="genre">Sandbox</p>
                            <Link className="details-button"
                                to="/details/3">
                                Details
                            </Link>

                        </div>
                    </div>
                    <div className="game">
                        <img src="./src/images/cyberpunk.png" alt="Cyberpunk 2077" />
                        <div className="details-overlay">
                            <p className="name">Cyberpunk 2077</p>
                            <p className="genre">Action RPG</p>
                            <Link className="details-button"
                                to="/details/4">
                                Details
                            </Link>

                        </div>
                    </div>
                 </div>
                /* Display paragraph: If there is no games  */
                /* <h3 class="no-articles">No Added Games Yet</h3> 
            </section>*/}

            <section id="catalog-page">
                <h1>Catalog</h1>

                {games.length > 0 ? (
                    <div className="catalog-container">
                        {games.map(game => (
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
                        ))}
                    </div>
                ) : (
                    <h3 className="no-articles">No Added Games Yet</h3>
                )}
            </section>

        </>
    );
}