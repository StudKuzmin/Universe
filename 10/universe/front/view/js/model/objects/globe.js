import * as manager from "../../controller/manager.js"
import Globe from 'globe.gl'

export const globe = (function(){
    const myGlobe = Globe();

    function clickOnePlanet(){
        document.getElementById('score').innerHTML = manager.score.getScore();
        manager.score.incScore();
    }
    return {
        showGlobe: function(url){
            myGlobe(url)
                .globeImageUrl("./src/planets_textures/planet2.png")
                .showAtmosphere(true) // Свечение вокруг
                .atmosphereColor("yellow")
                .backgroundImageUrl("./src/planets_textures/sky.png");
        },
        globeClick: function(url) { 
            myGlobe(url)
                .onGlobeClick(clickOnePlanet);
        }
    }
})()