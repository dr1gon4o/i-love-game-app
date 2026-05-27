import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getComments, postComment } from "../fetches/methods";
import { useNavigate } from "react-router-dom";

export default function Comments() {

    const { id } = useParams();

    const navigate = useNavigate();
    // const user = JSON.parse(localStorage.getItem("user"));

    const [comments, setComments] = useState({});
    useEffect(() => {
        getComments(id).then(data => setComments(data));
    }, [id]);


    const onComment = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const gameData = Object.fromEntries(formData);

        const user = JSON.parse(localStorage.getItem("user"));

        try {
            await postComment(gameData, user.accessToken);
            alert("Comment created!");
            // navigate('/details/:id');
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <section id="game-details">

            <div className="info-section">
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {comments.length > 0 ? (
                            comments.map(comment => (
                                <li className="comment" key={comment._id}>
                                    <p>
                                        Content: {comment.comment}
                                    </p>
                                </li>
                            )
                            )) : (
                            <p className="no-comment">No comments.</p>

                        )}
                    </ul>
                </div>

                <article className="create-comment">
                    <label>Add new comment:</label>
                    <form className="form" onSubmit={onComment}>
                        <textarea type="text"
                            id="comment"
                            name="comment"
                            placeholder="Comment......"
                            defaultValue={""} />
                        <input className="btn submit" type="submit" defaultValue="Add Comment" />
                    </form>
                </article>
            </div>

        </section >

    );

}