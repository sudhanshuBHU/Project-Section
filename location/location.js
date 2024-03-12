const APIkey = "44f501976e9ed13263d0281c05c4c74a";
const url = `https://api.openweathermap.org/data/2.5/weather?lat=25.56&lon=85.18&appid=44f501976e9ed13263d0281c05c4c74a`;
console.log('hello');
function getLocation() {
    navigator.geolocation.getCurrentPosition(callLocation);
}
function callLocation(position) {
    let long = position.coords.longitude;
    let lat = position.coords.latitude;

    display(long, lat);
}
function display(long, lat) {
    let ele = document.createElement('p');
    ele.textContent = `Longitude: ${long} Latitude: ${lat}                    
    `;
    document.body.appendChild(ele);
}
async function fetchWeather() {
    try{
        let data =await fetch(url);
        const refined =await data.json();
        console.log(refined);

    }catch(err){
        console.log("error 401...");
    }
}