(()=>{"use strict";const t=function(){class o{main_menu(){(async function(){document.getElementById("log_button").onclick=()=>{document.body.innerHTML="<html><div class = 'LeftPlanet'></div><div class='centerData'><h1>LOGIN</h1>LOGIN <br><input type='text' id='log_data'> <br>PASSWORD <br><input type='text' id='pas_data'> <br> <br> <br><input type='button' value='ВОЙТИ' id='to_login' style='height:50px; width:100px'></div><input type='button' id='do_search'></html>",async function(){document.getElementById("to_login").onclick=()=>{let n={login:document.getElementById("log_data").value,password:document.getElementById("pas_data").value};fetch("/univ1/api/logData",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(n)}).then((function(t){return t.text()})).then((function(n){"false"==n?alert("ERROR..."):(e.setToken(n),document.body.innerHTML="<html class ='MainMenuBackground'><div class ='Planet' id='clickOnPlanet'></div><font color='black' size='6'><div class ='Score' id='score'></div></font></html>",t.game())}))}}(),async function(){document.getElementById("do_search").onclick=()=>{fetch("/univ1/api/getSearchResult",{method:"GET",headers:{Authentication:e.getToken()}}).then((function(t){return t.text()})).then((function(t){alert(t)}))}}()}})(),async function(){document.getElementById("reg_button").onclick=()=>{alert("FFFASD"),document.body.innerHTML="<html><div class = 'LeftPlanet'></div><div class='centerData'><h1>REGISTRATION</h1>LOGIN <br><input type='text' id='log_data'> <br>PASSWORD <br><input type='text' id='pas_data'> <br> <br> <br><input type='button' value='РЕГИСТРАЦИЯ' id='to_register' style='height:50px; width:115px'></div></html>",async function(){document.getElementById("to_register").onclick=()=>{let t={login:document.getElementById("log_data").value,password:document.getElementById("pas_data").value};fetch("/univ1/api/regData",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(t)}).then((function(t){return t.text()})).then((function(t){document.body.innerHTML="true"==t?"nice reg":"bad reg"}))}}()}}()}game(){!async function(){document.getElementById("clickOnPlanet").onclick=()=>{document.getElementById("score").innerHTML=n.getScore(),n.incScore()}}()}}return{main_menu:function(){(new o).main_menu()},game:function(){(new o).game()}}}(),e=function(){let t=0;return{setToken:function(e){t=e},getToken:function(){return t}}}(),n=function(){let t=1;return{incScore:function(){t++},setScore:function(e){t=e},getScore:function(){return t}}}();t.main_menu()})();