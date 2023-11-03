import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";

import { auth } from "../firebase";
import { setUser, setLoading, setError } from "../redux/user/userSlice";



const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isLoading, error } = useSelector((state) => state.userState);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmission = () => {
        if (!email || !password) {
            dispatch(setError("Fill in all fields"));
            return;
        }

        dispatch(setLoading(true));


        signInWithEmailAndPassword(auth, email, password)
            .then(async (res) => {
                const user = {
                    uid: res.user.uid,
                    email: res.user.email,
                };

                dispatch(setUser(user));
                dispatch(setLoading(false));
                setError(undefined)

                navigate("/");
            })
            .catch((err) => {
                dispatch(setLoading(false));
                dispatch(setError(err.message));
                setEmail("")

                setPassword("")
            });
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Login</h2>

                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email address"
                    required
                />

                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password"
                    required
                />

                <div className="error-message">
                    <b>{error}</b>
                </div>

                <button className="btn login-button" disabled={isLoading} onClick={handleSubmission}>
                    {isLoading ? "Loading..." : "Login"}
                </button>

                <p>
                    Don't have an account?{" "}
                    <span>
                        <Link to="/signup">Sign up</Link>
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Login;
