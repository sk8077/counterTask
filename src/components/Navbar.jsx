import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, setLoading, setError } from '../redux/user/userSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Navbar = () => {
    const { user } = useSelector((state) => state.userState);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(setLoading(true));

        signOut(auth)
            .then(async (res) => {
                dispatch(setUser(null));
                dispatch(setLoading(false));
                dispatch(setError(null));
            })
            .catch((err) => {
                dispatch(setLoading(false));
                dispatch(setError(err.message));
            });
    };

    return (
        <nav className="navbar">
            <div className="container">
                <Link to="/">
                    <div className="logo">
                        <span className="logo-title">Counter</span>
                    </div>
                </Link>
                <ul>
                    <li className="nav-links">
                        <Link to="/">Home</Link>
                    </li>
                    {!user ? (
                        <>
                            <li className="nav-links">
                                <Link to="/login">LogIn</Link>
                            </li>
                            <li className="nav-links">
                                <Link to="/signup">SignUp</Link>
                            </li>
                        </>
                    ) : (
                        <li className="nav-links">
                            <button className='btn logout' onClick={handleLogout}>Logout</button>
                        </li>
                    )}
                </ul>

            </div>
        </nav>
    );
};

export default Navbar;
