export const token = (function(){
    let token = 0;
    return {
        setToken: function(tok) { token = tok; },
        getToken: function() { return token; }
    }
})()