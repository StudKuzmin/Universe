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
        let [score, changeScore] = useState();

        useEffect(() => {
            manager.planet.game();
            // changeScore(score = manager.score.getScore);
            changeContainerPlanet(containerPlanet = manager.planet.getPlanet());
        }, []);

        return (
            <div>
                {containerPlanet}
                <canvas id='planetInfo' ref={this.fieldLifeRef}/>
                <font color='black' size='6'>
                    <div className ='Score' id='score' ref={this.scoreRef}></div>
                </font>
                
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