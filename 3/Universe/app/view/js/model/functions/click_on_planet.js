import * as manager from "../../controller/manager.js"

export async function click_on_planet(){
    let score = 1
    document.getElementById("clickOnPlanet").onclick = () => {
        document.getElementById("setScore").innerHTML = score++;
    }
}