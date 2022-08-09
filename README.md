<h1 align="center">Apteco Front End Project</h1>

## Project Description

- This project will serve as a tool for Teal Green Holidays to track the number of people that have visited certain holiday destinations.
- The application will have a hero section and a table which houses all of the data.
- The table can be sorted by its values, filtered based on years and paginated to get clear and readable data.

## The Technology Used

- The project is built using Angular 14 alongside SASS and Angular Material.
- The data is pulled in using an Angular service and passed into the a Material table component.
- I initially used React (NextJS) however decided that Angular was more fitting both for my own development and for Apteco's needs.

## Planning / Thought Process

My first step was to read through the github repo and understand exactly what is asked of me.
I familiarised myself with the problem and begun to plan how I would break it down into smaller tasks.
I identified that I had four distinct sections to complete:

- Create an application that displays the data using the raw JSON data provided inside a basic table.
- Re-create the table using the Apteco API to get the data as per the last extension requirement.
- Allow the user to sort the table based on smallest/largest values.
- Allow the user to filter the table based on certain destinations and/or years.

## Assumptions

There are going to be two sections of this project that are going to test me.

- First, using Angular to create the application as my knowledge is growing, however it's less capable than my React knowledge.
- Second, using the API to get the data and then pushing it into the table. This could be easy however there many be issues with the auth and data processing.

I have already gotten assistance with the filtering / sorting by using the Material table so I am going to get the API working then solve this task.

## Journal of Actions

This will be a log of all the actions / steps I have taken to complete the project along with my thoughts.

- I started with a React project as this would have been the easiest option however I decided to use Angular as it will test me more as a person and is more on par with Apteco's practises.
- Now I have gotten a basic Angular template, I am going to create a basic user interface comprising of the layout styles and the hero component.
- Now that the banner and layout is sorted, its time to import the MatTable to the project and render the skeleton of the table.
- I have now created a fully operational table component using the correct Material modules, my next tasks is working out how to add the JSON data to the table.
- I have used an angular service to get the data from the static JSON file and supply that data to my app.component.ts.
- I then used the @Input decorator to pass the data into the table component so I can access/process it into the mat-table.
- Once the data was present I could run a function called createTableData() which contains all of the relevant data (years, countries and attendance). I had to use the .split('\t') method to create the separate arrays.

## Problems

- The first problem I faced was getting the table to render without errors. I had to search through the error log and work out which modules I needed such as MatPaginatorModule, MatInputModule, MatSortModule etc to import. The angular API documentation assisted me with this, then I could correctly add them to the imports array and the table worked perfectly.

- The second problem I faced was receiving inside the table component as when I tried to log the @Input value, it simply returned undefined. After reading Angular documentation I realised that I was logged on ngOnInit which wouldnt work because the component was rendering THEN receiving the data. I then conditionally rendered the component using the \*ngIf="data" property and then the data was present before my log.

## Notes

Fiddle with data in material or use custom headers
