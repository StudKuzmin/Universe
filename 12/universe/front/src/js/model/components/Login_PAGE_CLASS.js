import * as manager from "../../controller/manager.js"
import '../../../classes.css'
import React, { useState, Component, useRef, createRef, useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'

export class Login_PAGE_CLASS extends Component {
    constructor(props){
        super(props);
        this.globeRef = createRef();
        // this.state = { planet: new manager.Planet() }
    }

    _CheckLogin = async (login, password) => {
        let logData = {
            login: login,
            password: password
        };
        let key = NaN;

        await fetch(manager.url+'/uni/api/logData', {method: 'POST', headers: {'Content-Type': 'application/json;charset=utf-8'},body: JSON.stringify(logData)})
        .then(function(response) 
        {
            return response.text();
        })
        .then(function(data) 
        {
            if(data == "false")
            {    
                const colorRED = {color: 'red'};
                key = <h1 style={colorRED}>BAD LOGIN</h1>
            }
            else 
            {
                key = <Navigate to='/Game'/>
                manager.token.setToken(data);
                // document.body.innerHTML = manager.game_PAGE;
                // manager.globe.showGlobe(document.getElementById('Planet_game_PAGE'));
                // manager.globe.globeClick(document.getElementById('Planet_game_PAGE'));
                
            }
        });

        return key;
    }

    _Login_PAGE = () => {
        let [log, changeLog] = useState('');
        let [pas, changePas] = useState('');
        let [key, changeKey] = useState('');
        let [containerPlanet, changeContainerPlanet] = useState();

        useEffect(() => {
            // this.state.planet.ShowGlobe();
            // changeContainerPlanet(containerPlanet = this.state.planet.getGlobe());
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
                            this._CheckLogin(log, pas).then(result => changeKey(key = result));
                            // changeContainerPlanet(containerPlanet = null);
                        }
                    }/>

                    {key}
                </div>
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