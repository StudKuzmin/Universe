import * as manager from "../../controller/manager.js"
import Globe from 'react-globe.gl'
import {createRef, Component, useRef, useEffect, useState } from 'react'

export class Planet {
    _globeRef = null;
    _planet = null;
    _showPlatInfo = true;

    constructor(){
        this.globeRef = createRef();
        this.state = {planet: null};
    }

    _PlanetViz = (props) => { 
        useEffect(()=>{
            this.globeRef.current.controls().autoRotate = true;
        }, [])
        return ( 
            <Globe
                ref={this.globeRef}
                globeImageUrl="./src/planets_textures/planet2.png"
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
        let fieldLife = new manager.FieldLife('planetInfo');

        document.getElementById('score').innerHTML = manager.score.getScore();

        this.state.planet = <this._PlanetViz 
            onGlobeRightClick={() => {
                manager.score.incScore();
                document.getElementById('score').innerHTML = manager.score.getScore(); 
            }}
            onGlobeClick={() => {
                if (this._showPlatInfo == true){
                    fieldLife.showField();
                    


                    this._showPlatInfo = false;   
                }
                else if (this._showPlatInfo == false){
                    fieldLife.hideField();



                    
                    this._showPlatInfo = true;
                }
            }}
        />
    }
    showPlanet = () => {
        this.state.planet = <this._PlanetViz />
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