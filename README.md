# Would You Rather Project

"Would You Rather" is a Udacity React Nanodegree project incorporating React with Redux. The project's goal was to improve to improve the predictability of your application's state, to establish strict rules for getting, listening, and updated the store, and to identify what state should live inside of Redux and what state should live inside of React components.
Redux to manage your application state. For this application, most of the application’s state is managed by Redux. Component state is used to handle form input fields and controlled components. Otherwise, the rest of the state for the application is controlled by reducers

# How to setup

cd project

install all project dependencies with npm install

start the development server with npm start

# Project Specifications

There should be a way for the user to impersonate/ log in as an existing user. (This could be as simple as having a login box that appears at the root of the application. The user could then select a name from the list of existing users.)

The application works correctly regardless of which user is selected.

The application allows the user to log out and log back in. The user should be logged in to submit new polling questions, vote, and view the leaderboard.

Once the user logs in, the home page is shown.

Whenever the user types something in the address bar, the user is asked to log in before the requested page is shown

# HOW IT WORKS

## Login
The app begins on a login page where you will have the option to select a user from a dropdown list. Once a user is chosen, the page will be redirected to the user homepage.The user also has the option
to Register as new user

## Home Page
Once the user is authenticated, the user will be able to toggle between the user's unanswered question and answered questions on his or her homepage, which is located at the root. The unanswered questions are shown by default.

The chosen user's avatar will always be displayed in the navigation bar.

For unanswered questions, the user will be able to see  the question, who asked the question,, and the two options to choose from.

For answered questions, the user will be able to see the question, the two options, the number of people who voted for that option, and the user's choice

## New Question
The user can also ask new questions.After clicking on 'New Question,' the application should show a form with the text 'Would You Rather' and
inputs for creating the two options. Upon submitting the form, a new poll should be created, the user will be redirected to the user home page, and the new polling question 
should appear in the correct category on teh home page.

## Leaderboard
Leaderboard
To display the ranking, the application contains a leaderboard that available via the /leaderboard route. Each user contains the user's name, user's avatar, number of questions asked,
number of questions the user answered, and the total score.Users are in order of descending order based on the sum of questions asked and questions answered. Ranks are decided by the total score and displayed from first rank to next and then next.

## Register
The application has the ability to add a new user apart from the usual populated users. Clicking on register button, the login page will be redirected to the register page where the 
new user's name,avatar and username should be submitted

# APPLICATION FUNCTIONALITY

1. The answered and unanswered polls are both available at the root.
2. The user can alternate between viewing answered and unanswered polls.
3. The unanswered questions are shown by default.
4. The name of the logged in user is visible on the page.
5. The user can navigate to the leaderboard.
6. The user can navigate to the form that allows the user to create a new poll.

Each polling question resides in the correct category. For example, if a question hasn’t been answered by the current user, it should be in the “Unanswered” category.
A polling question links to details of that poll.
The polls in both categories are arranged from the most recently created (top) to the least recently created (bottom).

When the user is logged in, the details of the poll are shown. If the user is logged out, he/she is asked to log in before before being able to access the poll.
The application asks the user to sign in and shows a 404 page if that poll does not exist. (In other words, if a user creates a poll and then the same or another user tries to access that poll by its url, the user should be asked to sign in and then be shown a 404 page. Please keep in mind that new polls will not be accessible at their url because of the way the backend is set up in this application.)

# ARCHITECTURE

1. The store is the application’s source of truth.
2. Components read the necessary state from the store; they do not have their own versions of the same state.
3. There are no direct API calls in the components' lifecycle methods.
4. Most application state is managed by the Redux store. State-based props are mapped from the store rather than stored as component state.
5. Form inputs and controlled components may have some state handled by the component.
6. Updates are triggered by dispatching action creators to reducers.
7. Reducers and actions are written properly and correctly return updated state to the store.
