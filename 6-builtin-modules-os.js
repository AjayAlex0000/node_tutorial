const os = require("os");

//info about current user

const user = os.userInfo();

console.log(user);

// method returns systems uptime in seconds

console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOs = {
  name: os.type(),
  relese: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOs);
