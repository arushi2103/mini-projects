const apiKey ="abe8ea9bb261bda5e82fbb0a0d910a58";
const form=document.getElementById("form");
const search=document.getElementById("search");
const submit=document.getElementById("submit");
const main= document.getElementById("main");
const url=(city)=>`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`;
async function getWeatherByLocation(city){
const resp= await fetch(url(city),{origin:"cros"});
const respData= await resp.json();
addWeatherToPage(respData)  
}
function addWeatherToPage(data){
const temp=KtoC(data.main.temp);
const weather= document.createElement('div');
weather.classList.add('weather');
weather.innerHTML=`
<h2>
<img src="">
${temp}°C
<img src="">
</h2>
<small>${data.weather[0].main}</small>
`
;
main.innerHTML=''
main.appendChild(weather)
};
function KtoC(K){
 return Math.floor(K-273.15);
}
submit.addEventListener('click',(e)=>{
  e.preventDefault();
  const city=search.value;
  if(city){
    getWeatherByLocation(city)
  }
});




