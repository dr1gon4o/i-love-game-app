import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { deleteGame } from "../fetches/methods";
import { useNavigate } from "react-router-dom";

export default function Delete() {
    const { id } = useParams();
    const navigate = useNavigate();
    const token = localStorage.getItem('accessToken');



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
                        <button className="btn submit bg-danger" onClick={onDelete}>Yes, delete</button>
                    </div>
                </form>
            </section>
        </>
    );
}