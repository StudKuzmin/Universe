import * as manager from './manager.js'

class Controller{
    fetchTo_LogData = (logData) => {
        return (
            manager.model.fetchTo_LogData_Process(
                fetch(manager.url+'/uni/api/logData', {
                    method: 'POST', 
                    headers: {'Content-Type': 'application/json;charset=utf-8'},
                    body: JSON.stringify(logData)
                })
            )
        );
    }

    fetchTo_RegData = (regData) => {
        return (
            manager.model.fetchTo_regData_Process(
                fetch(manager.url+'/uni/api/regData', {
                    method: 'POST', 
                    headers: {'Content-Type': 'application/json;charset=utf-8'},
                    body: JSON.stringify(regData)
                })
            )
        );
    }
}

export const controller = new Controller();