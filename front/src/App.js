import './App.css';
import React from "react";
import TopPagePhotos from "./components/TopPagePhotos.js";
import DayPlan from "./components/DayPlan.js";
import Person from "./components/Person.js";
import TextAndDateInformation from "./components/TextAndDateInformation.js";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Users from "./components/Users";
import PlaceInformation from "./components/PlaceInformation";
import Recommendations from "./components/Recommendations";
import Contacts from "./components/Contacts";

function MainPage() {

    return (
        <html>
        <head>

            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Bad+Script&display=swap" rel="stylesheet"/>

            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link
                href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
                rel="stylesheet"/>
        </head>
        <body>


        <div className="page">

            <div>
                <TopPagePhotos/>
                <TextAndDateInformation/>
                <DayPlan/>
                <PlaceInformation/>
                <Recommendations/>
                <Person/>
                <Contacts/>
            </div>

        </div>
        </body>
        </html>
    )
}

function UserCheckPage() {
    return (
        <body>
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Bad+Script&display=swap" rel="stylesheet"/>
        </head>

        <div className="page">

            <div>
                <Users/>
            </div>

        </div>
        </body>
    )
}


function App() {
    return (

        <Router>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/users" element={<UserCheckPage/>}/>
            </Routes>
        </Router>

    );
}

export default App;
