//Header timer/day 
  setInterval(function() {
    $('#currentDay').text('Today is ' + dayjs().format('dddd, MMM D; hh:mmA')); 
    blockTimer(); 
});

//block timer check
var blockTimer = function() {
  var hourNow = dayjs().format('H');
  console.log(hourNow)
  for (i = 9; i < 18; i++) {
    var timeSlotEl = $('#hour-' + i);
    timeSlotEl.removeClass('past present future');

    if (hourNow < i) {
      timeSlotEl.addClass('future');

    } else if (hourNow > i) {
      timeSlotEl.addClass('past');

    } else {
      timeSlotEl.addClass('present');
    }
  }
}

//Save text to local storage
$('.saveBtn').on('click', function() {
  for (i = 9; i < 18; i++) {
    localStorage.setItem('hour-' + i, $('#hour-' + i).find('.description').val());
  }
});


//load from local storage
var loadTask = function() {
  for (i = 9; i < 18; i++) {
  $('#hour-' + i).find('.description').val(localStorage.getItem("hour-" + i));
  }
}

loadTask();