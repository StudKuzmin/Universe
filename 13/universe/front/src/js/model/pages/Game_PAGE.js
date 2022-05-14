import * as manager from "../../controller/manager.js"
import '../../../classes.css'
import { useEffect, createRef, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export const Game_PAGE = () => {
    let [containerPlanet, changeContainerPlanet] = useState();
    useEffect(() => {
        // let planet = new manager.Planet();
        // planet.ShowGlobe();
        // changeContainerPlanet(containerPlanet = planet.getGlobe());
        manager.planet.showPlanet();
        manager.planet.clickOnePlanet();
        changeContainerPlanet(containerPlanet = manager.planet.getPlanet());
    }, []);

    return (
        <div>
            {containerPlanet}
            <font color='black' size='6'>
                <div className ='Score' id='score'></div>
            </font>
        </div>
    );
};
