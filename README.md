# JavaScrivia
a trivia app for JavaScript

## Welcome!
JavaScrivia is a beginner's alternative to sites like LeetCode for practicing JavaScript. It utilizes React infrastructure, Express, a local API and an external API.

## How is data stored?
All of the data for our users is stored in a locally created SQL database. Each row in our SQL table keeps track of a user's username, password, and score.

## How does the sign-in process work?
All of our React routes are stored in our uppermost 'App' component, so that the pieces of state that hold onto the current user and their score (along with the respective functions to update said properties) can be prop-drilled via the routes. Our initial Landing Page routes to the Login and Signup pages, both of which subsequently route to the Trivia page after user verification.

The functionality in the Login page queries the SQL database for inputs corresponding to the text written in the username and password fields. If a valid response is found, then our setUsername function from props is invoked and we route to the Trivia page, which holds onto the current user and score in its own state via prop drilling in the /login/trivia route.

The Signup page makes a POST request to the database after valid credentials are input, creating a new row in the SQL table with a username, a password, and a score initialized to 0. The username and score properties are then prop-drilled to the Trivia page in the /signup/trivia route.

## How does the trivia game work?
The first question will be loaded on the Trivia page when the user clicks the "Next Question" button, which triggers the grabTrivia function. The grabTrivia function makes a fetch GET request to an external API which returns an object with an array of objects inside of it:

  {
    questions: [{...}, {...}, {...}],
    ...
  }

 In our state we have an "i" property intialized to 0, which will allow us to iterate through the array of objects. 
 
 Each of the objects inside this array holds a question and all of its relevant data stored in properties(question, code snippet, answer options, correct answer, answer explanation, etc.). Each of these properties on the question object are stored in state once the data is received, and then the value of our "i" key is incremented to that the data for the next object in the array will be loaded the next time the user clicks the "next question" button.

 There is also a boolean inside the 'explanation' div that checks if the 'explanation' property in state is set to true. This property in state is set to true when our changeBoolean function is invoked, which is triggered when a user submits an answer A, B, C, or D. When 'explanation' is true, we render the data on the answer explanation property in our explanation div. In simple terms, this means that a user gets to read the correct answer explanation for the current question after they make an answer attempt.

 ## How does the leaderboard work?
There is more functionality in our changeBoolean function that influences the score and therefore the leaderboard. When a user submits an answer attempt (triggering this changeBoolean function), a fetch PATCH request is made to our SQL database. The PATCH request uses the username property stored in state to access the score for the user who is currently logged in and increments their score in the database by 1.

The Leaderboard component makes a fetch GET request to our SQL database which returns an array of user objects. These objects are displayed by looping through the array and rendering an instance of the 'Competitors' div for each object in the array. All of this functionality is wrapped inside of a useEffect which causes the Leaderboard to re-render any time a change is made to its props.score (caused by incrementation in the changeBoolean function on the Trivia page).

## What is missing?
Our leaderboard currently does not factor incorrect answers into a user's score. Additionally, a user's progress is not stored in the database, meaning that every time a user logs in they will be set back to the first question in the array and their score will continue to increment upon answering the same question repeatedly if they just log out and log in to answer it again.
Potential stretch features could keep track of a user's progress, starting them at the place they left off last, or divide the questions into units or categories so that a user can choose what they want to study.
### Owners
Kara Chisholm
Yuehao Wong
Mike Mezhiritskiy
Lilah August