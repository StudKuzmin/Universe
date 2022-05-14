import * as manager from "./js/controller/manager.js"
import React, { useState, Component } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom'

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

// let ws = new WebSocket('ws://localhost:8080/uni/helloName');

// ws.onopen = function(event) {
//     console.log('WS counter was opened: ' + event);
//     ws.send("NAAAAAME");      
// };
   
// ws.onmessage = function(event) {
//     console.log('ws counter got message: ' + event.data);      
// };