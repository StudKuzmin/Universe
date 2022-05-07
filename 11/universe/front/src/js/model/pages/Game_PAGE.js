import * as manager from "../../controller/manager.js"
import '../../../classes.css'
import { useEffect, createRef, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export const Game_PAGE = () => {
    const globeRef = useRef();

    useEffect(() => {
        let planet = new manager.Planet(globeRef.current);
        planet.showGlobe();
        planet.globeClick();
    }, [])

    return (
        <div>
            <div id = 'Planet_game_PAGE' ref={globeRef}></div>
            <font color='black' size='6'>
                <div className ='Score' id='score'></div>
            </font>
        </div>
    );
};
