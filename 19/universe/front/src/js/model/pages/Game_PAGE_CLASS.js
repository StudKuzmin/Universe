import * as manager from "../../controller/manager.js"
import '../../../classes.css'
import { useEffect, createRef, useRef, useState, Component } from 'react'
import { Link } from 'react-router-dom'

export class Game_PAGE_CLASS extends Component{
    constructor(props){
        super(props);

        this.state = {addOrganismsMenu: NaN};

        this.fieldLifeRef = createRef(null);
        this.scoreRef = createRef(null);

        this.redAddButtonRef = createRef(null);
        this.blackAddButtonRef = createRef(null);
        this.whiteAddButtonRef = createRef(null);
        this.redKillButtonRef = createRef(null);
        this.whiteKillButtonRef = createRef(null);
        this.blackKillButtonRef = createRef(null);

        this.destroyTheWorldRef = createRef(null);

        this.addOrganismsRef = createRef(null);
        this.addOrganismsMenuRef = createRef(null);
        this.addOrganismsBackButtonRef = createRef(null);

        this.planetMenuRef = createRef(null);
        this.PlanetMenuBackRef = createRef(null);
        this.PlanetTextureButtonRef = createRef(null);

        this.statsRef = createRef(null);
    }

    _Show_Game = () => {
        let [containerPlanet, changeContainerPlanet] = useState();
        let [showStats, changeShowStats] = useState(false);

        useEffect(() => {
            manager.domRefs.addRef("scoreRef", this.scoreRef.current);
            manager.domRefs.addRef("statsRef", this.statsRef.current);

            manager.planet.game();
            changeContainerPlanet(containerPlanet = manager.planet.getPlanet());
        }, []);

        return (
            <div>
                {containerPlanet}
                <canvas id='planetInfo' width='300px' height='300px' ref={this.fieldLifeRef}/>                

                <div className ='Score' id='score' ref={this.scoreRef}></div>
                <div className='ShowStats' id='stats' onClick = {() => {
                    if (showStats == true)
                    {
                        this.statsRef.current.className = 'ShowStats';
                        changeShowStats(showStats = false);
                    }
                    else
                    {
                        this.statsRef.current.className = 'HideStats';
                        changeShowStats(showStats = true);
                    }
                }} ref={this.statsRef}>
                </div>

                
                <div className='OrganismsButton' id='organismsButton' onClick = {() => {
                    this.addOrganismsMenuRef.current.className = 'ShowOrganismsMenu';
                    this.addOrganismsBackButtonRef.current.className = 'ShowOrganismsBackButton';

                    this.redAddButtonRef.current.className = 'ShowRedButton';
                    this.whiteAddButtonRef.current.className = 'ShowWhiteButton';
                    this.blackAddButtonRef.current.className = 'ShowBlackButton';

                    this.redKillButtonRef.current.className = 'ShowRedKillButton';
                    this.whiteKillButtonRef.current.className = 'ShowWhiteKillButton';
                    this.blackKillButtonRef.current.className = 'ShowBlackKillButton';
                    this.destroyTheWorldRef.current.className = 'ShowDestroyTheWorldButton';
                }}>ORGANISMS</div>
                <div className='PlanetButton' id='planetButton' onClick = {() => {
                    this.planetMenuRef.current.className = 'ShowPlanetMenu';
                    this.PlanetMenuBackRef.current.className = 'ShowPlanetBackButton';

                    this.PlanetTextureButtonRef.current.className = 'showPlanetTextureButton';
                }}>PLANET</div>
                


                <div ref={this.addOrganismsMenuRef}></div>
                <div ref={this.planetMenuRef}></div>

                <div ref={this.redAddButtonRef} onClick={() => {
                    if (Number(this.scoreRef.current.textContent) >= 10 )
                    {
                        manager.fieldLife.addOrganism('red');
                        manager.score.setScore(manager.score.getScore() - 10);
                        this.scoreRef.current.innerText = manager.score.getScore();
                    }
                    else
                    {
                        this.redAddButtonRef.current.innerText = "NOT ENOUGH POINTS!";
                        setTimeout(() => {
                            this.redAddButtonRef.current.innerText = "ADD RED";
                        }, 2000);
                    }

                }}>ADD RED</div>
                <div ref={this.whiteAddButtonRef} onClick={() => {
                    if (Number(this.scoreRef.current.textContent) >= 10 )
                    {
                        manager.fieldLife.addOrganism('white');
                        manager.score.setScore(manager.score.getScore() - 10);
                        this.scoreRef.current.innerText = manager.score.getScore();
                    }
                    else
                    {
                        this.whiteAddButtonRef.current.innerText = "NOT ENOUGH POINTS!";
                        setTimeout(() => {
                            this.whiteAddButtonRef.current.innerText = "ADD WHITE";
                        }, 2000);
                    }   
                }}>ADD WHITE</div>
                <div ref={this.blackAddButtonRef} onClick={() => {
                    if (Number(this.scoreRef.current.textContent) >= 10 )
                    {
                        manager.fieldLife.addOrganism('black');
                        manager.score.setScore(manager.score.getScore() - 10);
                        this.scoreRef.current.innerText = manager.score.getScore();
                    }
                    else
                    {
                        this.blackAddButtonRef.current.innerText = "NOT ENOUGH POINTS!";
                        setTimeout(() => {
                            this.blackAddButtonRef.current.innerText = "ADD BLACK";
                        }, 2000);
                    }
                }}>ADD BLACK</div>

                <div ref={this.redKillButtonRef} onClick={() => {
                    if (Number(this.scoreRef.current.textContent) >= 10 )
                    {
                        manager.fieldLife.killOrganism('red');
                        manager.score.setScore(manager.score.getScore() - 10);
                        this.scoreRef.current.innerText = manager.score.getScore();
                    }
                    else
                    {
                        this.redKillButtonRef.current.innerText = "NOT ENOUGH POINTS!";
                        setTimeout(() => {
                            this.redKillButtonRef.current.innerText = "KILL RED";
                        }, 2000);
                    }
                }}>KILL RED</div>
                <div ref={this.whiteKillButtonRef} onClick={() => {
                    if (Number(this.scoreRef.current.textContent) >= 10 )
                    {
                        manager.fieldLife.killOrganism('white');
                        manager.score.setScore(manager.score.getScore() - 10);
                        this.scoreRef.current.innerText = manager.score.getScore();
                    }
                    else
                    {
                        this.whiteKillButtonRef.current.innerText = "NOT ENOUGH POINTS!";
                        setTimeout(() => {
                            this.whiteKillButtonRef.current.innerText = "KILL WHITE";
                        }, 2000);
                    }
                }}>KILL WHITE</div>
                <div ref={this.blackKillButtonRef} onClick={() => {
                    if (Number(this.scoreRef.current.textContent) >= 10 )
                    {
                        manager.fieldLife.killOrganism('black');
                        manager.score.setScore(manager.score.getScore() - 10);
                        this.scoreRef.current.innerText = manager.score.getScore();
                    }
                    else
                    {
                        this.blackKillButtonRef.current.innerText = "NOT ENOUGH POINTS!";
                        setTimeout(() => {
                            this.blackKillButtonRef.current.innerText = "KILL BLACK";
                        }, 2000);
                    }
                }}>KILL BLACK</div>

                <div ref={this.destroyTheWorldRef} onClick={() => {
                    if (Number(this.scoreRef.current.textContent) >= 30 )
                    {
                        manager.fieldLife.destroyTheWorld();
                        manager.score.setScore(manager.score.getScore() - 30);
                        this.scoreRef.current.innerText = manager.score.getScore();
                    }
                    else
                    {
                        this.destroyTheWorldRef.current.innerText = "NOT ENOUGH POINTS!";
                        setTimeout(() => {
                            this.destroyTheWorldRef.current.innerText = "DESTROY THE WORLD";
                        }, 2000);
                    }
                }}>DESTROY THE WORLD</div>

                <div ref={this.PlanetTextureButtonRef} onClick={() =>{
                    manager.planet.changePlanet();
                    changeContainerPlanet(containerPlanet = manager.planet.getPlanet());
                }}>CHANGE PLANET</div>


                <div ref={this.addOrganismsBackButtonRef} onClick={()=>{
                    this.addOrganismsMenuRef.current.className = 'HideOrganismsMenu';
                    this.addOrganismsBackButtonRef.current.className = 'HideOrganismsBackButton';

                    this.redAddButtonRef.current.className = 'HideRedButton';
                    this.whiteAddButtonRef.current.className = 'HideWhiteButton';
                    this.blackAddButtonRef.current.className = 'HideBlackButton';

                    this.redKillButtonRef.current.className = 'HideRedKillButton';
                    this.whiteKillButtonRef.current.className = 'HideWhiteKillButton';
                    this.blackKillButtonRef.current.className = 'HideBlackKillButton';
                    this.destroyTheWorldRef.current.className = 'HideDestroyTheWorldButton';
                }}>BACK</div>

                <div ref={this.PlanetMenuBackRef} onClick={()=>{
                    this.planetMenuRef.current.className = 'HidePlanetMenu';
                    this.PlanetMenuBackRef.current.className = 'HidePlanetBackButton';

                    this.PlanetTextureButtonRef.current.className = 'HidePlanetTextureButton';
                }}>BACK</div>
            </div>
        );
    }

    render(){
        return (
            <div>
                <this._Show_Game/>
            </div>
        );
    }
}