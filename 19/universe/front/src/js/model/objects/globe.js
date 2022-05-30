import * as manager from "../../controller/manager.js"
import Globe from 'react-globe.gl'
import {createRef, Component, useRef, useEffect, useState, useMemo } from 'react'

export class Planet {
    _globeRef = null;
    _planet = null;
    _showPlatInfo = true;

    constructor(){
        this.globeRef = createRef();

        this.state = {planet: null};
    }

    _getRandomValue(min, max){
        return Math.round(Math.random() * (max - min) + min);
    }

    _PlanetViz = (props) => { 
        const MAP_CENTER = { lat: 40, lng: 40, altitude: 1 };


        useEffect(()=>{
            this.globeRef.current.controls().autoRotate = true;
            // this.globeRef.current.pointOfView(MAP_CENTER, 4000);
        }, [])

        return ( 
            <Globe
                ref={this.globeRef}
                globeImageUrl={props.globeImageUrl}
                showAtmosphere={true}
                atmosphereColor='yellow'
                backgroundImageUrl="./src/planets_textures/sky.png"  
                showGlobe={props.showGlobe}
                onGlobeRightClick={props.onGlobeRightClick}
                onGlobeClick={props.onGlobeClick}
                onPointHover={props.onPointHover}
                
            />
        );
    }

    game = () => {
        manager.fieldLife.start('planetInfo');
        let scoreRef = manager.domRefs.getElement("scoreRef");

        scoreRef.innerText = manager.score.getScore();

        this.state.planet = <this._PlanetViz 
            onGlobeRightClick={() => {
                manager.score.incScore();
                scoreRef.innerText = manager.score.getScore();
            }}
            onGlobeClick={() => {
                if (this._showPlatInfo == true){
                    manager.fieldLife.showField();
                    this._showPlatInfo = false;   
                }
                else if (this._showPlatInfo == false){
                    manager.fieldLife.hideField();
                    this._showPlatInfo = true;
                }
            }}
            globeImageUrl={manager.planetURL[1]}
        />
    }
    showPlanet = () => {
        this.state.planet = <this._PlanetViz  globeImageUrl={manager.planetURL[1]}/>
    }
    changePlanet = () => {
        let scoreRef = manager.domRefs.getElement("scoreRef");

        this.state.planet = <this._PlanetViz 
            onGlobeRightClick={() => {
                manager.score.incScore();
                scoreRef.innerText = manager.score.getScore();
            }}
            onGlobeClick={() => {
                if (this._showPlatInfo == true){
                    manager.fieldLife.showField();
                    this._showPlatInfo = false;   
                }
                else if (this._showPlatInfo == false){
                    manager.fieldLife.hideField();
                    this._showPlatInfo = true;
                }
            }}
            globeImageUrl={manager.planetURL[this._getRandomValue(0, 8)]}
        />
    }

    getPlanet = () => (
        <div>
            {this.state.planet}
        </div>
    )
}

export let planet = new Planet();


// let canvas = document.getElementById('planetInfo');
// canvas.className = 'showPlanetInfo';
// function drawPixel(context, x, y, color) {
//     let roundedX = Math.round(x);
//     let roundedY = Math.round(y);
//     context.fillStyle = color || '#000';
//     context.fillRect(roundedX, roundedY, 3, 2);
// }

// var context = canvas.getContext('2d');
// function test(){
//     let x = Math.random() * 200;
//     let y = Math.random() * 200;

//     drawPixel(context, x, y, 'white'); // x=20 y=10
// }

// test();
// test();
// test();