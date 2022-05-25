import * as manager from '../controller/manager.js'
import { Navigate } from 'react-router-dom'

class Model{
    fetchTo_LogData_Process = async (myFetch) => {
        let key = NaN;

        await myFetch
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
                manager.token.setToken(data);
                key = <Navigate to='/Game'/>;
            }
        });
            
        return key;
    }

    fetchTo_regData_Process = async (myFetch) => {
        let key = NaN;

        await myFetch
        .then(function(response) 
        {
            return response.text();
        })
        .then(function(data) 
        {
            if (data == 'true')
            {
                key = <Navigate to='/'/>
            }
            else
            {
                const colorRED = {color: 'red'};
                key = <h1 style={colorRED}>BAD REGISTRATION</h1>
            }
        });
            
        return key;
    }
}

export const model = new Model();