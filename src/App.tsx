import React from 'react';
import './App.css';
import Header from "./Header/Header";
import {Route, Routes} from "react-router-dom";
import LoginPage from "./Login/LoginPage";
import error404 from './images/404.png'
import CardsList from "./Cards/CardsList";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className={'app-content'}>
                <Routes>
                    <Route path="/" element={<CardsList/>}/>
                    <Route path="/cards" element={<CardsList/>}/>
                    <Route path="/signIn" element={<LoginPage/>}/>
                    <Route path='/*' element={<img src={error404} alt={'error 404'} className={'error'}/>}></Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;
