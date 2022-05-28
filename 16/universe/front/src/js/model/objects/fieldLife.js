import * as manager from "../../controller/manager.js"
import Globe from 'react-globe.gl'
import {createRef, Component, useRef, useEffect, useState } from 'react'

class FieldLife {
    #canvas = NaN;
    #context = NaN;
    #offscreen = NaN;
    #worker = NaN;

    start = (id) => {
        this.canvas = document.getElementById(id);
        this.offscreen = this.canvas.transferControlToOffscreen();
        this.worker = new Worker('myOrganisms.js');

        this.#createLife();
    }
    #getRandomValue(min, max){
        return Math.round(Math.random() * (max - min) + min);
    }
    #startLiving = () => {
        let lastIndex = manager.organisms.getOrganisms().length - 1;

        let copyField = new Array(manager.organisms.getOrganisms().length)
        for (let i = 0; i < manager.organisms.getOrganisms().length; i++ )
        {
            copyField[i] = manager.organisms.getOrganisms()[i].slice();
        }

        for (let i = 0; i < manager.organisms.getOrganisms().length; i++)
        {
            for (let j = 0; j < manager.organisms.getOrganisms()[0].length; j++)
            {
                let currentOrganism = copyField[i][j];
                let enemies = 0;

                let red = 0;
                let white = 0;
                let black = 0;

                let redEnemies = 0;
                let whiteEnemies = 0;
                let blackEnemies = 0;

                let l = j - 1;
                let r = j + 1;
                let t = i - 1;
                let b = i + 1;
                if (i == 0)
                    t = lastIndex;
                if (i == lastIndex)
                    b = 0;
                if (j == 0)
                    l = lastIndex;
                if (j == lastIndex)
                    r = 0; 

                if (copyField[t][l] != currentOrganism) enemies++;
                if (copyField[t][l] != currentOrganism) enemies++;
                if (copyField[t][l] != currentOrganism) enemies++;
                if (copyField[t][l] != currentOrganism) enemies++;
                if (copyField[t][l] != currentOrganism) enemies++;
                if (copyField[t][l] != currentOrganism) enemies++;
                if (copyField[t][l] != currentOrganism) enemies++;
                if (copyField[t][l] != currentOrganism) enemies++;

                if (copyField[t][l] == 'red') red++;
                if (copyField[t][r] == 'red') red++;
                if (copyField[t][j] == 'red') red++;
                if (copyField[i][l] == 'red') red++;
                if (copyField[i][r] == 'red') red++;
                if (copyField[b][l] == 'red') red++;
                if (copyField[b][r] == 'red') red++;
                if (copyField[b][j] == 'red') red++;

                if (copyField[t][l] == 'black') black++;
                if (copyField[t][r] == 'black') black++;
                if (copyField[t][j] == 'black') black++;
                if (copyField[i][l] == 'black') black++;
                if (copyField[i][r] == 'black') black++;
                if (copyField[b][l] == 'black') black++;
                if (copyField[b][r] == 'black') black++;
                if (copyField[b][j] == 'black') black++;

                if (copyField[t][l] == 'white') white++;
                if (copyField[t][r] == 'white') white++;
                if (copyField[t][j] == 'white') white++;
                if (copyField[i][l] == 'white') white++;
                if (copyField[i][r] == 'white') white++;
                if (copyField[b][l] == 'white') white++;
                if (copyField[b][r] == 'white') white++;
                if (copyField[b][j] == 'white') white++;

                let organismsJSON = {};
                organismsJSON[red] = 'red';
                organismsJSON[black] = 'black';
                organismsJSON[white] = 'white';
                
                if (red != 0 && black != 0 && white != 0)
                    manager.organisms.getOrganisms()[i][j] = organismsJSON[Math.max(red, white, black)];

                if (currentOrganism == 'white' && white > 5)
                    manager.organisms.getOrganisms()[i][j] = 'dead';
                if (currentOrganism == 'black' && black > 5)
                    manager.organisms.getOrganisms()[i][j] = 'dead';
                if (currentOrganism == 'red' && red > 5)
                    manager.organisms.getOrganisms()[i][j] = 'dead';

            }
        }

        for (let i = 0; i < manager.organisms.getOrganisms().length; i++)
            for (let j = 0; j < manager.organisms.getOrganisms().length; j++)
                    this.#drawPixel(i, j, manager.organisms.getOrganisms()[i][j]);
    }
    #createLife = async () => {
        // manager.organisms.createOrganisms();
        // setInterval(() => {
        //     this.#startLiving();
        // }, 1000);

        this.worker.postMessage({canvas: this.offscreen}, [this.offscreen]);
        this.worker.onmessage = (e) => {
            console.log(e.data);
            document.getElementById("stats").innerHTML = e.data["red"];
        }
    }

    #drawPixel = (x, y, color, ctx) => {
        if (color == 'dead')
            this.context.clearRect(x, y, 1, 1);
        else {
            this.context.fillStyle = color || '#000';
            this.context.fillRect(x, y, 1, 1);
        }
        
    }


    showField = () => {
        this.canvas.className = 'showPlanetInfo';
    }
    hideField = () => {
        this.canvas.className = 'hidePlanetInfo';
    }
    addOrganism = (color) => {
        this.worker.postMessage(color);
    }
}

export const fieldLife = new FieldLife();