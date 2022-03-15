import * as manager from "../../controller/manager.js"

export async function do_search_products(){
    document.getElementById("do_search").onclick = () => 
    {
        let search_result = document.getElementById('search_result');
        search_result.innerHTML = '';

        let div_search_result = document.createElement("div");
        div_search_result.id = 'div_search_result';
        // div_search_result.innerHTML = Math.random();

        

        fetch('/app/api/getSearchResult', {method: 'GET', headers: {Authentication: manager.token.getToken()}})
        .then(function(response) 
        {
            return response.text();
        })
        .then(function(data) 
        {
            div_search_result.innerHTML = data;
            document.getElementById("search_result").appendChild(div_search_result);
        });
    }
}