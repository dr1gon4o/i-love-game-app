import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { editGame, getOneGame } from "../fetches/methods";

export default function Edit() {

    const navigate = useNavigate();
    const { id } = useParams();

    const [edit, setEdit] = useState(null);


    useEffect(() => {
        getOneGame(id).then(data => setEdit(data));
    }, [id]);

    if (!edit) {
        return <p>Loading...</p>;
    }

    const onEdit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const gameData = Object.fromEntries(formData);

        const user = JSON.parse(localStorage.getItem("user"));

        // try {
        //     await editGame(id, gameData, user.accessToken);
        //     alert("Game edited!");
        //     navigate('/Details/' + id);
        // } catch (err) {
        //     alert(err.message);
        //     console.log(err);
        // }

    };

    return (
        <>
            {/* add Page ( Only for logged-in users ) */}
            <section id="edit-page">
                <form id="add-new-game" onSubmit={onEdit}>
                    <div className="container">
                        <h1>Edit Game</h1>
                        <div className="form-group-half">
                            <label htmlFor="gameName">Game Name:</label>
                            <input
                                type="text"
                                id="gameName"
                                name="title"
                                placeholder="Enter game title..."
                                defaultValue={edit.title}
                            />
                        </div>
                        <div className="form-group-half">
                            <label htmlFor="genre">Genre:</label>
                            <input
                                type="text"
                                id="genre"
                                name="genre"
                                placeholder="Enter game genre..."
                                defaultValue={edit.genre}
                            />
                        </div>
                        <div className="form-group-half">
                            <label htmlFor="activePlayers">Active Players:</label>
                            <input
                                type="number"
                                id="activePlayers"
                                name="players"
                                min={0}
                                placeholder={0}
                                defaultValue={edit.players}
                            />
                        </div>
                        <div className="form-group-half">
                            <label htmlFor="releaseDate">Release Date:</label>
                            <input
                                type="date"
                                id="releaseDate"
                                name="date"
                                defaultValue={edit.date}
                            />
                        </div>
                        <div className="form-group-full">
                            <label htmlFor="imageUrl">Image URL:</label>
                            <input
                                type="text"
                                id="imageUrl"
                                name="imageUrl"
                                placeholder="Enter image URL..."
                                defaultValue={edit.imageUrl}
                            />
                        </div>
                        <div className="form-group-full">
                            <label htmlFor="summary">Summary:</label>
                            <textarea
                                name="summary"
                                id="summary"
                                rows={5}
                                placeholder="Write a brief summary..."
                                defaultValue={edit.summary}
                            />
                        </div>
                        <input className="btn submit" type="submit" defaultValue="EDIT GAME" />
                    </div>
                </form>
            </section>
        </>
    );
}