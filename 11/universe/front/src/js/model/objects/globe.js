import * as manager from "../../controller/manager.js"
import Globe from 'globe.gl'

export class Planet {
    #planet = null;

    constructor(url){
        this.#planet = Globe()(url);
    }
    clickOnePlanet(){
        document.getElementById('score').innerHTML = manager.score.getScore();
        manager.score.incScore();
    }
    setGlobeImageUrl(url) {
        this.#planet(url)
            .globeImageUrl("./src/planets_textures/planet2.png")
            .showAtmosphere(true) // Свечение вокруг
            .atmosphereColor("red")
            .backgroundImageUrl("./src/planets_textures/sky.png");
            // .onGlobeReady(this.changePlanet);
    }
    showGlobe(){
        this.#planet
            .globeImageUrl("./src/planets_textures/planet2.png")
            .showAtmosphere(true) // Свечение вокруг
            .atmosphereColor("yellow")
            .backgroundImageUrl("./src/planets_textures/sky.png")
            // .onGlobeReady(this.changePlanet)
            .controls().autoRotate = true;
        // this.#planet.renderer().render(this.#planet.scene(), this.#planet.camera())

        
        // this.#planet.renderer().clear(true, true, true);
        // document.getElementById()
    

        
    }
    globeClick() { 
        this.#planet
            // .globeImageUrl("./src/planets_textures/planet2.png")
            // .showAtmosphere(true) // Свечение вокруг
            // .atmosphereColor("yellow")
            // .backgroundImageUrl("./src/planets_textures/sky.png")
            // .onGlobeReady(this.changePlanet)
            .onGlobeClick(this.clickOnePlanet);
    }
}