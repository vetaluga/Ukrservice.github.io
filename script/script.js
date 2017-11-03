$(document).ready(function(){
  // FOR FEEDBACK SECTION
    $('#send-questionnaire').mouseenter(function(){
      $('.img-feedback-2').hide();
      $('.img-feedback-1').show();
    });
    $('#feedback').mouseenter(function(){
      $('.img-feedback-1').hide();
      $('.img-feedback-2').show();
    });
});

function myMap() {
  var myCenter = new google.maps.LatLng(49.2662667, 28.501062);
  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: myCenter, zoom: 15};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);

  // Zoom to 9 when clicking on marker
  google.maps.event.addListener(marker,'click',function() {
    map.setZoom(17);
    map.setCenter(marker.getPosition());
  });
}

$(document).ready(function(){

  // smooth scrolling to all links in navbar
      $(".navbar a").on('click', function(event) {

      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, function(){
          window.location.hash = hash;
          });
        }
      });
  });
