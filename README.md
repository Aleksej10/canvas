# JavaScript Game Developer coding test
You can quickly check the current state [here](https://aleksej10.github.io/canvas/).  

## Task
Make a high-low card game using React/Redux and Canvas.  

## What's been done so far
* UI
  - game view 
    * back of the card with buttons for guessing higher or lower 
    * last opened card indicating how the last guess went
    * previous cards stacked on top of each other
  - betting view
    * reset button
    * current bet and buttons for chagning bet size
    * total amount
* Logic
  - minimum bet is 10
  - deck gets shuffled after each round
  - round ends with a loss or with a game reset
  - if user's guess is correct, bet size is won and bet size remains the same
  - if user's guess is not correct, player loses the money he bet, and bet size is updated like this:
      * user has enough money to bet the same amout again: bet amout is kept
      * user have less than 10 units left: game ends
      * otherwise: bet size is changed to 10
* Conditions 
  - [x] Build a game interface using React/Redux. 
  - [x] On refresh, the game must continue from before refresh.
  - [ ] Render the cards using canvas.

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
Game is almost **fully** functional.  
It is written in React/Redux using css for UI elements.  

**fully**:
  - Parts of the game logic are awaiting clearance (namely `new game` and `collect` buttons).
  - UI is still to be implemented using Canvas.


## TODO
* Organize code into separate folders.
* Make mobile friendly?
