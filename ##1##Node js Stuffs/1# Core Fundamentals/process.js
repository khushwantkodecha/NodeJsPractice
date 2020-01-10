// this method writre something as like cosole.log
process.stdout.write("write something and then i will write that back ");

//here "data" is predefined event we can create our custom event for that check customEvent.js
process.stdin.on("data", answer => {
  console.log(answer.toString());
  process.exit();
});
