function openTab(evt, tabname) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabname).style.display = "block";
  evt.currentTarget.className += " active";
}

//preloader

$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#status').delay(3000).fadeOut(); // will first fade out the loading animation 
  $('#preloader').delay(3000).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  $('body').delay(3000).css({'overflow':'visible'});
})