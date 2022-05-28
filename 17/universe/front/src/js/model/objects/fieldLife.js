import * as manager from "../../controller/manager.js"
import Globe from 'react-globe.gl'
import {createRef, Component, useRef, useEffect, useState } from 'react'

class FieldLife {
    #canvas = NaN;
    #context = NaN;
    #offscreen = NaN;
    #worker = NaN;
    #statsOnGamePAGE = NaN;

    start = (id) => { 
        this.canvas = document.getElementById(id);
        this.offscreen = this.canvas.transferControlToOffscreen();
        this.worker = new Worker('myOrganisms.js');

        this.#createLife();
    }
    #getRandomValue(min, max){
        return Math.round(Math.random() * (max - min) + min);
    }
    #createLife = async () => {
        // manager.organisms.createOrganisms();
        // setInterval(() => {
        //     this.#startLiving();
        // }, 1000);

        this.worker.postMessage({canvas: this.offscreen}, [this.offscreen]);
        this.worker.onmessage = (e) => {
            manager.domRefs.getElement("statsRef").innerText = "R: " + e.data["red"] + "\n" +
                                                               "B: " + e.data["black"] + "\n" +
                                                               "W: " + e.data["white"] + "\n" +
                                                               "YEAR: " + e.data["year"];
            // this.statsOnGamePAGE['red'] = e.data['red'];
            // this.statsOnGamePAGE['black'] = e.data['black'];
            // this.statsOnGamePAGE['white'] = e.data['white'];
            // this.statsOnGamePAGE['year'] = e.data['year'];
            
            // manager.domRefs.getElement("redStatRef").innerText = e.data["red"]
        }
    }
    // getStats = () => {
    //     return this.statsOnGamePAGE;
    // }

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