import React, {FormEvent, useState} from "react";
import s from './LoginPage.module.css'
import {useDispatch} from "react-redux";
import {useGetUserByUsernameQuery} from "../api/api";
import {useNavigate} from "react-router-dom";
import {login} from "./authSlice";


const LoginPage = () => {
    const [username, setUsername] = useState(' ');
    const [submit, setSubmit] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {data: users, error} = useGetUserByUsernameQuery(username, {
        skip: !submit,
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmit(true);
    };

    React.useEffect(() => {
        if (submit && users) {
            if (users.length > 0) {
                dispatch(login(users[0]));
                navigate('/');
            } else {
                alert('User not found');
                navigate('/');
            }
            setSubmit(false);
        }
    }, [submit, users, dispatch, navigate]);

    return (
        <div className={s.formBox}>
            <form onSubmit={handleSubmit}>
                <h1>Sign In</h1>
                <input type="text"
                       placeholder={'Username'}
                       className={s.userName}
                       onChange={(e) => setUsername(e.target.value)}/><br/>
                <button type='submit' className={s.buttonSend}>Send</button>
            </form>
            {error && <p>Error loading user data.</p>}
        </div>
    )
}

export default LoginPage
