function Place(location, landmark, season) {
  this.country = location;
  this.thing = landmark;
  this.time = season;
}


$(document).ready(function() {
  $("form#vacation").submit(function(event) {
    event.preventDefault();

    var inputLocation = $("input#location").val();
    var inputLandmark = $("input#landmark").val();
    var inputSeason = $("input#season").val();

    var newPlace = new Place(inputLocation, inputLandmark, inputSeason);

    $(".results").show();

    $("ul#list").append("<li><span class='place'>" + newPlace.country + "</span></li>");


    $(".place").last().click(function() {
      $(".show-place").show();

      $(".location").text(newPlace.country);
      $(".landmark").text(newPlace.thing);
      $(".season").text(newPlace.time);
    });
  });
});
