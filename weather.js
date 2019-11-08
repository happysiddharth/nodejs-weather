const request = require('request');

const geocode = 'https://api.mapbox.com/geocoding/v5/mapbox.places/pilkhuwa.json?access_token=pk.eyJ1Ijoic2lkZGhhcnRoOWs5IiwiYSI6ImNrMm5tMHIydTBybjAzcG41aTk1MTY4MTUifQ.-fvyo2sqOfA6rIH_75B4JQ';
request({url:geocode,json:true},(error ,response)=>{
   // console.log(response.body.features[0].center);
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
    const url = "https://api.darksky.net/forecast/4aeda1a2642ec60d53292149b8d2c435/"+ latitude+","+ longitude+"?units=si&lang=hi";
request({url:url,json:true},(error,response)=>{
 console.log(url);  
 console.log("The temperacture of "+response.body.timezone+" is "+response.body.currently.temperature);
  })
})