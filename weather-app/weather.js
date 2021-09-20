const apiKey ="abe8ea9bb261bda5e82fbb0a0d910a58";
const form=document.getElementById("form");
const search=document.getElementById("search");
const main= document.getElementById("main");
const url = (city)=> `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=abe8ea9bb261bda5e82fbb0a0d910a58`;  
 async function getWeatherByLocation(city){  
    const resp = await fetch(url(city), {  
      origin: "cros" });
    const respData = await resp.json();  
     addWeatherToPage(respData);  
  }  
function addWeatherToPage(){

const temp = ktoc(data.main.temp);
const weather= document.createElement('div');
weather.classList.add('weather');
weather.innerHTML=`
<h1>weather-data</h1>
<h2>

<img src="" />
 ${temp}°C 
<img src=""/>  
</h2>
<h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> ${temp}°C <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /></h2>  

<small>${data.weather[0].main}</small>  
`;
main.innerHTML="";
main.appendChild(weather);
}
function ktoc(K){
    return Math.floor(K-273.15);
}
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const city =search.value ;
    if(city){
        getWeatherByLocation(city)
    }
    
});
