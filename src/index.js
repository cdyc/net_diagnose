var ping = require("ping");

var hosts = ["127.0.0.1", "google.com", "yahoo.com"];

const failInfo = [];

async function ipAnany() {
  for (let i = 0; i < hosts.length; i++) {
    let host = hosts[i];
    let { alive } = await ping.promise.probe(host, {
      // Timeout in seconds for each ping request.
      timeout: 3,
    });
    let str = `网络诊断中(${i + 1}/${hosts.length}) ${host}:\t${
      alive ? "通过" : "网络连接失败"
    }`;
    console.log(str);
    if (!alive) {
      failInfo.push(str);
    }
  }
}

ipAnany();
