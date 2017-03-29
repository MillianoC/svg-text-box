// Declare global vars
var contestJSON;
var svgHTML = '';


//
$.get('/svg/with_dots.txt', function(data) {
  svgHTML = data;

  // Get svg design info from json file (this will eventually come from reactor)
  $.getJSON("/json/contestResults.json", function(res) {
    contestJSON = res;
    handleContestJSON();
  });
});







// Turn the svg json into a single string
function handleContestJSON() {

  // Make an svg string to use to generate new svgs
  // for (i in contestJSON.svg) {
  //   svgHTML = svgHTML.concat(contestJSON.svg[i]);
  // }

  // If there is a current user
  if (contestJSON.currentUser) {

    // Generate a current user score svg
    var startDiv = '<div id=\"user-current\" class=\"container user-icon-container center\">';
    $('#current-user-score').append(startDiv + svgHTML + '</div>');

    // Update that last svg's elements to reflect each top score data
    $('#user-current .fName')[0].innerHTML = contestJSON.currentUser.fName;
    $('#user-current .lName')[0].innerHTML = contestJSON.currentUser.lName;
    $('#user-current .score')[0].innerHTML = contestJSON.currentUser.score;
    $('#user-current .placement')[0].innerHTML = contestJSON.currentUser.placement;
  }

  // This loads the top scores into the svg layout
  for (i in contestJSON.topScores) {

    // Generate a new top scores svg
    var startDiv = '<div id=\"user-' + i + '\" class=\"container user-icon-container center\">';
    $('#top-scores').append(startDiv + svgHTML + '</div>');

    // Hold user specific var objects
    var fNameObj = $('#user-' + i + ' .fName');
    var lNameObj = $('#user-' + i + ' .lName');
    var scoreObj = $('#user-' + i + ' .score');
    var placementObj = $('#user-' + i + ' .placement');

    // Update that last svg's elements to reflect each top score data
    fNameObj[0].innerHTML = contestJSON.topScores[i].fName;
    lNameObj[0].innerHTML = contestJSON.topScores[i].lName;
    scoreObj[0].innerHTML = contestJSON.topScores[i].score;
    placementObj[0].innerHTML = contestJSON.topScores[i].placement;

    // Send the svg to the centering function
    centerThisOnMarker(fNameObj, i, 'fName', 'left');
    centerThisOnMarker(lNameObj, i, 'lName', 'left');
    centerThisOnMarker(scoreObj, i, 'score', 'center');
    centerThisOnMarker(placementObj, i, 'placement', 'right');

  }
}


//
function centerThisOnMarker(object, user, dataName, markerType) {
  console.log(user);

  // Get marker location
  var marker = $('#user-' + user + ' .' + dataName + '-marker');
  var markerX = marker.position().left;
  var markerY = marker.position().top;


  console.log(marker);
  console.log(markerX);
  console.log(markerY);


  // Get object location, dimesions, //and transformations
  var objectX = object.position().left;
  var objectY = object.position().top;
  var objectW = object.width();
  var objectH = object.height();
  var objectT = object.attr('transform');


  console.log(object);
  console.log(objectX);
  console.log(objectY);
  console.log(objectW);
  console.log(objectH);
  console.log(objectT);


  //
  if (markerType == 'left') {
    console.log("LEFT this");

  }

  //
  else if (markerType == 'right') {
    console.log("RIGHT this");
  }

  //
  else if (markerType == 'center') {
    console.log("CENTER THIS");

    // Set object width to markerX + 1/2 the obj width
    object.attr('transform-origin', '0,0');

  }







  // var markWith = 'user-' + user + '-' + dataName + '-marker';
  //
  // $('#user-' + user + ' .' + dataName + '-marker').attr('id', markWith);

  //console.log("here: " + $('#user-' + user + '-' + dataName + '-marker')[0]);


  // console.log($('#user-' + user + ' .' + dataName + '-marker').hasClass("st5"));
  // console.log(marker.hasClass("st5"));



}
