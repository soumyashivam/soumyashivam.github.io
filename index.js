var d1 = new Date("Dec 9, 2018").getTime();
var x = setInterval(function() {

  // Get today's date and time
  var d2 = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = d2 - d1;


  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  var date1 = new Date(d1)
  var date2 = new Date(d2)
  var years = date2.getFullYear() - date1.getFullYear();
  var months = (years * 12) + (date2.getMonth() - date1.getMonth());

  // Display the result in the element with id="demo"
  document.getElementById("TL").innerHTML = days + "d " + hours + "h "+ minutes + "m " + seconds + "s ";
  document.getElementById("year").innerHTML = years + " years completed "
  document.getElementById("month").innerHTML = months + " months completed "
  
}, 1000);
