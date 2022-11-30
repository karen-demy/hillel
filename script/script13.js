//ДЗ 24. Ajax Weather

fetch('http://api.openweathermap.org/data/2.5/weather?q=Odesa&units=metric&APPID=5d066958a60d315387d9492393935c19')
.then(function(response){
   return response.json()
})
.then(function(result){
    console.log(result);
    const oldElement = document.querySelector(".page_text2");
    const name = document.createElement("p");
    oldElement.append(name);
    name.innerText = result.name;
    name.className = "name";

    const temp = document.createElement("p");
    oldElement.append(temp);
    temp.innerText = "Температура:  " + result.main.temp;

    
    const pressure = document.createElement("p");
    oldElement.append(pressure);
    pressure.innerText = "Давление:  " + result.main.pressure;

    const description = document.createElement("p");
    oldElement.append(description);
    description.innerText = "Описание:  " +result.weather[0].description;

    const humidity = document.createElement("p");
    oldElement.append(humidity);
    humidity.innerText = "Влажность:  " +result.main.humidity;

    const speed  = document.createElement("p");
    oldElement.append(speed);
    speed.innerText ="Скорость ветра:  " + result.wind.speed;

    const deg  = document.createElement("p");
    oldElement.append(deg);
    deg.innerText = "Направление в градусах:  " +result.wind.deg;

    const icon = document.createElement("img");
    name.before(icon);
    icon.setAttribute ("src" ,`http://openweathermap.org/img/w/${result.weather[0].icon}.png`);
    icon.className = "icon";
})


