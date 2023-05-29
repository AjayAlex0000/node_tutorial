const { readFile, writeFile } = require("fs");

console.log("Start");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  console.log("First");

  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    console.log("Second");

    writeFile(
      "./content/result-sync.txt",
      `Here is the result : ${first}, ${second}`,
      async (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
        console.log("end");
      }
    );
  });
});

console.log("Starting next Task");
