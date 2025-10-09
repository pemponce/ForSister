import './App.css';
import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import TopPagePhotos from "./components/TopPagePhotos.js";
import TextAndDateInformation from "./components/TextAndDateInformation.js";
import Users from "./components/Users";
import PlaceInformation from "./components/PlaceInformation";
import WeddingTimer from "./components/WeddingTimer";
import Author from "./components/Author";

function MainPage() {
    return (
        <div className="page">
            <div>
                <div className="fade-in" style={{ transitionDelay: '.05s' }}><TopPagePhotos/></div>
                <div className="fade-in" style={{ transitionDelay: '.15s' }}><TextAndDateInformation/></div>
                <div className="fade-in" style={{ transitionDelay: '.25s' }}><PlaceInformation/></div>
                <div className="fade-in" style={{ transitionDelay: '.35s' }}><WeddingTimer/></div>
                <div className="fade-in" style={{ transitionDelay: '.45s' }}><Author/></div>
            </div>
        </div>
    );
}

function UserCheckPage() {
    return (
        <div className="page">
            <div className="fade-in">
                <Users/>
            </div>
        </div>
    );
}

export default function App() {
    const [introDone, setIntroDone] = useState(false);

    useEffect(() => {
        const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
        if (reduce) {
            setIntroDone(true);
            document.body.classList.add('ready');
            return;
        }

        // Длительность заставки (в мс) — должно совпадать с CSS
        const INTRO_DURATION = 2500;

        const t = setTimeout(() => {
            setIntroDone(true);
            document.body.classList.add('ready'); // покажем контент сайта
        }, INTRO_DURATION);

        const onPageShow = (e) => {
            if (e.persisted) {
                clearTimeout(t);
                setIntroDone(true);
                document.body.classList.add('ready');
            }
        };
        window.addEventListener('pageshow', onPageShow);
        return () => {
            clearTimeout(t);
            window.removeEventListener('pageshow', onPageShow);
        };
    }, []);

    return (
        <>
            {/* Интро-оверлей поверх всего */}
            {!introDone && (
                <div className="intro">
                    <span className="intro-title">Георгий и Рената</span>
                </div>
            )}

            {/* ВАЖНО: прячем при загрузке только ЭТОТ контейнер, не body */}
            <div id="app-shell">
                <Router>
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="/users" element={<UserCheckPage/>}/>
                    </Routes>
                </Router>
            </div>
        </>
    );
}
