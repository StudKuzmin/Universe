import * as manager from "./js/controller/manager.js"
import React, { useState, Component } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom'

// const App = () => (
//      <BrowserRouter>
//         <Routes>
//             <Route path='/Login' element={<manager.router.toLogin_PAGE/>}/>

//             <Route path='/Registration' element={<manager.router.toRegistration_PAGE/>}/>
//             <Route path='/Game' element={<manager.router.toGame_PAGE/>}/>
//             <Route path='/' element={<manager.router.toMain_PAGE/>}/>

//             <Route path='*' element={<manager.router.toNotFound_PAGE/>}/>
//         </Routes>
//      </BrowserRouter>
// );
// ReactDOM.createRoot(document.getElementById("Root")).render(<App/>);


let i = 0;
let worker = new Worker('console.js');

function f() {
    worker.addEventListener('message', function(e) {
        console.log('Worker said: ', e.data);
    }, false);
}
f();