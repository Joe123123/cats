const fs = require("fs");

const breedDetailsFromFile = function(breed, cb) {
  fs.readFile(`./data/${breed}.txt`, "utf8", (error, data) => {
    if (!error) {
      cb(data);
    } else {
      cb();
    }
  });
};

module.exports = breedDetailsFromFile;
