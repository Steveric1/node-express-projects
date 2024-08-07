const os = require("os");
const time = require("./1-utils");

console.log(os.type());

const user = os.userInfo();
console.log(user);

// uptime
const uptime = os.uptime();

// method returns the system uptime in seconds
console.log("The system uptime is " + uptime + "seconds");

// method returns the system uptime in min
const min = time.timMinutes(uptime);
console.log("The system uptime is " + min + "minutes");

// method returns the system uptime in hours
const hours = time.timHours(min);
console.log(
	"The system uptime is " +
		hours.hours +
		"hours " +
		hours.remainingMin +
		"minutes"
);

// Get details of the currenOs
const currentOs = {
    name: os.type(),
	release: os.release(),
	totalMem: os.totalmem(),
	freeMem: os.freemem(),
}

console.log(currentOs);
