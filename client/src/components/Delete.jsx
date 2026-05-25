import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deleteGame, getOneGame  } from "../fetches/methods";

export default function Delete() {
    const { id } = useParams();
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));
    const token = user?.accessToken;

    const [deletee, setDelete] = useState(null);
    
    useEffect(() => {
            getOneGame(id).then(data => setDelete(data));
        }, [id]);
    
        if (!deletee) {
            return <p>Loading...</p>;
        }

    const onDelete = async () => {
        await deleteGame(id, token);
        navigate('/');
    };

    return (
        <>
            {/* add Page ( Only for logged-in users ) */}
            <section id="edit-page">
                <form id="add-new-game">
                    <div className="container">
                        <h1>Are you sure you want to delete this game?</h1>
                        <button type="button" className="btn submit bg-danger" onClick={onDelete}>Yes, delete</button>
                    </div>
                </form>
            </section>
        </>
    );
}