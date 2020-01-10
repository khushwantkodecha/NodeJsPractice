const axios = require("axios");

const user_name = "khushwantkodecha";

axios
  .get(`https://api.github.com/users/${user_name}`)
  .then(res => {
    console.log("res.data", res.data);
  })
  .catch(err => {
    console.log("err", err);
  });
