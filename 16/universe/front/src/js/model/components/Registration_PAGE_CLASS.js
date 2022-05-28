import * as manager from "../../controller/manager.js"
import '../../../classes.css'
import React, { useState, Component, useEffect, createRef } from 'react'

export class Registration_PAGE_CLASS extends Component {
    constructor(props){
        super(props);
        this.globeRef = createRef();
        this.loadAnimation = createRef();
    }
    _DoRegister = async (login, password) => {
        let regData = {
            login: login,
            password: password
        };
        let key = NaN;
    
        await manager.controller.fetchTo_RegData(regData).then(data => key = data);

        return key;
    }

    _Registration_PAGE = () => {
        let [log, changeLog] = useState('');
        let [pas, changePas] = useState('');
        let [key, changeKey] = useState('');
        let [containerPlanet, changeContainerPlanet] = useState();

        useEffect(() => {
            manager.planet.showPlanet();
            changeContainerPlanet(containerPlanet = manager.planet.getPlanet());
        }, []);

        
        return (
            <div>
                {containerPlanet}

                <div className='dataWindow'>
                    <h1>REGISTRATION</h1>
                    LOGIN<br/>
                    <input type='text' id='log_data' onChange={event => changeLog(log = event.target.value)}/><br/>
                    PASSWORD<br/>
                    <input type='text' id='pas_data' onChange={event => changePas(pas = event.target.value)}/><br/><br/><br/>

                    <input type='button' value='РЕГИСТРАЦИЯ' id='to_register' onClick={() => {
                        manager.lottieAnimation.loadAnimation(this.loadAnimation.current);

                        this._DoRegister(log, pas).then(result => { 
                            changeKey(key = result); 
                            manager.lottieAnimation.loadAnimationDelete();
                        });
                    }}/>

                    {key}
                </div>
                <div className='loadAnimation' ref={this.loadAnimation}></div>
            </div>
        );
    }
    render(){
        return (
            <div>
                <this._Registration_PAGE/>

            </div>
        );
    }
}