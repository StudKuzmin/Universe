import * as manager from "../../controller/manager.js"
import '../../../classes.css'
import React, { useState, Component, useRef, createRef, useEffect } from 'react'

export class Login_PAGE_CLASS extends Component {
    constructor(props){
        super(props);
        this.globeRef = createRef();
        this.state = { key: NaN }
        this.loadAnimation = createRef();
    }

    _setKey = (key) => {
        this.state.key = key;
    }

    _doLogin = async (login, password) => {
        let logData = {
            login: login,
            password: password
        };

        let key = NaN;

        await manager.controller.fetchTo_LogData(logData).then(data => key = data);

        return key;
    }

    _Login_PAGE = () => {
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
                    <h1>LOGIN</h1>
                    LOGIN<br/>
                    <input type='text' id='log_data' onChange={event => changeLog(log = event.target.value)}/><br/>
                    PASSWORD<br/>
                    <input type='text' id='pas_data' onChange={event => changePas(pas = event.target.value)}/><br/><br/>
                    <input type='button' value='ВОЙТИ' id='to_login' onClick={() => {
                        manager.lottieAnimation.loadAnimation(this.loadAnimation.current);

                        this._doLogin(log, pas).then(result => {
                            changeKey(key = result);
                            manager.lottieAnimation.loadAnimationDelete();
                        });
                    }}/>

                    { key }
                </div>
                <div className='loadAnimation' ref={ this.loadAnimation}></div>
            </div>
        );
    }
    
    render(){
        return (
            <div>            
                <this._Login_PAGE/> 
            </div>
        );
    }
    
}