import * as manager from "../../controller/manager.js"
import '../../../classes.css'
import React, { componentRef, createRef, useRef, useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

export const Main_PAGE = () => {
    let [containerPlanet, changeContainerPlanet] = useState();
    useEffect(() => {
        // let planet = new manager.Planet();
        // planet.ShowGlobe();
        // changeContainerPlanet(containerPlanet = planet.getGlobe());
        manager.planet.showPlanet();
        changeContainerPlanet(containerPlanet = manager.planet.getPlanet());
    }, []);
    
    return (
        <div>
            {containerPlanet}
            <div className ='dataWindow'>
                <h1> Welcome to your own Universe! </h1>
                <font color='black' size='6'>

                    <Link to="/Registration"><br/><br/><strong className ='button_reg' id='reg_button'>REGISTRATION</strong><br/></Link>

                    <Link to="/Login"><strong className ='button_log' id='log_button'>LOGIN</strong></Link>

                </font>
            </div>
        </div>);
};
