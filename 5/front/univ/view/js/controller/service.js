import * as manager from "./manager.js"

export const service = (function(){
    class Service {

        main_menu(){
            manager.to_login_PAGE();
            manager.to_registration_PAGE();
        }

        game() {
            manager.click_on_planet();
        }
    }


    return {
        main_menu: function() { 
            new Service().main_menu();
        },
        game: function() {
            new Service().game();
        }
    }
})();