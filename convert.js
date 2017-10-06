const replace = require("replace-in-file");
const args = process.argv.slice(2);
const newState = args[0];
const options = require("./conversion.js");

if (!["native", "web"].includes(newState)) {
	console.log("Error: invalid state. Check arguments.");
	return;
}
if (newState === options.state) {
	console.log("Application already in this state.");
	return 0;
}

const rules = options[options.state];
rules.forEach(rule => {
	try {
		const changes = replace.sync(rule);
		console.log("Modified files:", changes.join(", "));
	} catch (error) {
		console.error("Error occurred:", error);
	}
});

try {
	const changes = replace.sync({
		files: "conversion.js",
		from: 'state: "' + options.state + '"',
		to: 'state: "' + newState + '"',
	});
	console.log("Successfully changed state: ", changes.join(", "));
} catch (error) {
	console.error("State/ Error occurred:", error);
}
