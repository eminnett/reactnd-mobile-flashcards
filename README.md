# Mobile Flashcards
## React Native Project
#### React Nanodegree (Udacity)
Project submission by Edward Minnett (ed@methodic.io).

January XXth, 2019. (Revision X)

----------

# TODOs

Thursday
- Introduce Redux
- Implement Dynamic Functionality
- Add AsyncStorage so data is persistent
- Add notifications to the app
- A Notification is generated at a specific time if the user hasn't completed at least one quiz for that day.
- Finalise app styling
Friday
- Make sure there is seed data when initialising the app
- Finish writing the README

Requirements:
- The primary view, seen when the app loads, is a list of created decks which includes the name of each deck and the number of cards.
- Pressing on a deck in the list should generate an animation, and the app should route to an individual deck view.
- The individual deck view includes (at a minimum):
    The deck title
    Number of cards in the deck
    Option to start a quiz for that deck
    Option to add a new question to the deck
- Pressing the 'Start a Quiz' or 'Add Card' button properly routes to the correct views for those activities.
- The New Question view includes a form with fields for a question and answer, and a submit button.
- Submitting the form correctly adds the question to the deck.
- The Quiz view starts with a question from the selected deck.
- The question is displayed, along with a button to show the answer.
- Pressing the 'Show Answer' button displays the answer.
- Buttons are included to allow the student to mark their guess as 'Correct' or 'Incorrect'
- The view displays the number of questions remaining.
- When the last question is answered, a score is displayed. This can be displayed as a percentage of correct answers or just the number of questions answered correctly.
- When the score is displayed, buttons are displayed to either start the quiz over or go back to the Individual Deck view.
- Both the 'Restart Quiz' and 'Back to Deck' buttons route correctly to their respective views.
- The view includes a form for creating a new deck - which should just be an input for the title and a 'Create Deck' button.
- Pressing the button correctly creates the deck and routes the user to the Individual Deck view for the new deck.
- Logic for notification has been implemented. Notifications are generated at a specific time if the user hasn't completed at least one quiz for that day.
- The app works correctly in either Android OR iOS devices (or emulator).
- Project README identifies which platform(s) have been tested.


## Overview

TODO: Describe the project

## Setup

To run the application, clone the project to a local directory and execute the following:

* install all project dependencies with `npm install`
* start the development server with `npm start`

This will initialise the Expo Devtools from which the application can be connected to either local Android or iOS simulators. For more information about the Expo CLI, please see this [blog post](https://blog.expo.io/expo-cli-2-0-released-a7a9c250e99c)

## References & Sources

The following sources were used as reference while working on this project:

- https://facebook.github.io/react-native/docs
