export const score = (function(){
    let score = 0;
    return {
        incScore: function() { score++ },
        setScore: function(sc) { score = sc; },
        getScore: function() { return score; }
    }
})()