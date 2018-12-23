//Jascript Object Document 
xhr=new XMLHttpRequest();
// get an XMLHttpRequst fun to xhr

url="http://api.apixu.com/v1/current.json?key= 351f428e95d64053a2c150636182312&q="; // this link with api key
function disp(){

    var entry=document.getElementById("search").value; // geting the value of search box
    
    xhr.open('GET',url+entry,true)
xhr.responseType='text';
xhr.send();
}
xhr.onload = function(){
    myObj=JSON.parse(xhr.response);
    console.log(myObj);
    document.getElementById("city").innerHTML=myObj.location.name;
document.getElementById("state").innerHTML=myObj.location.region;
document.getElementById("country").innerHTML=myObj.location.country;
document.getElementById("temp").innerHTML=myObj.current.temp_c +"&deg;";
document.getElementById("lat").innerHTML=myObj.location.lat;
document.getElementById("lon").innerHTML=myObj.location.lon;
document.getElementById("hum").innerHTML=myObj.current.humidity;
}
