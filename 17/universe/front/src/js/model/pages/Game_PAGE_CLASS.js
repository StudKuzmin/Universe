import * as manager from "../../controller/manager.js"
import '../../../classes.css'
import { useEffect, createRef, useRef, useState, Component } from 'react'
import { Link } from 'react-router-dom'

export class Game_PAGE_CLASS extends Component{
    constructor(props){
        super(props);

        this.fieldLifeRef = createRef(null);
        this.scoreRef = createRef(null);

        this.redButtonRef = createRef(null);
        this.blackButtonRef = createRef(null);
        this.whiteButtonRef = createRef(null);

        this.statsRef = createRef(null);
    }

    _Show_Game = () =>{
        let [containerPlanet, changeContainerPlanet] = useState();

        useEffect(() => {
            manager.domRefs.addRef("scoreRef", this.scoreRef.current);
            manager.domRefs.addRef("redButtonRef", this.redButtonRef.current);
            manager.domRefs.addRef("blackButtonRef", this.blackButtonRef.current);
            manager.domRefs.addRef("whiteButtonRef", this.whiteButtonRef.current);
            manager.domRefs.addRef("statsRef", this.statsRef.current);

            manager.planet.game();
            changeContainerPlanet(containerPlanet = manager.planet.getPlanet());
        }, []);

        return (
            <div>
                {containerPlanet}
                <canvas id='planetInfo' width='300px' height='300px' ref={this.fieldLifeRef}/>
                <div className ='Score' id='score' ref={this.scoreRef}></div>
                <div className='Stats' id='stats' ref={this.statsRef}>
                </div>

                <div className ='AddRed' id='addRed' ref={this.redButtonRef} onClick={() => {
                    if (Number(this.scoreRef.current.textContent) >= 10 )
                    {
                        manager.fieldLife.addOrganism('red');
                        manager.score.setScore(manager.score.getScore() - 10);
                        this.scoreRef.current.innerText = manager.score.getScore();
                    }
                    else
                    {
                        this.redButtonRef.current.innerText = "NOT ENOUGH POINTS!";
                        setTimeout(() => {
                            this.redButtonRef.current.innerText = "ADD RED";
                        }, 2000);
                    }
                }}>ADD RED</div>
                <div className ='AddWhite' id='addWhite' ref={this.whiteButtonRef} onClick={() => {
                    if (Number(this.scoreRef.current.textContent) >= 10 )
                    {
                        manager.organisms.addOrganism('white');
                        manager.score.setScore(manager.score.getScore() - 10);
                        this.scoreRef.current.innerText = manager.score.getScore();
                    }
                    else
                    {
                        this.whiteButtonRef.current.innerText = "NOT ENOUGH POINTS!";
                        setTimeout(() => {
                            this.whiteButtonRef.current.innerText = "ADD WHITE";
                        }, 2000);
                    }   
                }}>ADD WHITE</div>
                <div className ='AddBlack' id='addBlack' ref={this.blackButtonRef} onClick={() => {
                    if (Number(this.scoreRef.current.textContent) >= 10 )
                    {
                        manager.organisms.addOrganism('black');
                        manager.score.setScore(manager.score.getScore() - 10);
                        this.scoreRef.current.innerText = manager.score.getScore();
                    }
                    else
                    {
                        this.blackButtonRef.current.innerText = "NOT ENOUGH POINTS!";
                        setTimeout(() => {
                            this.blackButtonRef.current.innerText = "ADD BLACK";
                        }, 2000);
                    }
                }}>ADD BLACK</div>
                
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