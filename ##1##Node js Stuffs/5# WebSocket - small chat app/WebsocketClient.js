const WS = new WebSocket("ws://localhost:1211");

console.log(document.forms);

const titleChangeHandler = title => {
  document.getElementById("title").innerHTML = title;
};

WS.onopen = () => {
  console.log("connection is opend");
  titleChangeHandler("connection is open");
};

WS.onclose = () => {
  titleChangeHandler("connection is closed");
  console.log("connection is closed");
};

WS.onmessage = payload => {
  //   console.log("payload data", payload.data);
  diplayMessage(payload.data);
};

const diplayMessage = message => {
  let h3 = document.createElement("h3");
  h3.innerHTML = message;
  document.querySelector("div.messages").appendChild(h3);
};

document.forms[0].onsubmit = () => {
  let input = document.getElementById("message");
  console.log("input value", input.value);
  WS.send(input.value);
};
