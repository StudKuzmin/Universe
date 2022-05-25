import * as manager from "../../controller/manager.js"
import '../../../classes.css'
import { useEffect, createRef, useRef, useState, Component } from 'react'
import { Link } from 'react-router-dom'

// export const Game_PAGE = () => {
//     let [containerPlanet, changeContainerPlanet] = useState();
//     useEffect(() => {
//         manager.planet.game();
//         changeContainerPlanet(containerPlanet = manager.planet.getPlanet());
//     }, []);

//     let fieldLifeRef = useRef(null);
//     let scoreRef = useRef(null);

//     return (
//         <div>
//             {containerPlanet}
//             <canvas id='planetInfo' ref={fieldLifeRef}/>

            

//             <font color='black' size='6'>
//                 <div className ='Score' id='score' ref={scoreRef}></div>
//             </font>
            
//         </div>
//     );
// };

export class Game_PAGE_CLASS extends Component{
    constructor(props){
        super(props);
        this.fieldLifeRef = createRef(null);
        this.scoreRef = createRef(null);
    }

    _Show_Game = () =>{
        let [containerPlanet, changeContainerPlanet] = useState();
        let [score, changeScore] = useState(manager.score.getScore());

        useEffect(() => {
            manager.planet.game();
            // changeScore(score = manager.score.getScore);
            changeContainerPlanet(containerPlanet = manager.planet.getPlanet());
        }, []);

        return (
            <div>
                {containerPlanet}
                <canvas id='planetInfo' ref={this.fieldLifeRef}/>
                
                <div className ='Score' id='score' ref={this.scoreRef}></div>

                <div className ='AddRed' id='addRed' onClick={() => {
                    if (Number(document.getElementById('score').textContent) >= 10 )
                    {
                        manager.organisms.addOrganism('red');
                        manager.score.setScore(manager.score.getScore() - 10);
                        document.getElementById('score').innerHTML = manager.score.getScore();
                    }
                    else
                    {
                            document.getElementById('addRed').innerHTML = "NOT ENOUGH POINTS!";
                            setTimeout(() => {
                                document.getElementById('addRed').innerHTML = "ADD RED";
                            }, 2000);
                    }
                }}>ADD RED</div>
                <div className ='AddWhite' id='addWhite' onClick={() => {
                    if (Number(document.getElementById('score').textContent) >= 10 )
                    {
                        manager.organisms.addOrganism('white');
                        manager.score.setScore(manager.score.getScore() - 10);
                        document.getElementById('score').innerHTML = manager.score.getScore();
                    }
                    else
                    {
                            document.getElementById('addWhite').innerHTML = "NOT ENOUGH POINTS!";
                            setTimeout(() => {
                                document.getElementById('addWhite').innerHTML = "ADD WHITE";
                            }, 2000);
                    }   
                }}>ADD WHITE</div>
                <div className ='AddBlack' id='addBlack' onClick={() => {
                    if (Number(document.getElementById('score').textContent) >= 10 )
                    {
                        manager.organisms.addOrganism('black');
                        manager.score.setScore(manager.score.getScore() - 10);
                        document.getElementById('score').innerHTML = manager.score.getScore();
                    }
                    else
                    {
                            document.getElementById('addBlack').innerHTML = "NOT ENOUGH POINTS!";
                            setTimeout(() => {
                                document.getElementById('addBlack').innerHTML = "ADD BLACK";
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