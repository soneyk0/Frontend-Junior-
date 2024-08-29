import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../services/redux/store";
import {logout} from "../../services/redux/reducers/authSlice";

const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.auth.user);

    return (
        <div>

            <div className={s.header}>
                <div className={s.name}>Best Application</div>
                <div className={s.loginBlock}>
                    {user ? (
                        <button onClick={() => dispatch(logout())}>Log Out</button>
                    ) : (
                        <NavLink to={'/signIn'}>
                            <button className={s.buttonSingIn}>
                                Sign In
                            </button>
                        </NavLink>
                    )}
                </div>
            </div>
        </div>

    )
}

export default Header