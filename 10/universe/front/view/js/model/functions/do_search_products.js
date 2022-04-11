import * as manager from "../../controller/manager.js"

export async function do_search_products(){
    document.getElementById("do_search").onclick = () => 
    {

        

        fetch(manager.url+'/uni/api/getSearchResult', {method: 'GET', headers: {Authentication: manager.token.getToken()}})
        .then(function(response) 
        {
            return response.text();
        })
        .then(function(data) 
        {
            alert(data);
        });
    }
}