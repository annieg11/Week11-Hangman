# Week11-Hangman
Hangman in terminal!!

OVERVIEW:

USING JAVASCRIPT OBJECT CONSTRUCTORS.
THIS HANGMAN GAME RUNS ENTIRELY ON NODE.JS.

INITIALL SETUP IN TERMINAL

NPM INIT
NPM INSTALL PROMPT --SAVE
CREATED FILES IN FOLDER "Week11-Hangman" :
GAME.JS
LETTER.JS
WORD.JS
MAIN.JS
.GITIGNORE
PACKAGE.JSON (CAME WITH NPM INIT)

APP:
Both letter.js and word.js should be constructor files:
word.js should contain all of the methods which will check the letters guessed versus the random word selected.
letter.js should control whether or not a letter appears as a "_" or as itself on-screen.
Your game.js file will randomly select a word for the player.
main.js will contain the logic of your app. Running it in Terminal/Bash will start the game.
The app should end when a player guesses the correct word or runs out of guesses.

CHALLENGES FACED:

DECIDING THE TERRITORY ISSUES(what to code) in LETTER.JS AND WORD. JS AND GAME.JS.
STARTER KIT HELPED TO UNDERSTAND THE IMPORTS/EXPORTS OF THESE FILES AND RESOLVED THE TERRITORY ISSUES AMONG THE FILES RESPECTIVELY.
CODING CHALLENGES ESPECIALLY IN WORD.JS AND MAIN.JS WERE FACED.

NEW LEARNINGS:

HOW TO REMOVE FOLDER NODES_MODULES FROM YOUR GITHUB
(git rm -r --cached node_modules
git commit -m 'Remove the now ignored directory node_modules'
git push origin master) WAS USED IN TERMINAL AFTER ADDING 'NODE_MODULES' TO .GITIGNORE FILE

UNDERSTANDING JS CONSTRUCTORS.
USED PROMPT NPM PACKAGE INSTEAD OF INQUIRER.


