import React, {FormEvent, useEffect, useState} from "react";
import s from './LoginPage.module.css'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {fetchAuth} from "../../services/redux/reducers/authSlice";
import {AppDispatch, RootState} from "../../services/redux/store";


const LoginPage = () => {
    const [username, setUsername] = useState(' ');
    const [submit, setSubmit] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const {user} = useSelector((state:RootState)=>state.auth)
    const navigate = useNavigate();


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmit(true);
        dispatch(fetchAuth(username))
    };

    useEffect(() => {
        if (submit) {
            if (!user) {
                alert('User not found');
            } else {
                navigate('/');
            }
        }
    }, [user]);

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
        </div>
    )
}

export default LoginPage
