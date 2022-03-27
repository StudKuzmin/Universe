import * as manager from "../../controller/manager.js"

export async function to_login_PAGE() {
    document.getElementById("log_button").onclick = () => 
    {
        alert("FFFF");
        document.body.innerHTML = manager.login_PAGE;
        manager.do_login();
        manager.do_search_products();
    }
}