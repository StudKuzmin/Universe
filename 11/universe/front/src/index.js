import * as manager from "./js/controller/manager.js"
import React, { useState, Component } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom'
// import '../public/src/css/classes.css'

// manager.globe.showGlobe(document.getElementById('Planet_index_PAGE'));
// manager.service.main_menu();

// const Pg1 = () => (
	// "HELLO, WORLD!"
// );
// ReactDOM.createRoot(document.getElementById("Planet_index_PAGE")).render(<Pg1/>);

// const Greetings = (props) => <div>Hey you! {props.firstName} {props.lastName}!</div>;
// const App = () => (
//     <Greetings firstName="John" lastName="Smith" />
// );
// ReactDOM.createRoot(document.getElementById("Planet_index_PAGE")).render(<App/>);

const App = () => (
     <BrowserRouter>
        <Routes>
            <Route path='/Login' element={<manager.Login_PAGE_CLASS/>}/>

            <Route path='/Registration' element={<manager.Registration_PAGE_CLASS/>}/>
            <Route path='/Game' element={<manager.Game_PAGE/>}/>
            <Route path='/' element={<manager.Main_PAGE/>}/>

            <Route path='*' element={<manager.NotFound_PAGE/>}/>
        </Routes>
     </BrowserRouter>
);
ReactDOM.createRoot(document.getElementById("Root")).render(<App/>);
