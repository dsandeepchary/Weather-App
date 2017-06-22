var bgimgs=["http://images.indianexpress.com/2015/05/reu-rain-759.jpg","http://www.wallpaperscharlie.com/wp-content/uploads/2016/07/Snowy-Weather-HD-Images-6.jpg","https://s-media-cache-ak0.pinimg.com/originals/32/6f/3e/326f3ed95633dc5ebf82612829ec395d.jpg","http://img13.deviantart.net/9467/i/2012/262/7/3/resource__cloudy_landscape_by_elsoria-d5fb314.jpg","http://absfreepic.com/absolutely_free_photos/small_photos/windy-weather-landscape-4576x2576_74868.jpg"];
  var index=Math.floor(Math.random()*bgimgs.length);
  $("body").css("background","#fff url("+bgimgs[index]+") no-repeat fixed center center / cover");
$(function(){
   if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
var lat=position.coords.latitude;  
var lon=position.coords.longitude;
    //checking the lat lon
    console.log(lat+" "+lon);
    var api="https://api.wunderground.com/api/f45fc9895cbd4693/conditions/q/"+lat+","+lon+".json?callback=?";
 $.getJSON(api,function(weather){
 $("#data").draggable();
   //$("body").append("<h3>"+JSON.stringify(weather)+"</h3");
$("#loc").html(weather.current_observation.observation_location.full+" "+weather.current_observation.observation_location.country);
   var temp=weather.current_observation.temp_c;
 $("#tempa").html(temp+"&degC");
  var imgurl=weather.current_observation["icon_url"];
    console.log(imgurl);
   $("img").attr("src",imgurl);
   $("#info").html(weather.current_observation.weather);
   $("#tempc").on("click",function(){
  $("#tempa").html(weather.current_observation.temp_c+"&degC");
      
   });
   $("#tempf").on("click",function(){
  $("#tempa").html(weather.current_observation.temp_f+"&degF");        
   });
 });
  });
}
 });
