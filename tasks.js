/**
 * Starts the application
 * This is the function that is run when the app starts
 *
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name) {
  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", onDataReceived);
  console.log(`Welcome to ${name}'s application!`);
  console.log("--------------------");
}

/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 *
 * For example, if the user entered
 * ```
 * node tasks.js batata
 * ```
 *
 * The text received would be "batata"
 * This function  then directs to other functions
 *
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  if (text.match(/quit/) || text.match(/exit/)) {
    quit();
  } else if (text.match(/hello/)) {
    hello(text);
  } else if (text.match(/help/)) {
    help();
  } else if (text.match(/list/)) {
    getList();
  } else if (text.slice(0, 6) === "remove") {
    removeFromList(text.slice(6));
  } else if (text.slice(0, 3) === "add") {
    add(text.substring(3).trim());
  } else {
    unknownCommand(text);
  }
}

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"');
}

/**
 * Says hello
 *
 * @returns {void}
 */
function hello(text) {
  let txt = text.replace(/+/, " ");
  let t = txt.trim() + "!";
  console.log(t);
}

/**
 * List all the commands
 *
 * @returns {void}
 */
function help() {
  let exp = "!";
  console.log(`
  1.quit${exp}
  2.hello${exp}
  3.helo${exp}
  4.add${exp}
  5.remove${exp}
  6.unknown Command${exp}`);
}
const list = ["eat", "sleep", "repeat"];
function getList() {
  for (let i = 0; i < list.length; i++) console.log(i + 1 + "-" + list[i]);
}

function add(text) {
  if (text.slice(0, 3) == "") {
    console.log("error");
  } else {
    list.push(text);
  }
}

function removeFromList(text) {
  if (list.length <= text) {
    console.log("error");
  }
  list.splice(text + 1, 1);
}
/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  console.log("Quitting now, goodbye!");
  process.exit();
}

// The following line starts the application
startApp("Anthony Karam");
