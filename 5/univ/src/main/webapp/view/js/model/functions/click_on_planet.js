import * as manager from "../../controller/manager.js"

export async function click_on_planet(){
    document.getElementById("clickOnPlanet").onclick = () => {
        // console.log(manager.score.getScore());
        document.getElementById("score").innerHTML = manager.score.getScore();
        manager.score.incScore();
    }
}