Project Overview
 
This project is a combination of a Web App and an API App, both deployed on Microsoft Azure. 
The Web App, known as Crypto Predict, is a user-centric application that provides a platform to play a prediction game based on Bitcoin prices.
The API App, on the other hand, serves as the backbone of our application, managing requests and responses between the frontend and our data storage.

Crypto Predict is a React application developed with TypeScript, offering basic functionalities and a user-friendly interface. 
The game revolves around making accurate predictions on Bitcoin prices, with correct predictions boosting the user's score and incorrect ones leading to a decrease.
The current Bitcoin price used in the game is fetched from CoinDesk.

The Web App interacts solely with the API App, which in turn communicates with external sources such as CoinDesk and Azure Storage. 
The API App, developed using ASP.NET and C#, includes various controllers for different tasks including retrieving the current Bitcoin price,
updating the user's score in Azure Storage, and fetching the user's current score. Azure Storage serves as the data storage system for the application.



Deployment
 
The Web App and the API App are both hosted on Microsoft Azure utilizing Azure App Service, a platform that allows for the building, deployment, and scaling of web apps. 
This platform provides robust capabilities such as built-in DevOps, continuous integration with Visual Studio Online and GitHub, staging and production support, and automatic patching. 
With Azure App Service, our applications can enjoy a seamless deployment and management experience.


Further steps:
1. Authentication
2. Units tests+ Integration tests
3. CI/CD

