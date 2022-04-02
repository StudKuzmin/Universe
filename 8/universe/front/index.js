import * as manager from "./view/js/controller/manager.js"
import Globe from 'globe.gl'

const myGlobe = Globe();
myGlobe(clickOnPlanet)
  .globeImageUrl("./src/planets_textures/planet1.png")
  .showAtmosphere(true) // Свечение вокруг
  .backgroundImageUrl("./src/planets_textures/sky.png")

manager.service.main_menu();
console.log("da");