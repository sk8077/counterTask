import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";

import { auth } from "../firebase";
import { setLoading, setError } from "../redux/user/userSlice";



const SignUp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isLoading, error } = useSelector((state) => state.userState);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const handleSubmission = () => {
        if (!email || !password) {
            dispatch(setError("Fill in all fields"));
            return;
        }

        dispatch(setLoading(true)); // Set loading to true

        createUserWithEmailAndPassword(auth, email, password)
            .then(async (res) => {
                await updateProfile(res.user, {
                    displayName: name,
                });
                dispatch(setLoading(false));
                setError(undefined)

                navigate("/login");
            })
            .catch((err) => {
                dispatch(setLoading(false));
                dispatch(setError(err.message));
                setEmail("")
                setName("")
                setPassword("")
            });
    };

    return (
        <div className="signup-container">
            <div className="signup-form">
                <h2>Signup</h2>

                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email address"
                />

                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password"
                />

                <label>Username</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter name"
                />

                <div className="error-message">
                    <b>{error}</b>
                </div>

                <button className="btn signup-button" disabled={isLoading} onClick={handleSubmission}>
                    {isLoading ? "Loading..." : "Sign Up"}
                </button>

                <p>
                    Already have an account?{" "}
                    <span>
                        <Link to="/login">Login</Link>
                    </span>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
