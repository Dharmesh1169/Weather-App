const apiKey = "2e1f5a0da48c43638265a58861b42df8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
const search = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const img = document.querySelector(".weather-icon")
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        let data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "" + "Km/h";
        if (data.weather[0].main == "Clouds") {
            img.src = "clouds.png";
        } else if (data.weather[0].main == "Clear") {
            img.src = "clear.png";
        } else if (data.weather[0].main == "Rain") {
            img.src = "rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            img.src = "drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            img.src = "mist.png";
        } else if (data.weather[0].main == "Snow") {
            img.src = "snow.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".card").style.height = "33vw";
        document.querySelector(".error").style.display = "none";
    }

};

searchbtn.addEventListener("click", () => {
    checkWeather(search.value);
});
