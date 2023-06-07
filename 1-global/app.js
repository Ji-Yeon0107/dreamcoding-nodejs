const fs = require("fs");

console.log("global", global);

global.hello = () => {
  console.log("global hello!");
};
hello();
//global.hello()와 같다.;
