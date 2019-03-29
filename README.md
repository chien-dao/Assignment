# Assignment

Implement an utility for tweeter - **Split message longer than 50 characters**.
If the user input a message longer than 50 characters, then the message is splited into chunks. Each message chunk won't be longer than 50 characters.

Example: "I can't believe Tweeter now supports chunking my messages, so I don't have to do it myself." will be splited into:
  - "1/2 I can't believe Tweeter now supports chunking".
  - "2/2 my messages, so I don't have to do it myself.".

### Installation

Make sure you have [Node.js](https://nodejs.org/) installed.
Install the necessary dependencies and start the server.
```sh
$ npm i
$ npm start
```
To run a unit test for the splitMessage function.
```sh
$ npm test
```