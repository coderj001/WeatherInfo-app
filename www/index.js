/* 
This javascript code build for creating cordova/phonegap application who's uses to show the current weather information for any entered location.
*/
function onLoad() {
    if(navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|Netscape)/)){
        document.addEventListener('deviceready', onDeviceReady(), false);
    }           // onLoad funtion will be called when the body tag is loaded. Within the onLoad function i have called onDeviceReady(). The condition is for checking if it is open by devices like android, iPad...etc contain event listener to check if device is ready and else for any browser.
    else{
        onDeviceReady()
    }
    // console.log("H")
}
function onDeviceReady(e){      // onDeviceReady() function is called by onLoad function it use to request information about weather via JSON format.  It help to update web page with out reloading.
    // console.log("hello1")

    xhr = new XMLHttpRequest();     // XMLHttpRequest object can be used to request data from web server.

    var url="http://api.apixu.com/v1/current.json?key=351f428e95d64053a2c150636182312&q=";      // url contain link of the web server which provide information as JSON token.

    document.getElementById("searchButton").addEventListener('click', function () {     // this for adding click event on the button tag.
        var sh=document.getElementById("searchBox").value;  // storing the qury on sh 
        xhr.open('GET',url+sh,true);    // requesting via GET methord.
        xhr.responseType='text';
        xhr.send();
        // console.log("hello2")
		navigator.vibrate(1200)   // This for vibration the phone when ever the button is clicked
        document.getElementById('container').hidden=false;

        xhr.onload=function () {
            myObj=JSON.parse(xhr.response);     // convertion string JSON to object
            // console.log(myObj)
            // rest for taking the information from requested JSON object and storing in HTML tags.
            document.getElementById('showTemperatureC').innerHTML=myObj.current.temp_c + '&deg; C';
            document.getElementById('showTemperatureF').innerHTML=myObj.current.temp_f + '&deg; F';
            document.getElementById('showHumidity').innerHTML=myObj.current.humidity +' <small><b>(per cubic meter)</b></small>';
            document.getElementById('icon').src="http://"+myObj.current.condition.icon;
            document.getElementById('Text').innerText=myObj.current.condition.text;
            document.getElementById('location').innerHTML=myObj.location.name+', &nbsp;'+myObj.location.region+', &nbsp;'+myObj.location.country;
            document.getElementById('showLatitude').innerHTML=myObj.location.lat+'&deg;';
            document.getElementById('showLongitude').innerHTML=myObj.location.lon+'&deg;';
        }
    }), false
}

