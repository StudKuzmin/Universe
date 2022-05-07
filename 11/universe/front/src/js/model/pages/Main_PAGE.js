import * as manager from "../../controller/manager.js"
import '../../../classes.css'
import React, { componentRef, createRef, useRef, useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

export const Main_PAGE = () => {
    // manager.globe.showGlobe(document.getElementById('Planet_main_PAGE'));
    
    let globeRef = useRef();
    
    useEffect(() => {
        let planet = new manager.Planet(globeRef.current);
        planet.showGlobe();
    }, []);

    return (
        <div>
            <div id='Planet_main_PAGE' ref={globeRef}></div>
            <div className ='dataWindow'>
                <h1> Welcome to your own Universe! </h1>
                <font color='black' size='6'>
                    <Link to="/Registration"><br/><br/><strong className ='button_reg' id='reg_button'>REGISTRATION</strong><br/></Link>
                    <Link to="/Login"><strong className ='button_log' id='log_button'>LOGIN</strong></Link>
                </font>
            </div>
        </div>);
};
