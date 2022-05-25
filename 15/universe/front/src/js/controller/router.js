import * as manager from './manager.js'

class Router{
    toLogin_PAGE = () => ( <manager.Login_PAGE_CLASS/> )
    toRegistration_PAGE = () => ( <manager.Registration_PAGE_CLASS/> )
    toGame_PAGE = () => ( <manager.Game_PAGE_CLASS/> )
    toMain_PAGE = () => ( <manager.Main_PAGE/> )
    toNotFound_PAGE = () => ( <manager.NotFound_PAGE/> )
}


export const router = new Router();