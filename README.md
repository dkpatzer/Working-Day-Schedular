
# Working-Day-Scheduler

## Description

The objective was to create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery. It has been developed using HTML, CSS, Dayjs, and JavaScript.

## Instructions for Use

1. The user is presented with a daily planner that displays the current date and time at the top of the page.
2. The user is presented with time blocks for standard business hours.
3. The time blocks are color-coded to indicate whether it is in the past, present, or future.
4. The user can enter an event by clicking into a time block and typing.
5. The user can save the event by clicking the save button for that time block.
6. The text for that event is saved in local storage.
7. The saved events persist when the page is refreshed.

## Code Explanation

### HTML

The HTML code begins with the typical document structure with the necessary meta tags for character encoding, viewport configuration, and compatibility. In addition, it includes external CSS stylesheets from Bootstrap, Font Awesome, and Google Fonts.

The HTML code includes a header section with class attributes for styling purposes. The `h1` element has the text "Work Day Scheduler," a `p` element with the class "lead" and the description "A simple calendar app for scheduling your work day," and another `p` element with the ID "currentDay" for displaying the current day and date.

The next section adds time blocks for different hours of the day. The outermost `div` element has the class "container-lg" and sets the width of the content. Inside it, there are individual time blocks for each hour.
Each time block is contained within a `div` element with a unique ID representing the hour (e.g., "hour8", "hour9"). It has the class "row" and "time-block" for styling purposes. Inside the time block, there is a `div` element with the class "col-md-1 hour" that displays the hour (e.g., "8 AM") on the left side of the time block. Next, there is a `textarea` element with the class "col-md-10 description" for users to input their plans or notes for that specific hour. Finally, there is a `button` element with the classes "btn saveBtn col-md-1" and an `i` element with the class "fas fa-save" (Font Awesome icon) inside the button. This represents the save button for the corresponding time block. This structure is repeated for all the hours.

The end of the document includes JavaScript files. First, the jQuery library is loaded from a content delivery network (CDN) using a `script` tag. Then, the Moment.js library from another CDN. The end of the document has the link to the "script.js" file that contains the logic for the Work Day Scheduler app.

### JavaScript

In the first lines of code, the Moment.js library is used to get the current date and format it as "Day, Month Day Year" (e.g., "Monday, Jan 1 2023"). The formatted date is then assigned to the variable `todayDate`.
The `$("#currentDay").html(todayDate)` line sets the HTML content of an element with the ID "currentDay" to the `todayDate` value. It essentially displays the current date on the webpage.

The `$(document).ready(function () { ... })` code ensures that the JavaScript code inside it is executed only after the HTML document is loaded. This is necessary because the JavaScript code is manipulating the HTML elements. This code wraps the following code inside a document-ready function, ensuring that it runs only after the HTML document has been fully loaded.

It sets up a click event listener for elements with the class "saveBtn". When a "saveBtn" element is clicked, the function is executed. Within the function, it retrieves the value of the description field that is located next to the clicked button using jQuery's `siblings` method. It assigns this value to the `text` variable.
It also gets the ID of the parent element (which represents a specific time block) using the `parent` method. This ID represents the hour for that time block.
Finally, it saves the `text` value in the browser's local storage using the `setItem` method of the `localStorage` object. The time (hour) is used as the key, and the `text` value is stored.

Next is the `timeTracker()` function code. Inside the function, it uses Moment.js to get the current hour using `moment().hour()`, and assigns it to the variable `timeNow`.
It then loops over each element with the class "time-block" using jQuery's `each` method.
Within the loop, it extracts the hour from the element's ID by splitting the ID string and taking the numeric part after "hour". It converts the extracted hour to an integer and assigns it to the variable `blockTime`.
The function checks the relationship between `blockTime` and `timeNow` to determine whether the time block is in the past, present, or future.
Depending on the comparison results, it adds or removes CSS classes ("past", "present", and "future") using jQuery's `addClass`, `removeClass`, and `removeClass` methods to visually indicate the time status of each block.

In the next section, there are lines for retrieving values from the local storage for specific time blocks and setting the values of the corresponding description fields.
Each line follows a similar pattern: it selects an element using its ID and class (e.g., `$("#hour8 .description")`), retrieves the corresponding value from local storage using the `getItem` method of the `localStorage` object, and sets the value of the description field using jQuery's `val` method.

The next line calls the `timeTracker` function, which was defined earlier. It ensures that the time tracker function is executed once the document is ready to set up the initial time block colors based on the current time.

## Screenshots

![Screenshot of starting page](https://github.com/dkpatzer/WorkDaySchedular/blob/main/assets/images/Screenshot%20(147).png)

![Screenshot of time blocks](https://github.com/dkpatzer/WorkDaySchedular/blob/main/assets/images/Screenshot%20(148).png)

## Credits and Sources

The Work Day Scheduler was developed by David Patzer as part of the NU coding bootcamp. I obtained information from many sources to help in building this app. Sources include w3collective, MDN Web Docs, Stack Overflow, and the jQuery documentation. https://chat.openai.com/ was used to check text. I reviewed this code https://github.com/ewirtz3/work-day-scheduler. I reviewed information from the MDN guide on Third Party APIs. https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Third_party_APIs. Reviewing documentation from https://jquery.com/ was critical. I utilized the jQuery tutorial from W3 schools https://www.w3schools.com/jquery/. The Day.js site was also critical https://day.js.org/.

## Acknowledgments

Here are some of the resources I relied on to create this project:

- w3collective: For providing helpful tutorials and code examples.
- MDN Web Docs: For comprehensive documentation on web technologies.
- Stack Overflow: For the community's invaluable insights and solutions.
- jQuery documentation: For clear and concise explanations of jQuery usage.
- https://chat.openai.com/: For text verification and assistance.
- https://github.com/ewirtz3/work-day-scheduler: For code review and reference.
- MDN guide on Third Party APIs: For understanding and utilizing third-party APIs.
- https://jquery.com/: For detailed jQuery documentation and resources.
- W3 schools jQuery tutorial: For step-by-step guidance on jQuery usage.
- Day.js: For providing an efficient and easy-to-use date and time library.







<!-- The Work Day Scheduler was developed by David Patzer as part of the NU coding bootcamp. I obtained information from many sources to help in building this app.Sources include  w3collective, MDN Web Docs, Stack Overflow, and the jQuery documentation. https://chat.openai.com/ was used to check text. I reviewed this code https://github.com/ewirtz3/work-day-scheduler. I reviewed information from the MDN guide on Third Paaty APIs.https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Third_party_APIs. Reviewing documentation from https://jquery.com/ was critical. I utilized the jQuery tutorial from W3 schools https://www.w3schools.com/jquery/. The Day.js site was also critical https://day.js.org/. -->