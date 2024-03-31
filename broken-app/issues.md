# Broken App Issues

1: No console.log for `app.listen` so dev can see which port it is on.

2: Moved `app.listen` to server.js file so testing works.

3: Should have ExpressError class and set it up so we aren't showing user sensitive information.

4: Added a "baseURL" variable for easier editing/coding.

5: removed all `var` declarations and any uneccasary `let`s.

6: Refactored Code, `results` was `await`ing at the wrong point in code, causing return issues.

7: Improved Readability.

