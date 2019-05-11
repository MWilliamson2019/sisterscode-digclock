$(document).ready( function() {

    // With this function we will assemble our clock,
    // calling up whole date and then hours, minutes,
    // and seconds individually.

    function displayTime() {//You are creating variables
      //Set current time in a variable called 'currentTime'
      var currentTime = new Date();
      //Set hours, minutes and seconds in their own variables
      var hours = currentTime.getHours();
      var minutes = currentTime.getMinutes();
      var seconds = currentTime.getSeconds();


        // Let's set the AM and PM meridiem and
          // 12-hour format
          // Default is AM
          var meridiem = "AM";//setting the default to be AM



        // If hours is greater than 12
        if(hours > 12){
          hours = hours - 12; // Convert to 12-hour format
          meridiem = "PM";// Keep track of the meridiem
        }
                  
        // 0 AM and 0 PM should read as 12
        if (hours == 0){
          hours =12;
        }

        // If the hours digit is less than 10
            // Add the "0" digit to the front
            // so 9 becomes "09"

          if(hours < 10){ //if you have a single digit
            hours = "0" + hours;//the 0 will take a place value in front of the single digit (joins the 0 to the number)
          }


        // Format minutes and seconds the same way
          //Minutes:
          if(minutes < 10){ //if you have a single digit
            minutes = "0" + minutes;//the 0 will take a place value in front of the single digit (joins the 0 to the number)
          }
          //Seconds:
          if(seconds < 10){ //if you have a single digit
            seconds = "0" + seconds;//the 0 will take a place value in front of the single digit (joins the 0 to the number)
          }
        // This gets a "handle" to the clock div in our HTML
        var clockDiv = document.getElementById('clock');//docu..is a Java script method 'clock' that is going to be assigned to clockDiv

        // Then we set the text inside the clock div
        // to the hours, minutes, and seconds of the current time
        clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;//represents hour min seconds AM
        
    }

    // This runs the displayTime function the first time
    displayTime();

    // This makes our clock 'tick' by repeatedly
    // running the displayTime function every second.
    setInterval(displayTime, 1000);

});
