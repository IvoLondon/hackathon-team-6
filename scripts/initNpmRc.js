const path = require("path");
const fs = require("fs");

console.log("Initializing .npmrc file...");

console.log("DIRECTORy", fs.readdirSync(path.join(__dirname, "..")));
// Open LOCAL .npmrc file
const localNpmrcPath = path.join(__dirname, "..", "local.npmrc");
// Replace content of the file with the content of the environment variable
fs.readFile(localNpmrcPath, "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }

  // replace registry
  let result = data.replace(/\$REGISTRY/g, process.env.NPMRC_REGISTRY);

  fs.writeFile(localNpmrcPath, result, "utf8", function (err) {
    if (err) return console.log(err);
  });
});

// Open ROOT .npmrc file
const rootNpmrcPath = path.join(__dirname, "..", "root.npmrc");
// Replace content of the file with the content of the environment variable
fs.readFile(rootNpmrcPath, "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }

  // replace $EMAIL
  result = data.replace(/\$EMAIL/g, process.env.NPMRC_EMAIL);
  // replace password
  result = result.replace(/\$PASSWORD/g, process.env.NPMRC_PASSWORD);

  fs.writeFile(rootNpmrcPath, result, "utf8", function (err) {
    if (err) return console.log(err);
  });
});

// Move .local.npmrc to root folder
fs.rename(
  rootNpmrcPath,
  path.join(__dirname, "..", "..", "..", ".npmrc"),
  (err) => {
    if (err) throw err;
    console.log("Moved completed!");
  }
);

console.log("Done initializing .npmrc file.");
