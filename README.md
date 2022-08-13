<h1 align="center">Apteco Front End Challenge</h1>

## Project Description

- This project will serve as a tool for Teal Green Holidays employees to track the number of people that have visited certain holiday destinations.
  <br>
- The main feature of the application is a table which houses all of the live data pulled from the Apteco API.
  <br>
- The table can be sorted by its values, filtered based on years and paginated to get clear and readable content.

## The Technology Used

- The project is built using Angular 14 using its component based architecture and built in modules.
  _I initially used React (NextJS) however decided that Angular was more fitting both for my own development and for Apteco's needs._
  <br>
- The table is generated by pushing data into the Angular Material table component which displays the country, the year and the attendance numbers.
  <br>
- I used a Node Express backend with Axios privately authenticate my POST request to the Apteco API and return the data to my service.

  > _Express Server Repository: https://github.com/WillBorysiak/Apteco-Express_

  <div align="center">
  <img src="/src/assets/images/readme/angular.svg" alt="HTML" height="50"/>
    <p align="center">Angular</p>
  </div>

<div align="center">
  <img src="/src/assets/images/readme/sass.svg" alt="HTML" height="50"/>
  <p align="center">SASS</p>
</div>

<div align="center">
  <img src="/src/assets/images/readme/material.svg" alt="HTML" height="50"/>
  <p align="center">Angular Material</p>
</div>

<div align="center">
  <img src="/src/assets/images/readme/node.svg" alt="HTML" height="50"/>
  <p align="center">Node JS (Express)</p>
</div>

## Planning / Thought Process

My first step was to read through the github repo and understand exactly what is asked of me.
I familiarised myself with the problem and begun to plan how I would break it down into smaller tasks.
I identified that I had four distinct sections to complete:

- Create an application that displays the data using the raw JSON data provided inside a table.
  <br>
- Re-create the table using the Apteco API to get the data via the documented authentication flow.
  <br>
- Allow the user to sort the table based on smallest/largest values.
  <br>
- Allow the user to filter the table based on certain destinations and/or years.

## Assumptions

There are going to be two sections of this project that are going to test me.

- Firstly, using Angular to create the application is going to be a much bigger learning curve compared to the 'easier' option of using my React stack.
  <br>
- Secondly, using the API to get the data and then pushing it into the table. This could be easy however there many be issues with the authentication and data processing.

I have already gotten assistance with the filtering / sorting by using the Material table so I am going to ensure that I cover all of the extensions.

## Journal of Actions

This will be a log of all the actions / steps I have taken to complete the project along with my thoughts:

- I started with a React project as this would have been the easiest option however I decided to use Angular as it will test me more as a developer and is more on par with Apteco's workflow.
  <br>
- Now I have gotten a basic Angular template, I am going to create a basic user interface comprising of the layout styles and the hero component.
  <br>
- Now that the banner and layout is sorted, its time to import the MatTable to the project and render the skeleton of the table.
  <br>
- I have now created a fully operational table component using the correct Material modules, my next task is working out how to add the JSON data to the table.
  <br>
- I have used an angular service to get the data from the static JSON file and supply that data to my app.component.ts.
  <br>
- I then used the @Input decorator to pass the data into the table component so I can access it in the table component.
  <br>
- Once the data was present I could run a function called createTableData() which contains all of the relevant data (years, countries and attendance). I had to use the .split('\t') method to create the separate arrays.
  <br>
- I then ran two .forEach() loops to interate over the data and create an object that can be fed into the Material data source.
  <br>
- Once the data was created, I added it to the datasource and changed the displayed column names to fit my countries/years. The HTML file also had to be altered to display the new data.
  <br>
- My next task was to call the API for the data however I needed to generate an auth token and test the endpoint beforehand. I used Postman to send the POST request using the headers provided and putting my UserLogin / Password inside the request body. I received a JSON object with my accessToken inside.
  <br>
- Once I had the accessToken I could make a request to the OrbitAPI to get my holiday data back. Again I used Postman to supply headers and body to ensure I would get the corrected response. The response I got was a exact copy of the JSON file used prior and now I have to use the HTTPClient to send the same request.
  <br>
- I then replicated the HTTP POST request in my angular service using the HttpHeaders object with the correct request body imported from a JSON file.
  <br>
- After realising that Angular can't really use process.env for my access token, I had to build a backend using Express (learnt from scratch as well). I used the backend to POST to the Apteco endpoint and return the data. Then I used a GET method to provide this data into my Angular app.
  <br>
- Now the backend is supplying the data I can adapt my service to pull the data from it and populate the table with the same values as the JSON file.
  <br>
- Now that all of the extensions have been met, I wanted to add a footer that contains links to my repo, the Apteco challenge and angular's site.
  <br>
- I am currently happy with how the project has gone, time to reflect and submit the final version!

## Problems

- The first problem I faced was getting the table to render without errors. I had to search through the error log and work out which modules I needed such as MatPaginatorModule, MatInputModule, MatSortModule etc to import. The angular API documentation assisted me with this, then I could correctly add them to the imports array and the table worked perfectly.
  <br>
- The second problem I faced was receiving data inside the table component as when I tried to log the @Input value, it simply returned undefined. After reading Angular documentation I realised that I was logging on OnInit which wouldnt work because the component was rendering THEN receiving the data. I then conditionally rendered the component using the \*ngIf="data" property and then the data was present before my console log.
  <br>
- The third problem I had was converting the cube data into a format that the Material table would accept. It required an object with all the correct properties and the data supplied was in separated arrays. I had to loop over the separated arrays and push the values into the appropriate year/country.
  <br>
- The fourth problem I had was calling the Apteco API without revealing my access token. In React I can just use process.env and supply the token via Vercel however angular doesn't support this so I had to use a serverless function instead. The serverless function uses Axios to make the POST request and return the data. With this method I was able to store the token as a variable inside Vercel thus avoiding its public exposure.

## What I Would Would Add / Change

- I would like to make the page more responsive for mobile users as the MatTable doesnt follow the normal flow of the document and can cause horizontal scrolling on smaller devices. I would spend time breaking down how the MatTable CSS's works however that could have been very time consuming.
  <br>
- I would like to see if there was a more efficient way to handle the enviromental variables in Angular as the backend solution took some time and effort to get working. I am in-fact very grateful as it allowed me to get a taste of a full stack application for the first time.
  <br>
- Touching on from the previous point, I would like to see how I could build out my Express app to make it more complex or efficient. I barely scraped the surface of what Node can do and whilst it covered my basic needs, it does leave me thinking what else can it do?
  <br>
- I would be curious to see just how 'easy' this challenge would be using React and see what the experience is like rendering tables of data. I'm sure I'll get this pleasure at some point in the future.

## How To Build/Run The Application

> - First, you will need an IDE to run the application.
>   Visual Studio Code is the most popular for web development but any suitable IDE will work.

> - Secondly, you will need to navigate to the repository on GitHub and clone the repo using any method you want.
>   https://github.com/WillBorysiak/Apteco-Front-End

> The main choices are:
>
> - The GitHub GUI which is an application that has a UI designed to manage Git.
> - Using the built in terminal in VS Code by typing 'git clone https://github.com/WillBorysiak/Apteco-Front-End.git'
> - Downloading the ZIP file then extracting the content and subsequently opening the file inside VS Code.

> <img src="/src/assets/images/readme/clone-screenshot.png" alt="How to clone a GitHub repo">

> - Once the application has been opened by VS Code, you will need to run the terminal command 'npm install' to install all of the dependencies (This could take some time).

> - Now the application is open with all its packages installed, you have two choices.
>   Open the application in development or production mode.
>   Either will run the application but the production mode will give you the best experience.
>
> To run development mode, type the folllowing: _ng serve_
>
> To run production mode, type the following: _ng serve --configuration production_

> - Lastly you will need to open a browser with the web address set to port listed in the terminal. It should be http://localhost:4200/

## Closing Notes

Now as I write this final paragraph, it's currently 30 degrees outside and my fan is working overtime, I do hope you enjoy going over my work.

Overall, I really enjoyed this project and the joys of seeing what other JavaScript frameworks can offer. Angular gets bad reputation in the WebDev world as being too heavy or opinionated but I can see its merits. It allows for you to 'do everything' without using libraries for routing and data fetching. I would word it like this:

'React is a better developer experience but Angular makes you feel like a more of an developer'

I am looking forward to using more Angular in the future and using it to its full potential!

Happy hacking,

_Will Borysiak_
