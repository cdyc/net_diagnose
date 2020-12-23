const ping = require("ping");

async function ipAnany(hosts) {
  const failInfo = [];
  for (let i = 0; i < hosts.length; i++) {
    let host = hosts[i];
    let { alive } = await ping.promise.probe(host, {
      // Timeout in seconds for each ping request.
      timeout: 3,
    });
    let str = `网络诊断中(${i + 1}/${hosts.length}) 服务器：${host}:${
      alive ? "通过" : "连接失败"
    }`;
    console.log(str);
    if (!alive) {
      str = `\t服务器：${host}: 网络连接失败`;
      failInfo.push(str);
    }
  }
  return failInfo;
}

module.exports.ip = ipAnany;
