var key = 'b282203f2a634e8fdff1b3272b648437'


document.querySelector('#btn').addEventListener('click',function(){
    var city = document.querySelector('#search').value

    var li= document.createElement('li')
    li.textContent= city
document.querySelector('#searchHistory').appendChild(li)

    fetch(`https://api.openweathermap.org/data/2.5/weather?appid=${key}&city=${city}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        document.querySelector('#currentTemp').textContent=data.main.temp
        document.querySelector('#currentWind').textContent=data.wind.speed
        document.querySelector('#currentHumidity').textContent=data.main.humidity

    })

    fetch(`https://api.openweathermap.org/data/2.5/forecast?appid=${key}&city=${city}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        document.querySelector('#day1Date').textContent=data.list[4].dt
        document.querySelector('#day1Temp').textContent=data.list[4].main.temp
        document.querySelector('#day1Wind').textContent=data.list[4].wind.speed
        document.querySelector('#day1Humidity').textContent=data.list[4].main.humidity

        document.querySelector('#day2Date').textContent=data.list[12].dt
        document.querySelector('#day2Temp').textContent=data.list[12].main.temp
        document.querySelector('#day2Wind').textContent=data.list[12].wind.speed
        document.querySelector('#day2Humidity').textContent=data.list[12].main.humidity

        document.querySelector('#day3Date').textContent=data.list[20].dt
        document.querySelector('#day3Temp').textContent=data.list[20].main.temp
        document.querySelector('#day3Wind').textContent=data.list[20].wind.speed
        document.querySelector('#day3Humidity').textContent=data.list[20].main.humidity

        document.querySelector('#day4Date').textContent=data.list[28].dt
        document.querySelector('#day4Temp').textContent=data.list[28].main.temp
        document.querySelector('#day4Wind').textContent=data.list[28].wind.speed
        document.querySelector('#day4Humidity').textContent=data.list[28].main.humidity

        document.querySelector('#day5Date').textContent=data.list[36].dt
        document.querySelector('#day5Temp').textContent=data.list[36].main.temp
        document.querySelector('#day5Wind').textContent=data.list[36].wind.speed
        document.querySelector('#day5Humidity').textContent=data.list[36].main.humidity

    }) 
})
function searchWeather(){

}