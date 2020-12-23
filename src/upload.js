const axios = require("axios");

const addLog = (params) =>
  axios({
    url: "http://10.8.1.25:100/1192/2e8739c35b.json",
    params,
  }).catch((e) => {
    console.log(e);
  });

module.exports.addLog = addLog;
