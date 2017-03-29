// Declare global vars
var contestJSON;
var svgHTML = '';

//
$.get('/svg/coke.txt', function(data) {
  svgHTML = data;

  // Get svg design info from json file (this will eventually come from reactor)
  $.getJSON("/json/contestResults.json", function(res) {
    contestJSON = res;
    handleContestJSON();
  });
});


// Turn the svg json into a single string
function handleContestJSON() {

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
  }

    // Start svg-text-box centering process
    svgTextBox();

}
