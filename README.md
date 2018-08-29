# mern-shoppinglist
A simple shoppinglist app using the mern stack.

## Config folder is missing
Config folder includes the keys file to connect to mLab for the mongo db. In case this project will be cloned, add in the root a folder called "config" and inside the folder config make a new file called: "keys.js". Inside the file keys add the following code:
```javascript
module.exports = {
  mongoURI: '<YOUR_URI_FROM_MLAB>'
}

```
