const APIkey = "44f501976e9ed13263d0281c05c4c74a";
// const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${longi}&appid=${APIkey}`;
const userTab = document.querySelector('[land]');
const searchTab = document.querySelector('[search-tab]');
const loading = document.querySelector('[loadingContainer]');
const landing = document.querySelector('[landingContainer]');
const form = document.querySelector('[formContainer]');
const grant = document.querySelector('[grantAccessContainer]');
const submitKey = document.querySelector('[submitButton]');

let curTab = userTab;
curTab.classList.add('current-tab');


userTab.addEventListener("click", () => {
    switched(userTab);
});
searchTab.addEventListener("click", () => {
    switched(searchTab);
});
function switched(clicked) {
    if (clicked != curTab) {
        curTab.classList.remove('current-tab');
        curTab = clicked;
        curTab.classList.add('current-tab');

        if (searchTab.classList.contains('current-tab')) {
            grant.classList.add('disappear');
            loading.classList.add('disappear');
            landing.classList.add('disappear');
            form.classList.remove('disappear');
        } else {
            form.classList.add('disappear');
            grant.classList.add('disappear');
            landing.classList.add('disappear');
            loading.classList.remove('disappear');
            getFromSessionStorage();
        }
    }
}
function getFromSessionStorage() {
    let localCoordinates = sessionStorage.getItem('coord');
    if (!localCoordinates) {
        landing.classList.add('disappear');
        form.classList.add('disappear');
        loading.classList.add('disappear');
        // grant.classList.add('disappear');
        grant.classList.remove('disappear');
    } else {
        let coordinates = JSON.parse(localCoordinates);
        fetchUserCoordinates(coordinates);
    }
}
async function fetchUserCoordinates(coordinates) {
    const { lat, lon } = coordinates;
    loading.classList.remove('disappear');
    landing.classList.add('disappear');
    form.classList.add('disappear');
    grant.classList.add('disappear');

    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`);
        let dataFetch = await response.json();

        form.classList.add('disappear');
        loading.classList.add('disappear');
        grant.classList.add('disappear');
        landing.classList.remove('disappear');
        render(dataFetch);
    } catch {
        landing.classList.add('disappear');
        form.classList.add('disappear');
        // loading.classList.add('disappear');
        grant.classList.add('disappear');
        loading.classList.remove('disappear');
        alert("Error in obtaining information");
    }
}
function render(data) {
    const cityname = document.querySelector('[city]');
    const cityImage = document.querySelector('[image]');
    const condition = document.querySelector('[condition]');
    const conditionImage = document.querySelector('[condition-image]');
    const temperature = document.querySelector('[temperature]');
    const wind = document.querySelector('[windspeed]');
    const humidity = document.querySelector('[humidity]');
    const cloud = document.querySelector('[clouds]');


    cityname.innerText = data?.name;
    // cityImage.src = ` https://flagcdn.com/144x108/${data?.sys?.country.toLowerCase()}.png`;
    cityImage.src = `https://flagcdn.com/144x108/${data?.sys?.country.toLowerCase()}.png`;
    condition.innerText = data?.weather?.[0]?.description;
    // conditionImage.src = `https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`
    conditionImage.src = `http://openweathermap.org/img/w/${data?.weather?.[0]?.icon}.png`;
    temperature.innerText = data?.main?.temp;
    wind.innerText = data?.wind?.speed;
    humidity.innerText = data?.main?.humidity;
    cloud.innerText = data?.clouds?.all;
}

function getInformation() {
    let inputcity = document.getElementById('inputCity').value.toLowerCase().trim();
    // console.log(inputcity);
    grant.classList.add('disappear');
    landing.classList.add('disappear');
    form.classList.remove('disappear');
    loading.classList.remove('disappear');
    if (inputcity == '') {
        landing.classList.add('disappear');
        loading.classList.add('disappear');
        grant.classList.add('disappear');
        form.classList.remove('disappear');
        alert('Please enter a valid City Name!')
    } else {
        getLongiAndLati(inputcity);
        document.getElementById('inputCity').value = "";
    }

}
submitKey.addEventListener("click", getInformation);
async function getLongiAndLati(nameOfCity) {
    // console.log(nameOfCity.toLowerCase());
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nameOfCity}&appid=${APIkey}&units=metric`);
        const dataSearch = await response.json();
        loading.classList.add('disappear');
        grant.classList.add('disappear');
        form.classList.remove('disappear');
        landing.classList.remove('disappear');
        // console.log(dataSearch);
        render(dataSearch);
    } catch {
        landing.classList.add('disappear');
        form.classList.add('disappear');
        grant.classList.add('disappear');
        loading.classList.remove('disappear');
        alert('Please write a valid country name ');
    }

}
function cre() {
    const credit = landing;
    let content = document.createElement('div');
    content.textContent = "Made By Sudhanshu Shekhar From BHU";
    credit.insertAdjacentElement('afterend', content);
    content.setAttribute("style","font-family:Courier New; margin-top:1rem;")
}

function grantAccess() {
    landing.classList.add('disappear');
    form.classList.add('disappear');
    grant.classList.add('disappear');
    loading.classList.remove('disappear');
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        loading.classList.remove('disappear');
        alert('ERROR... Geolocation is not supported');
    }
}
function showPosition(position) {
    let co = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
    };

    sessionStorage.setItem("coord", JSON.stringify(co));
    fetchUserCoordinates(co);
}
landing.classList.add('disappear');
form.classList.add('disappear');
loading.classList.add('disappear');

getFromSessionStorage();
cre();

