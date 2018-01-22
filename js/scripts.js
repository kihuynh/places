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

    $("ul#list").append("<li><span class='place'>" + newPlace.country + "</span></li>");

    $("input#location").val("");
    $("input#landmark").val("");
    $("input#season").val("");

    $(".results").show();

  });
});
