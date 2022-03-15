import * as manager from "../../controller/manager.js"

export async function to_registration_PAGE() {
    document.getElementById("reg_button").onclick = () => 
    { 
        document.body.innerHTML = manager.registration_PAGE;
        manager.do_register();
    }
}