### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  Can manage async code with async/await, callbacks, and Promises 

- What is a Promise?
A promise tells JS that a value WILL be assigned it just has to wait.

- What are the differences between an async function and a regular function?
Async functions do not complete until it has a return from whatever task it is performing and ALWAYS return a Promise. 

- What is the difference between Node.js and Express.js?
Node is a JS env with libraries that simplifies writing software, Express is built on top of Node and adds more functionality, like middleware, routing, etc.

- What is the error-first callback pattern?
A function which is written with the error as the first attribute/ lines of the function. 

- What is middleware?
Middleware is software that provides common capabilities and communications between softwares.

- What does the `next` function do?
  The `next` keyword lets js know to continue onto the next thing once its reached, as well as passes errors to any error handlers.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
When called, we're attempting to return an array of multiple `JSON` Promises/returns. 

These will most likely NOT return/complete all at the same time.

There is NO apparent Error Handling.

-Side note: getUsers is only getting three specific users, it would be better `DEPENDING ON USE CASES` to create a function that we can pass in a URL and save the return to a variable so that we can manipulate the data.
