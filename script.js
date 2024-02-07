const searchb=document.getElementById("searchButton");
const entryb=document.getElementById("entry");
const cityn=document.getElementById("CityName");
const cityt=document.getElementById("time");
const citytemp=document.getElementById("tempc");

async function getData(cityName){
    const promise=await fetch(`http://api.weatherapi.com/v1/current.json?key=fe680201df3340bfbcf34034240702&q=${cityName}&aqi=no`);
return await promise.json();
}

searchb.addEventListener("click",async()=>{
    const val=entryb.value;
   
    if(val==="")
    {
        alert("City Name not entered");
    }
    else{
        const result=await getData(val);
       //console.log(entryb.value);
        console.log(result);
        cityn.innerText=`${result.location.name},${result.location.region} -${result.location.country}`;
        cityt.innerText=`Date: ${result.location. localtime}`;
        citytemp.innerText=`Temperature in celsius: ${result.current.temp_c} `;
    }
    
});


//http://api.weatherapi.com/v1/current.json?key=fe680201df3340bfbcf34034240702&q=London&aqi=no
