import * as manager from "../../controller/manager.js"

export async function do_register(){
    document.getElementById("to_register").onclick = () => {
        // function rand() {
        //     return Math.random().toString(36);
        // }
        // let token = rand() + rand() + rand();
        let login = document.getElementById("log_data").value;
        let password = document.getElementById("pas_data").value;

        let regData = {
            // id: token,
            login: login,
            password: password
        };

        fetch('/app/api/regData', {method: 'POST', headers: {'Content-Type': 'application/json;charset=utf-8'},body: JSON.stringify(regData)})
        .then(function(response) 
        {
            return response.text();
        })
        .then(function(data) 
        {
            if (data == 'true')
                document.body.innerHTML = "nice reg";
            else
                document.body.innerHTML = "bad reg";
        });

        
    }
}