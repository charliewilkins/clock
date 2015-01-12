/* jshint devel:true */
console.log('\'Allo \'Allo!');

var minuteBlocks = [];
var $cc;

function createMinuteBlock(container, minute) {
  var el = $(document.createElement('div'));
  el.addClass('minute');
  el.addClass('minute-' + minute);

  minuteBlocks.push(el);
  container.append(el);
}

function updateTextTime() {
  var $time = $('#text-time-container');
  var str = new Date().toString();
  $time.html(str);
}

function updateGridTime() {
  var minutes = 24 * 60;
  var current = new Date();
  current = (current.getHours() * 60) + current.getMinutes();

  for (var i=1; i <= minutes; i++) {
    var block = minuteBlocks[i-1];
    if (i < current) {
      block.removeClass('future').removeClass('current').addClass('past');
    } else if (i === current) {
      block.removeClass('future').addClass('current').removeClass('past');
    } else if (i > current) {
      block.removeClass('future').removeClass('current').removeClass('past');
    }
  }
}

function createGrid() {
  $cc = $('#clock-container');
  $cc.empty();

  var minutes = 24 * 60;
  for (var i=1; i <= minutes; i++) {
    var minute = i;
    createMinuteBlock($cc, minute);
  }
}

$(document).ready(function () {

  createGrid();

  window.setInterval(updateGridTime, 1000);
  window.setInterval(updateTextTime, 1000);
})









