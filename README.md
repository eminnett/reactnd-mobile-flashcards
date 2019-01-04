# Mobile Flashcards
## React Native Project
#### React Nanodegree (Udacity)
Project submission by Edward Minnett (ed@methodic.io).

January 4th, 2019. (Revision 1)

----------

## Overview

This is the final assessment project for Udacity's React Native course. The goal of the project is to demonstrate an understanding of the Redux Native framework, how to use it in conjunction with the Redux framework, and the best practices for the use of React Native and Redux when building native mobile applications.

The project takes the form of a simple flash card studying app. Users are able to do the following while using the application:

- Create new decks to organise the flash cards.
- Add new cards to each deck.
- Study the cards in a given deck marking them as correct or incorrect.
- See how they scored after answering all the cards in a deck.

The data store is cached using the Redux-Persist package which in turn uses the AsyncStorage React Native API to persist the application's state.

## Development Environment and Testing

This project has been developed on OSX using Genymotion 3.0. The application has been tested on the Genymotion Android emulator using the Android 9.0 API 28.

## Setup

To run the application, clone the project to a local directory and execute the following:

* install all project dependencies with `npm install`
* start the development server with `npm start`

This will initialise the Expo Devtools from which the application can be connected to either local Android or iOS simulators. For more information about the Expo CLI, please see this [blog post](https://blog.expo.io/expo-cli-2-0-released-a7a9c250e99c)

## References & Sources

The following sources were used as reference while working on this project:

- https://facebook.github.io/react-native/docs
- https://reactnavigation.org/docs/en/
- https://reactjs.org/docs/
- https://stackoverflow.com
- https://github.com/udacity/reactnd-UdaciFitness-complete
