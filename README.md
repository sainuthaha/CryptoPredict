Project Overview
 
This project is a combination of a Web App and an API App. 
The Web App, known as Crypto Predict, is a user-centric application that provides a platform to play a prediction game based on crypto coinprices.
The API App, on the other hand, serves as the backbone of our application, managing requests and responses between the frontend and our data storage.

Crypto Predict is a React application developed with TypeScript, offering basic functionalities and a user-friendly interface. 
The game revolves around making accurate predictions on crypto prices, with correct predictions boosting the user's score and incorrect ones leading to a decrease.
The current Bitcoin price used in the game is fetched from CoinDesk.

The Web App interacts solely with the API App, which in turn communicates with external sources such as CoinDesk and Azure Storage. 
The API App, developed using ASP.NET and C#, includes various controllers for different tasks including retrieving the current Bitcoin price,
updating the user's score in Azure Storage, and fetching the user's current score. Azure Storage serves as the data storage system for the application.



Further steps:
1. Authentication
2. Units tests+ Integration tests
3. CI/CD

Screenshots:
![image](https://github.com/user-attachments/assets/5b28f3e5-df71-4a3e-af88-cd39354e8529)

![image](https://github.com/user-attachments/assets/02406b30-3f26-44eb-b1c9-ce02ea83e438)

![image](https://github.com/user-attachments/assets/a14034db-5757-4c1d-bedf-143482026fb5)

![image](https://github.com/user-attachments/assets/0922886a-17b9-40f4-b5a3-e9ae8dfa8c8b)
