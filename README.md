# JavaScript Game Developer coding test
You can quickly check the current state [here](https://aleksej10.github.io/canvas/).  

## Task
Make a high-low card game using React/Redux and Canvas.  

* Gameplay UI
  - `<div>` cards
    * back of the card with buttons for guessing higher or lower 
    * last opened card indicating how the last guess went
    * previous cards stacked on top of each other
    * arrows in bottom-left corner indicating what user guessed for that card
  - `<canvas>` cards
    * cards stacked on top of each other
    * last guess (higher/lower) is indicated by card's position
* Controls UI
  - `new game`, `reset`, `collect` and buttons for changing bet size.
* Logic
  - minimum bet is 5
  - deck gets shuffled after each round
  - round ends with a loss, `collect` or with `reset`
  - if user's guess is correct, his in-round money doubles
  - if user's guess is not correct, he loses all in-round money

* Conditions 
  - [x] Build a game interface using React/Redux. 
  - [x] On refresh, the game must continue from before refresh.
  - [x] Render the cards using canvas.

## Note
I kept both canvas and div-element generated playing cards because   
I didn't like how the canvas generated ones turend out to be.  
They work in sync so it would be easy to quickly remove one.

## Run localy
* Create new react project with 
  ```
  npx create-react-app app-name
  ```
* cd into newly created directory
  ```
  cd app-name
  ```
* Switch contents of `src` folder with one from this repo
* Finally, start the app with 
  ```
  npm start
  ```

**Or** simply follow the link at the top of the `README`

## Current state
![demo](https://github.com/Aleksej10/canvas/blob/master/demo.gif)  

