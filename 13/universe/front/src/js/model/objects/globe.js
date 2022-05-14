import * as manager from "../../controller/manager.js"
import Globe from 'react-globe.gl'
import {createRef, Component, useRef, useEffect, useState } from 'react'

export class Planet {
    _globeRef = null;
    _planet = null;
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
            />
        );
    }

    clickOnePlanet = () => {
        
        document.getElementById('score').innerHTML = manager.score.getScore();
        manager.score.incScore();   
        // this.globeRef.current.showGlobe = false;

        this.state.planet = <this._PlanetViz onGlobeRightClick={()=> {
                document.getElementById('score').innerHTML = manager.score.getScore();
                manager.score.incScore();   
            }
        }/>
    }
    showPlanet = () => {
        this.state.planet = <this._PlanetViz/>
    }

    getPlanet = () => (
        <div>
            {this.state.planet}
        </div>
    )
}

export let planet = new Planet();