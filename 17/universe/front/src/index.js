import * as manager from "./js/controller/manager.js"
import React, { useState, Component } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom'

const App = () => (
     <BrowserRouter>
        <Routes>
            <Route path='/Login' element={<manager.router.toLogin_PAGE/>}/>

            <Route path='/Registration' element={<manager.router.toRegistration_PAGE/>}/>
            <Route path='/Game' element={<manager.router.toGame_PAGE/>}/>
            <Route path='/' element={<manager.router.toMain_PAGE/>}/>

            <Route path='*' element={<manager.router.toNotFound_PAGE/>}/>
        </Routes>
     </BrowserRouter>
);
ReactDOM.createRoot(document.getElementById("Root")).render(<App/>);

// let canvas = document.getElementById("myCanvas");
// let ctx = canvas.getContext("2d");

// let getRandomValue = (min, max) => {
//     return Math.round(Math.random() * (max - min) + min);
// }

// let field = new Array(10);
// for (let i = 0; i < field.length; i++) {
//     field[i] = new Array(10);
// }
// for (let i = 0; i < field.length; i++) {
//     for (let j = 0; j < field[0].length; j++)
//     {
//         switch(getRandomValue(0, 10))
//         {
//             case(1): field[i][j] = 'red'; break;
//             case(2): field[i][j] = 'white'; break;
//             case(3): field[i][j] = 'black'; break;
//             default: field[i][j] = 'dead'; break;
//         }
//     }
// }
// setInterval(() => {

//     let copyField = new Array(field.length)
//     for (let i = 0; i <field.length; i++ )
//     {
//         copyField[i] = field[i].slice();
//     }

//     let lastIndex = field.length - 1;
//     for (let i = 0; i < field.length; i++)
//     {
//         for (let j = 0; j <  field.length; j++)
//         {
//             let currentOrganism = copyField[i][j];
//             let enemies = 0;

//             let red = 0;
//             let white = 0;
//             let black = 0;

//             let redEnemies = 0;
//             let whiteEnemies = 0;
//             let blackEnemies = 0;

//             let l = j - 1;
//             let r = j + 1;
//             let t = i - 1;
//             let b = i + 1;
//             if (i == 0)
//                 t = lastIndex;
//             if (i == lastIndex)
//                 b = 0;
//             if (j == 0)
//                 l = lastIndex;
//             if (j == lastIndex)
//                 r = 0; 

//             if (copyField[t][l] != currentOrganism) enemies++;
//             if (copyField[t][l] != currentOrganism) enemies++;
//             if (copyField[t][l] != currentOrganism) enemies++;
//             if (copyField[t][l] != currentOrganism) enemies++;
//             if (copyField[t][l] != currentOrganism) enemies++;
//             if (copyField[t][l] != currentOrganism) enemies++;
//             if (copyField[t][l] != currentOrganism) enemies++;
//             if (copyField[t][l] != currentOrganism) enemies++;

//             if (copyField[t][l] == 'red') red++;
//             if (copyField[t][r] == 'red') red++;
//             if (copyField[t][j] == 'red') red++;
//             if (copyField[i][l] == 'red') red++;
//             if (copyField[i][r] == 'red') red++;
//             if (copyField[b][l] == 'red') red++;
//             if (copyField[b][r] == 'red') red++;
//             if (copyField[b][j] == 'red') red++;

//             if (copyField[t][l] == 'black') black++;
//             if (copyField[t][r] == 'black') black++;
//             if (copyField[t][j] == 'black') black++;
//             if (copyField[i][l] == 'black') black++;
//             if (copyField[i][r] == 'black') black++;
//             if (copyField[b][l] == 'black') black++;
//             if (copyField[b][r] == 'black') black++;
//             if (copyField[b][j] == 'black') black++;

//             if (copyField[t][l] == 'white') white++;
//             if (copyField[t][r] == 'white') white++;
//             if (copyField[t][j] == 'white') white++;
//             if (copyField[i][l] == 'white') white++;
//             if (copyField[i][r] == 'white') white++;
//             if (copyField[b][l] == 'white') white++;
//             if (copyField[b][r] == 'white') white++;
//             if (copyField[b][j] == 'white') white++;

//             let organismsJSON = {};
//             organismsJSON[red] = 'red';
//             organismsJSON[black] = 'black';
//             organismsJSON[white] = 'white';
            
//             if (red != 0 || black != 0 || white != 0)
//                 field[i][j] = organismsJSON[Math.max(red, white, black)];
//         }
//     }
// 
//     for (let i = 0; i < field.length; i++)
//     for (let j = 0; j < field.length; j++)
//     {
//         if (field[i][j] == 'dead')
//             ctx.clearRect(i, j, 1, 1);
//         else {
//             ctx.fillStyle = field[i][j] || '#000';
//             ctx.fillRect(i, j, 1, 1);
//         }
//     }
// }, 1000)