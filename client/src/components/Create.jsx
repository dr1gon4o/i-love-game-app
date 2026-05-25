import { useNavigate } from "react-router-dom";
import { postGame } from "../fetches/methods";

export default function Create() {

    const navigate = useNavigate();
    const onCreate = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const gameData = Object.fromEntries(formData);

        const user = JSON.parse(localStorage.getItem("user"));

        if (!user?.accessToken) {
            alert("You are not logged in");
            return;
        }

        try {
            await postGame(gameData, user.accessToken);
            alert("Game created!");
            navigate('/details/:id');
        } catch (err) {
            alert(err.message);
        }
    };


    return (
        <>
            {/* add Page ( Only for logged-in users ) */}
            <section id="add-page">
                <form id="add-new-game" onSubmit={onCreate}>
                    <div className="container">
                        <h1>Add New Game</h1>
                        <div className="form-group-half">
                            <label htmlFor="gameName">Game Name:</label>
                            <input
                                type="text"
                                id="gameName"
                                name="title"
                                placeholder="Enter game title..."
                            />
                        </div>
                        <div className="form-group-half">
                            <label htmlFor="genre">Genre:</label>
                            <input
                                type="text"
                                id="genre"
                                name="genre"
                                placeholder="Enter game genre..."
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
                            />
                        </div>
                        <div className="form-group-half">
                            <label htmlFor="releaseDate">Release Date:</label>
                            <input
                                type="date"
                                id="releaseDate"
                                name="date"
                            />
                        </div>
                        <div className="form-group-full">
                            <label htmlFor="imageUrl">Image URL:</label>
                            <input
                                type="text"
                                id="imageUrl"
                                name="imageUrl"
                                placeholder="Enter image URL..."
                            />
                        </div>
                        <div className="form-group-full">
                            <label htmlFor="summary">Summary:</label>
                            <textarea
                                name="summary"
                                id="summary"
                                rows={5}
                                placeholder="Write a brief summary..."
                                defaultValue={""}
                            />
                        </div>
                        <input className="btn submit" type="submit" defaultValue="ADD GAME" />
                    </div>
                </form>
            </section>
        </>
    );
}