import * as manager from "../../controller/manager.js"

export async function to_login_PAGE() {
    document.getElementById("log_button").onclick = () => 
    {
        document.body.innerHTML = manager.login_PAGE;
        manager.do_login();
    }
}