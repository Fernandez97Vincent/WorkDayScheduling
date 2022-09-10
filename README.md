# WorkDayScheduling
![alt text](https://puu.sh/JkADt/894984e638.png)
This work day schedule application is created with HTML, JavaScript, and CSS. Moment.js was used to set the time on the page as well as connect the hours of the time block. The purpose of this application is to allow users to set future events, as well as viewing events from the past. The color of the block turns red if the hour is the same as the time block, gray if the event already passed, and green if the event is for a future time.

For the JavaScript portion, momemntjs was declared to be displayed as the current day, month, date, and the year. Also, the save button was declared as a click function which allowed the text within the time block to be saved into a local storage. An if else statement was used to determine whether the event is current, in the past, or in the future. Finally a getItem was used to grab the data from the local storage.
