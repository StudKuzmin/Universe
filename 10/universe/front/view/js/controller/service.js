import * as manager from "./manager.js"

export const service = (function(){
    class Service {

        main_menu(){
            manager.to_login_PAGE();
            manager.to_registration_PAGE();
        }
    }


    return {
        main_menu: function() { 
            new Service().main_menu();
        }
    }
})();