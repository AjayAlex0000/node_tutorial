const EventEmiter = require("events");

const customEmitter = new EventEmiter();

customEmitter.on("response", (name, id) => {
  console.log(`data received ${name} ${id}`);
});

customEmitter.on("response", () => {
  console.log(`some other logic`);
});

customEmitter.emit("response", "Ajay", 20);
