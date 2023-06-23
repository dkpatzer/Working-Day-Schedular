# Working-Day-Schedular

Description:
The objective was to create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery It has been developed using HTML, CSS, Dayjs, and Javascript.

Instructions for Use
1. The user is presented with a daily planner that displays the current date and time at the top of the page.
2. The user is presented with timeblocks for standard business hours.
3. The timeblocks are color coded to indicate whether it is in the past, present, or future.
4. The user can enter an event by clicking into a timeblock and typing.
5. The user can save the event by clicking the save button for that timeblock.
6. The text for that event is saved in local storage.
7. The saved events persist when the page is refreshed.



This code uses the Moment.js library to get the current date and format it as "Day, Month Day Year" (e.g., "Tuesday, Jan 1 2023"). The formatted date is then assigned to the variable todayDate. The current hour is obtained using the Moment.js library and assigned to the variable currentHour. The current hour is then used to determine the color of the timeblock. If the current hour is less than the hour of the timeblock, the timeblock is colored green. If the current hour is greater than the hour of the timeblock, the timeblock is colored gray. If the current hour is equal to the hour of the timeblock, the timeblock is colored red. The timeblock is assigned the appropriate class based on the current hour. The timeblock is then appended to the container div. The user can enter an event by clicking into a timeblock and typing. The user can save the event by clicking the save button for that timeblock. The text for that event is saved in local storage. The saved events persist when the page is refreshed.




Discussion of Code: 
HTML - The HTML code begins with the typical document structure with the necessary meta tags for character encoding, viewport configuration and compatibility. In addition it includes extenal CSS stylesheets from Bootstrap, Font Awesome and Google Fonts. 

The HTML code includes a header section with class attributes for styling purposes. The <h1> element has the text "Work Day Scheduler," a <p> element with the class "lead" and the description "A simple calendar app for scheduling your work day," and another <p> element with the ID "currentDay" for displaying the current day and date.

The next section adds time blocks for different hours of the day. The outermost <div> element has the class "container-lg" and sets the width of the content. Inside it, are individual time blocks for each hour.
Each time block is contained within a <div> element with a unique ID representing the hour (e.g., "hour8", "hour9"). It has the class "row" and "time-block" for styling purposes.nside the time block, we have a <div> element with the class "col-md-1 hour" that displays the hour (e.g., "8 AM") on the left side of the time block. Next, there is a <textarea> element with the class "col-md-10 description" for users to input their plans or notes for that specific hour. Finally, there is a <button> element with the classes "btn saveBtn col-md-1" and an <i> element with the class "fas fa-save" (Font Awesome icon) inside the button. This represents the save button for the corresponding time block. This structure is repeated for all the hours. 

The end of the document  includes JavaScript files. First, the jQuery library is loades from a content delivery network (CDN) using a <script> tag. Then, the Moment.js library from another CDN. The end of the document has the link to the "script.js" file that contains the logic for the Work Day Scheduler app.

JavaScript:
Inn the first lines of code the moment.js library is used to get the current date and format it as "Day, Month Day Year" (e.g., "Monday, Jan 1 2023").
The formatted date is then assigned to the variable todayDate.
The $("#currentDay").html(todayDate) line sets the HTML content of an element with the ID "currentDay" to the todayDate value. It essentially displays the current date on the webpage.

The (document).ready(function () { ... }) code ensures that the JavaScript code inside it is executed only after the HTML document is loaded. This is necessary because the JavaScript code is manipulating the HTML elements. This code wraps the following code inside a document-ready function, ensuring that it runs only after the HTML document has been fully loaded.
It sets up a click event listener for elements with the class "saveBtn".
When a "saveBtn" element is clicked, the function is executed.
Within the function, it retrieves the value of the description field that is located next to the clicked button using jQuery's siblings method. It assigns this value to the text variable.
It also gets the ID of the parent element (which represents a specific time block) using the parent method. This ID represents the hour for that time block.
Finally, it saves the text value in the browser's local storage, using the setItem method of the localStorage object. The time (hour) is used as the key, and the text value is stored.


Next is the function timeTracker() code.
Inside the function, it uses moment.js to get the current hour using moment().hour(), and assigns it to the variable timeNow.
It then loops over each element with the class "time-block" using jQuery's each method.
Within the loop, it extracts the hour from the element's ID by splitting the ID string and taking the numeric part after "hour". It converts the extracted hour to an integer and assigns it to the variable blockTime.
The function checks the relationship between blockTime and timeNow to determine whether the time block is in the past, present, or future.
Depending on the comparison results, it adds or removes CSS classes ("past", "present", and "future") using jQuery's addClass, removeClass, and removeClass methods to visually indicate the time status of each block.

In the next section, are lines for retreiving values from the local storage for specific time blocks and set the values of the corresponding description fields.
Each line follows a similar pattern: it selects an element using its ID and class (e.g., $("#hour8 .description")), retrieves the corresponding value from local storage using the getItem method of the localStorage object, and sets the value of the description field using jQuery's val method.

The next line calls the timeTracker function, which was defined earlier.
It ensures that the time tracker function is executed once the document is ready, to set up the initial time block colors based on the current time.
Overall, this code sets up a webpage with time blocks representing different hours. It displays the current date, allows the user to enter text in each time block, and saves the entered text in the browser's local storage. The time blocks are visually styled based on whether they are in the past, present, or future relative to the current time.
 

Building this app was useful in gaining experience and undertanding of third party APIs. I learned how to use the Moment.js library to get the current date and time, and how to use it to format dates and times. I also learned how to use the localStorage object to store data in the browser's local storage. I learned how to use jQuery to select HTML elements and manipulate their attributes and content. I also learned how to use jQuery's event listeners to set up click events for elements. Finally, I learned how to use jQuery's each method to loop over elements and perform operations on them.



The Work Day Scheduler was developed by David Patzer as part of the NU coding bootcamp. I obtained information from many sources to help in building this app.Sources include  w3collective, MDN Web Docs, Stack Overflow, and the jQuery documentation. https://chat.openai.com/ was used to check text. I reviewed this code https://github.com/ewirtz3/work-day-scheduler. I reviewed information from the MDN guide on Third Paaty APIs.https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Third_party_APIs. Reviewing documentation from https://jquery.com/ was critical. I utilized the jQuery tutorial from W3 schools https://www.w3schools.com/jquery/. The Day.js site was also critical https://day.js.org/.