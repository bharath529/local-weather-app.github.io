var key      ="b1b15e88fa797225412429c1c50c122a1";
$(function() {
   var lat="";
  var lon="";
  var icon="";
  var api="https://fcc-weather-api.glitch.me/api/current?lat=";
   var api1="https://api.openweathermap.org/data/2.5/weather?lat=";  navigator.geolocation.getCurrentPosition(function(position) {
   lat=position.coords.latitude ;
   lon=position.coords.longitude;

  $.getJSON(api+lat+"&lon="+lon,function(value){
      $("#location").html(value.name);
       $("#temp").html(value.main.temp);
       $("#temp").append(" celsius");
  $("#description").html(value.weather[0].description);
    $('#icon').html('<img src="'+value.weather[0].icon+'" />');
    var temp = value.main.temp;
    var F = Math.round((temp*9/5)+32);
    $("#btn").click(function(){
    $("#temp").html(F);
    $("#temp").append(" fahrenheit");
  });
  });
   });

});
