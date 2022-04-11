import * as manager from "../../controller/manager.js"

export async function do_register(){
    document.getElementById("to_register").onclick = () => {
        let login = document.getElementById("log_data").value;
        let password = document.getElementById("pas_data").value;

        let regData = {
            login: login,
            password: password
        };

        fetch(manager.url+'/uni/api/regData', {method: 'POST', headers: {'Content-Type': 'application/json;charset=utf-8'},body: JSON.stringify(regData)})
        .then(function(response) 
        {
            return response.text();
        })
        .then(function(data) 
        {
            if (data == 'true')
            {
                document.body.innerHTML = manager.main_PAGE;
                manager.globe.showGlobe(document.getElementById('Planet_main_PAGE'));
                manager.service.main_menu();
            }
            else
                document.body.innerHTML = "bad reg";
        });

        
    }
}