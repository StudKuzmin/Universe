import * as manager from "../../controller/manager.js"
import '../../../classes.css'
import React, { useState, Component, useEffect, createRef } from 'react'
import { Link, Navigate } from 'react-router-dom'

export class Registration_PAGE_CLASS extends Component {
    constructor(props){
        super(props);
        this.globeRef = createRef();
        // this.state = { planet: new manager.Planet() }
    }
    _Do_register = async (login, password) => {
        let regData = {
            login: login,
            password: password
        };
        let key = NaN;
    
        await fetch(manager.url+'/uni/api/regData', {method: 'POST', headers: {'Content-Type': 'application/json;charset=utf-8'},body: JSON.stringify(regData)})
        .then(function(response) 
        {
            return response.text();
        })
        .then(function(data) 
        {
            if (data == 'true')
            {
                key = <Navigate to='/'/>
                // document.getElementById('Planet_registration_PAGE').remove();


                // document.body.innerHTML = manager.selectPlanet_PAGE;
                // manager.globe.showGlobe(document.getElementById('Planet_selectPlanet_PAGE'));
                //  document.getElementById("changePlanet").onclick = () => 
                // {
                //     manager.globe.setGlobeImageUrl(document.getElementById('Planet_selectPlanet_PAGE'));
                // }
            }
            else
            {
                const colorRED = {color: 'red'};
                key = <h1 style={colorRED}>BAD REGISTRATION</h1>
            }
                // document.body.innerHTML = "<h1>bad reg</h1>"; 
        });

        return key;
    }

    _Registration_PAGE = () => {
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
                    <h1>REGISTRATION</h1>
                    LOGIN<br/>
                    <input type='text' id='log_data' onChange={event => changeLog(log = event.target.value)}/><br/>
                    PASSWORD<br/>
                    <input type='text' id='pas_data' onChange={event => changePas(pas = event.target.value)}/><br/><br/><br/>

                    <input type='button' value='РЕГИСТРАЦИЯ' id='to_register' onClick={() => {
                        this._Do_register(log, pas).then(result => changeKey(key = result));
                        // changeContainerPlanet(containerPlanet = null);
                    }}/>

                    {key}
                </div>
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