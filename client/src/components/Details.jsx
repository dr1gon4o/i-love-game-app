import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getOneGame } from "../fetches/methods";
import { deleteGame } from "../fetches/methods";
import { useNavigate } from "react-router-dom";

export default function Details() {
    const { id } = useParams();

    const navigate = useNavigate();
    const token = localStorage.getItem('accessToken');
    const onDelete = async () => {
        const confirm = window.confirm("Are you sure you want to delete this game?");
        if (!confirm) {
            return;
        }
        await deleteGame(id, token);
        navigate('/');
    };

    const [details, setDetails] = useState(null);


    // tova e predi da si napravia funkciite s fetch
    // useEffect(() => {
    //     fetch(`http://localhost:3030/data/games/${id}`)
    //         .then(res => res.json())
    //         .then(data => setDetails(data));
    // }, [id]);

    // if (!details) {
    //     return <p>Loading...</p>;
    // }


    // tova e nai simple koeto e s fetch ot fiala methods.js
    useEffect(() => {
        getOneGame(id).then(data => setDetails(data));
    }, [id]);

    if (!details) {
        return <p>Loading...</p>;
    }

    // tova e ako iskam da ima try i catch error
    // useEffect(() => {
    //     try {
    //         getOneGame(id).then(data => setDetails(data));
    //     } catch (err) {
    //         console.error(err);
    //     }
    // }, [id]);

    // if (!details) {
    //     return <p>Loading...</p>;
    // }


    // tova e ako iskam da e s funkcia koiato ima try i catch error
    // useEffect(() => {
    //     const fetchOneGame = async () => {
    //         try {
    //             getOneGame(id).then(data => setDetails(data));
    //         } catch (err) {
    //             console.error(err);
    //         }
    //     };
    //     fetchOneGame();
    // }, [id]);

    // if (!details) {
    //     return <p>Loading...</p>;
    // }


    return (
        <section id="game-details">
            <h1>Game Details</h1>

            <div className="info-section">
                <div className="header-and-image">
                    <img
                        className="game-img"
                        src={details.imageUrl}
                        alt={details.title}
                    />
                    <div className="meta-info">
                        <h1 className="game-name">{details.title}</h1>
                        <p className="data-row">
                            <span className="label">Genre:</span>
                            <span className="value">{details.genre}</span>
                        </p>
                        <p className="data-row">
                            <span className="label">Active Players:</span>
                            <span className="value">{details.players}</span>
                        </p>
                        <p className="data-row">
                            <span className="label">Release Date:</span>
                            <span className="value">{details.date}</span>
                        </p>
                    </div>
                    <div className="summary-section">
                        <h2>Summary:</h2>
                        <p className="text-summary">
                            {details.summary}
                        </p>
                    </div>
                </div>

                {/* Edit/Delete buttons ( Only for creator of this game )  */}
                <div className="buttons">
                    <Link className="button"
                        to={`/edit/${details._id}`}>Edit
                    </Link>

                    {/* <Link className="button"
                    to={`/delete/${details._id}`}>Delete
                </Link> */}
                    {/* <Link className="button"
                        to={"/delete"} >Delete
                    </Link> */}
                    <input className="button bg-danger w-auto" type="button" value="Delete" onClick={onDelete}></input>

                </div>
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        <li className="comment">
                            <p>
                                Content: A masterpiece of world design, though the boss fights are
                                brutal.
                            </p>
                        </li>
                        <li className="comment">
                            <p>
                                Content: Truly feels like a next-gen evolution of the Souls formula!
                            </p>
                        </li>
                    </ul>
                    {/* Display paragraph: If there are no games in the database */}
                    {/* <p class="no-comment">No comments.</p> */}
                </div>
            </div>
            {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form">
                    <textarea name="comment" placeholder="Comment......" defaultValue={""} />
                    <input className="btn submit" type="submit" defaultValue="Add Comment" />
                </form>
            </article>
        </section >
    );
}