# DevlightsChallengeWebApp
Angular WebApp for Devlights Fullstack challenge.
The purpose of this app is simply to display the data provided by the backend RestApi in an Angular component.
In a nutshell the this webApi has a service connected to the backend API and makes a request with a few query strings that
allow the user to filter the results, by default, all of the information provided by the backend is displayed.


Here is a quick and simple explanation of how to set it up
1) Download the Backend REST API, this is where we will get our data from,if you have't already downloaded it here's the link
to that repo https://github.com/Lucasoftware7/BackendChallengeDevlights.
2) Download this repo and remember where it is stored, after that you need to open a command line interface, any CLI will work
CMD for windows or Git bash for other OS, and you need to get inside the project folder EX:"..//..//DevlightsChallengeWebApp//Angular1
3) After that you need to execute the "npm install" command to make sure your PC has every resource the project needs to work              correctly.
   By the way, this project only uses two external libraries,FontAwesome(icons) and AngularMaterialUI.
4) In the same command line interface, run the command ng serve, this will create a new localhost server where you can use the            webApp, this localhost port is, most of the time, the port 4200 by default.
5) Finally, open a new tab in your browser, and paste the same URL display in the CLI EX:"http://localhost:4200". And now the app will    be up and running for you to try it out. !!!

====================================
USAGE
====================================
In this webApp you will see different boxes containing information about different games. By default, the app will display every
single game inside the JSON Array, but you can also customize it, by modifying inside the Angular Service, its query strings

This service can take up to 2 different query strings.
the title=some-game that is the responsible for filtering the results that contain similar words(case insensitive) or if a specific
game title is passed it will return the information for that game (this is case-sensitive).

you can do this in two simple steps
1)Use the command ng serve inside the project folder, once the project is running in the browser you should see every single game provided by the backend, this is the functionality by default, it is executed every time the "title" equals "a" and the "qsalePrice" equals 0.
Ex:https://localhost:7092/api/Values/deals?title=a&qsalePrice=0
2) To filter game by the title just modify the title query string and save it, reload the page and you should see the changes aplied, Ex:https://localhost:7092/api/Values/deals?title=half-life. Or if you want to search by a specific price you should set that value in the qsalePrice property like this: https://localhost:7092/api/Values/deals?Price=1.99.

NOTE: It is recomended to disable adblock and privacy configurations in your browser as this might interfere with the correct functioning of the app.

Want to know more or suggest something? 
Contact me!
email:ldz-zapata@hotmail.com
github profile:https://github.com/Lucasoftware7



;
