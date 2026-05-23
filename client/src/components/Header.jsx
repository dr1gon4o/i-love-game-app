import { Link } from "react-router-dom";

export default function Header() {

    const logout = () => {
        localStorage.removeItem("user");
        window.location.reload();
    };

    const user = JSON.parse(localStorage.getItem("user"));


    return (
        <header>
            {/* Navigation */}
            <nav className="fs-6">
                <Link className="home" to="/">
                    <img src="./src/images/logo.png" alt="logo" />
                </Link>

                <Link to="/catalog">Catalog</Link>

                {/* Logged-in users */}
                {user ? (
                    <div id="user">
                        <Link to="/create">Add Game</Link>
                        <Link to="/" onClick={logout}>Logout</Link>
                    </div>
                ) : (
                    <div id="guest">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>

                )}


                {/* Guest users */}




            </nav>
        </header>

    );
}